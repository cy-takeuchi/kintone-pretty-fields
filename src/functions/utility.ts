import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { AppID, Lang, Layout, Properties } from "@kintone/rest-api-client/lib/src/client/types";
import { Spacer } from "@kintone/rest-api-client/lib/src/KintoneFields/types/fieldLayout";

import { guardFormField, guardFormLayout } from "kintone-typeguard";

import { kintonePrettyFields, kintonePrettyType } from "../index";

const sortOptions = (options: {
  [optionName: string]: {
    label: string;
    index: string;
  };
}): string[] =>
  Object.values(options)
    .sort((a, b) => Number(a.index) - Number(b.index))
    .map(({ label }) => label);

const generateFields = (formFields: Properties, formLayouts: Layout) => {
  const fields: kintonePrettyType.PrettyOneOf[] = [];
  const spacers: Spacer[] = [];

  const statusFormField = Object.values(formFields).find(guardFormField.isStatus);
  if (statusFormField && statusFormField.enabled) fields.push(statusFormField);

  const statusAssigneeFormField = Object.values(formFields).find(guardFormField.isStatusAssignee);
  if (statusAssigneeFormField && statusAssigneeFormField.enabled) fields.push(statusAssigneeFormField);

  const categoryFormField = Object.values(formFields).find(guardFormField.isCategory);
  if (categoryFormField && categoryFormField.enabled) fields.push(categoryFormField);

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

      const subField: { [fieldCode: string]: kintonePrettyType.PrettyInSubtable } = {};
      for (const { code: subFieldCode } of formLayout.fields) {
        const subFormField = formField.fields[subFieldCode];
        if (
          guardFormField.isCheckBox(subFormField) ||
          guardFormField.isDropDown(subFormField) ||
          guardFormField.isMultiSelect(subFormField) ||
          guardFormField.isRadioButton(subFormField)
        ) {
          const sortedOptions = sortOptions(subFormField.options);
          subField[subFormField.code] = { ...subFormField, table, sortedOptions };
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

      const subField: { [fieldCode: string]: kintonePrettyType.PrettyInGroup } = {};
      for (const formRow of formLayout.layout) {
        for (const field of formRow.fields) {
          if (guardFormLayout.isLabel(field) || guardFormLayout.isHr(field)) {
            continue;
          }

          if (guardFormLayout.isSpacer(field)) {
            spacers.push(field);
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
            subField[subFormField.code] = { ...subFormField, group, sortedOptions };
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
              | kintonePrettyType.PrettySingleLineText
              | kintonePrettyType.PrettyNumber
              | kintonePrettyType.PrettyMultiLineText
              | kintonePrettyType.PrettyRichText
              | kintonePrettyType.PrettyLink
              | kintonePrettyType.PrettyCheckBox
              | kintonePrettyType.PrettyRadioButton
              | kintonePrettyType.PrettyDropdown
              | kintonePrettyType.PrettyMultiSelect
              | kintonePrettyType.PrettyDate
              | kintonePrettyType.PrettyTime
              | kintonePrettyType.PrettyDateTime
              | kintonePrettyType.PrettyUserSelect
              | kintonePrettyType.PrettyOrganizationSelect
              | kintonePrettyType.PrettyGroupSelect =>
              kintonePrettyFields.isSingleLineText(field) ||
              kintonePrettyFields.isNumber(field) ||
              kintonePrettyFields.isMultiLineText(field) ||
              kintonePrettyFields.isRichText(field) ||
              kintonePrettyFields.isLink(field) ||
              kintonePrettyFields.isCheckBox(field) ||
              kintonePrettyFields.isRadioButton(field) ||
              kintonePrettyFields.isDropDown(field) ||
              kintonePrettyFields.isMultiSelect(field) ||
              kintonePrettyFields.isDate(field) ||
              kintonePrettyFields.isTime(field) ||
              kintonePrettyFields.isDatetime(field) ||
              kintonePrettyFields.isUserSelect(field) ||
              kintonePrettyFields.isOrganizationSelect(field) ||
              kintonePrettyFields.isGroupSelect(field),
          )
          ?.find((field) => field.code === fieldMapping.field);
        if (lookupCopyField) lookupCopyField.isLookupCopy = true;
      }
    }
  }

  const recordNumberField = Object.values(formFields).find(guardFormField.isRecordNumber);
  if (recordNumberField) {
    const isAdded = fields.some(guardFormField.isRecordNumber);
    if (!isAdded) fields.push(recordNumberField);
  }

  const creatorField = Object.values(formFields).find(guardFormField.isCreator);
  if (creatorField) {
    const isAdded = fields.some(guardFormField.isCreator);
    if (!isAdded) fields.push(creatorField);
  }

  const createdTimeField = Object.values(formFields).find(guardFormField.isCreatedTime);
  if (createdTimeField) {
    const isAdded = fields.some(guardFormField.isCreatedTime);
    if (!isAdded) fields.push(createdTimeField);
  }

  const modifierField = Object.values(formFields).find(guardFormField.isModifier);
  if (modifierField) {
    const isAdded = fields.some(guardFormField.isModifier);
    if (!isAdded) fields.push(modifierField);
  }

  const updatedTimeField = Object.values(formFields).find(guardFormField.isUpdatedTime);
  if (updatedTimeField) {
    const isAdded = fields.some(guardFormField.isUpdatedTime);
    if (!isAdded) fields.push(updatedTimeField);
  }

  return { fields, spacers };
};

const get = async ({ client, app, lang, preview }: { client: KintoneRestAPIClient; app: AppID; lang: Lang; preview: boolean }) => {
  const [{ properties: formFields }, { layout: formLayouts }] = await Promise.all([
    client.app.getFormFields({ app, lang, preview }),
    client.app.getFormLayout({ app, preview }),
  ]);

  return generateFields(formFields, formLayouts);
};

export { get };
