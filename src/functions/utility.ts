import type {
	KintoneFormFieldProperty,
	KintoneFormLayout,
	KintoneRestAPIClient,
} from "@kintone/rest-api-client";
import { guardFormField, guardFormLayout } from "kintone-typeguard";
import type * as kintonePrettyType from "../exportTypes/formField";
import * as kintonePrettyTypeGuard from "../functions/formField";

// https://github.com/kintone/js-sdk/blob/master/packages/rest-api-client/src/client/types/app/index.ts
type Lang = "ja" | "en" | "zh" | "user" | "default";
type AppID = string | number;

const sortOptions = (options: {
	[optionName: string]: {
		label: string;
		index: string;
	};
}): string[] =>
	Object.values(options)
		.sort((a, b) => Number(a.index) - Number(b.index))
		.map(({ label }) => label);

const generateFields = (
	formFields: {
		[fieldCode: string]: KintoneFormFieldProperty.OneOf;
	},
	formLayouts: KintoneFormLayout.OneOf[],
) => {
	const fields: kintonePrettyType.OneOf[] = [];
	const spacers: kintonePrettyType.Spacer[] = [];

	const statusFormField = Object.values(formFields).find(
		guardFormField.isStatus,
	);
	if (statusFormField?.enabled) fields.push(statusFormField);

	const statusAssigneeFormField = Object.values(formFields).find(
		guardFormField.isStatusAssignee,
	);
	if (statusAssigneeFormField?.enabled) fields.push(statusAssigneeFormField);

	const categoryFormField = Object.values(formFields).find(
		guardFormField.isCategory,
	);
	if (categoryFormField?.enabled) fields.push(categoryFormField);

	for (const formLayout of formLayouts) {
		if (guardFormLayout.isRow(formLayout)) {
			for (const field of formLayout.fields) {
				if (guardFormLayout.isLabel(field) || guardFormLayout.isHr(field)) {
					continue;
				}

				if (guardFormLayout.isSpacer(field)) {
					spacers.push(field);
					continue;
				}

				const formField = formFields[field.code];

				// Subtable, Groupの可能性はゼロだが、type error回避のため
				if (guardFormField.isSubtable(formField)) continue;
				if (guardFormField.isGroup(formField)) continue;

				if (
					guardFormField.isCheckBox(formField) ||
					guardFormField.isDropDown(formField) ||
					guardFormField.isMultiSelect(formField) ||
					guardFormField.isRadioButton(formField)
				) {
					const sortedOptions = sortOptions(formField.options);
					fields.push({ ...formField, sortedOptions });
					continue;
				}

				fields.push(formField);
			}
		} else if (guardFormLayout.isSubtable(formLayout)) {
			const table = formLayout.code;
			const formField = formFields[table];

			// Subtableではない可能性はゼロだが、type error回避のため
			if (!guardFormField.isSubtable(formField)) continue;

			const subField: { [fieldCode: string]: kintonePrettyType.InSubtable } =
				{};
			for (const { code: subFieldCode } of formLayout.fields) {
				const subFormField = formField.fields[subFieldCode];
				if (
					guardFormField.isCheckBox(subFormField) ||
					guardFormField.isDropDown(subFormField) ||
					guardFormField.isMultiSelect(subFormField) ||
					guardFormField.isRadioButton(subFormField)
				) {
					const sortedOptions = sortOptions(subFormField.options);
					subField[subFormField.code] = {
						...subFormField,
						table,
						sortedOptions,
					};
					fields.push({ ...subFormField, table, sortedOptions });
					continue;
				}

				subField[subFormField.code] = { ...subFormField, table };

				fields.push({ ...subFormField, table });
			}

			fields.push({ ...formField, fields: subField });
		} else if (guardFormLayout.isGroup(formLayout)) {
			const group = formLayout.code;
			const formField = formFields[group];

			// Groupではない可能性はゼロだが、type error回避のため
			if (!guardFormField.isGroup(formField)) continue;

			const subField: { [fieldCode: string]: kintonePrettyType.InGroup } = {};
			for (const formRow of formLayout.layout) {
				for (const field of formRow.fields) {
					if (guardFormLayout.isLabel(field) || guardFormLayout.isHr(field)) {
						continue;
					}

					if (guardFormLayout.isSpacer(field)) {
						spacers.push({ ...field, group });
						continue;
					}

					const subFormField = formFields[field.code];

					// Category, Status, StatusAssignee, Subtable, Groupの可能性はゼロだが、type error回避のため
					if (guardFormField.isCategory(subFormField)) continue;
					if (guardFormField.isStatus(subFormField)) continue;
					if (guardFormField.isStatusAssignee(subFormField)) continue;
					if (guardFormField.isSubtable(subFormField)) continue;
					if (guardFormField.isGroup(subFormField)) continue;

					if (
						guardFormField.isCheckBox(subFormField) ||
						guardFormField.isDropDown(subFormField) ||
						guardFormField.isMultiSelect(subFormField) ||
						guardFormField.isRadioButton(subFormField)
					) {
						const sortedOptions = sortOptions(subFormField.options);
						subField[subFormField.code] = {
							...subFormField,
							group,
							sortedOptions,
						};
						fields.push({ ...subFormField, group, sortedOptions });
						continue;
					}

					subField[subFormField.code] = { ...subFormField, group };
					fields.push({ ...subFormField, group });
				}
			}

			fields.push({ ...formField, fields: subField });
		}
	}

	for (const field of Object.values(fields)) {
		if (guardFormField.isLookup(field)) {
			// ルックアップ先の閲覧権限がない場合
			if (field.lookup === null) continue;

			for (const fieldMapping of field.lookup.fieldMappings) {
				const lookupCopyField = fields
					.filter(
						(
							field,
						): field is
							| kintonePrettyType.SingleLineText
							| kintonePrettyType.Number
							| kintonePrettyType.MultiLineText
							| kintonePrettyType.RichText
							| kintonePrettyType.Link
							| kintonePrettyType.CheckBox
							| kintonePrettyType.RadioButton
							| kintonePrettyType.Dropdown
							| kintonePrettyType.MultiSelect
							| kintonePrettyType.Date
							| kintonePrettyType.Time
							| kintonePrettyType.DateTime
							| kintonePrettyType.UserSelect
							| kintonePrettyType.OrganizationSelect
							| kintonePrettyType.GroupSelect =>
							kintonePrettyTypeGuard.isSingleLineText(field) ||
							kintonePrettyTypeGuard.isNumber(field) ||
							kintonePrettyTypeGuard.isMultiLineText(field) ||
							kintonePrettyTypeGuard.isRichText(field) ||
							kintonePrettyTypeGuard.isLink(field) ||
							kintonePrettyTypeGuard.isCheckBox(field) ||
							kintonePrettyTypeGuard.isRadioButton(field) ||
							kintonePrettyTypeGuard.isDropDown(field) ||
							kintonePrettyTypeGuard.isMultiSelect(field) ||
							kintonePrettyTypeGuard.isDate(field) ||
							kintonePrettyTypeGuard.isTime(field) ||
							kintonePrettyTypeGuard.isDatetime(field) ||
							kintonePrettyTypeGuard.isUserSelect(field) ||
							kintonePrettyTypeGuard.isOrganizationSelect(field) ||
							kintonePrettyTypeGuard.isGroupSelect(field),
					)
					?.find((field) => field.code === fieldMapping.field);
				if (lookupCopyField) lookupCopyField.isLookupCopy = true;
			}
		}
	}

	const recordNumberField = Object.values(formFields).find(
		guardFormField.isRecordNumber,
	);
	if (recordNumberField) {
		const isAdded = fields.some(guardFormField.isRecordNumber);
		if (!isAdded) fields.push(recordNumberField);
	}

	const creatorField = Object.values(formFields).find(guardFormField.isCreator);
	if (creatorField) {
		const isAdded = fields.some(guardFormField.isCreator);
		if (!isAdded) fields.push(creatorField);
	}

	const createdTimeField = Object.values(formFields).find(
		guardFormField.isCreatedTime,
	);
	if (createdTimeField) {
		const isAdded = fields.some(guardFormField.isCreatedTime);
		if (!isAdded) fields.push(createdTimeField);
	}

	const modifierField = Object.values(formFields).find(
		guardFormField.isModifier,
	);
	if (modifierField) {
		const isAdded = fields.some(guardFormField.isModifier);
		if (!isAdded) fields.push(modifierField);
	}

	const updatedTimeField = Object.values(formFields).find(
		guardFormField.isUpdatedTime,
	);
	if (updatedTimeField) {
		const isAdded = fields.some(guardFormField.isUpdatedTime);
		if (!isAdded) fields.push(updatedTimeField);
	}

	return { fields, spacers };
};

const get = async ({
	client,
	app,
	lang,
	preview,
}: {
	client: KintoneRestAPIClient;
	app: AppID;
	lang: Lang;
	preview: boolean;
}) => {
	const [{ properties: formFields }, { layout: formLayouts }] =
		await Promise.all([
			client.app.getFormFields({ app, lang, preview }),
			client.app.getFormLayout({ app, preview }),
		]);

	return generateFields(formFields, formLayouts);
};

export { get, generateFields };
