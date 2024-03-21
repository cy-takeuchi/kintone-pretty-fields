import type * as kintonePrettyType from "../exportTypes/formField";

export const isRecordNumber = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.RecordNumber => field.type === "RECORD_NUMBER";
export const isCreator = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Creator => field.type === "CREATOR";
export const isCreatedTime = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.CreatedTime => field.type === "CREATED_TIME";
export const isModifier = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Modifier => field.type === "MODIFIER";
export const isUpdatedTime = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.UpdatedTime => field.type === "UPDATED_TIME";
export const isSingleLineText = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.SingleLineText =>
	field.type === "SINGLE_LINE_TEXT";
export const isMultiLineText = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.MultiLineText => field.type === "MULTI_LINE_TEXT";
export const isRichText = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.RichText => field.type === "RICH_TEXT";
export const isNumber = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Number => field.type === "NUMBER";
export const isCalc = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Calc => field.type === "CALC";
export const isCheckBox = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.CheckBox => field.type === "CHECK_BOX";
export const isRadioButton = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.RadioButton => field.type === "RADIO_BUTTON";
export const isMultiSelect = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.MultiSelect => field.type === "MULTI_SELECT";
export const isDropDown = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Dropdown => field.type === "DROP_DOWN";
export const isUserSelect = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.UserSelect => field.type === "USER_SELECT";
export const isOrganizationSelect = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.OrganizationSelect =>
	field.type === "ORGANIZATION_SELECT";
export const isGroupSelect = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.GroupSelect => field.type === "GROUP_SELECT";
export const isDate = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Date => field.type === "DATE";
export const isTime = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Time => field.type === "TIME";
export const isDatetime = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.DateTime => field.type === "DATETIME";
export const isLink = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Link => field.type === "LINK";
export const isFile = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.File => field.type === "FILE";
export const isSubtable = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Subtable<{
	[fieldCode: string]: kintonePrettyType.InSubtable;
}> => field.type === "SUBTABLE";
export const isGroup = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Group<{
	[fieldCode: string]: kintonePrettyType.InGroup;
}> => field.type === "GROUP";
export const isReferenceTable = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.ReferenceTable =>
	field.type === "REFERENCE_TABLE";
export const isCategory = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Category => field.type === "CATEGORY";
export const isStatus = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Status => field.type === "STATUS";
export const isStatusAssignee = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.StatusAssignee =>
	field.type === "STATUS_ASSIGNEE";

export const isLookup = (
	field: kintonePrettyType.OneOf,
): field is kintonePrettyType.Lookup => {
	if (isSingleLineText(field) && "lookup" in field) return true;
	if (isNumber(field) && "lookup" in field) return true;
	if (isCalc(field) && "lookup" in field) return true;
	if (isLink(field) && "lookup" in field) return true;
	if (isRecordNumber(field) && "lookup" in field) return true;
	return false;
};
export const isLookupCopy = (
	field: kintonePrettyType.OneOf,
): field is
	| kintonePrettyType.SingleLineText
	| kintonePrettyType.MultiLineText
	| kintonePrettyType.RichText
	| kintonePrettyType.Number
	| kintonePrettyType.Calc
	| kintonePrettyType.CheckBox
	| kintonePrettyType.RadioButton
	| kintonePrettyType.MultiSelect
	| kintonePrettyType.Dropdown
	| kintonePrettyType.UserSelect
	| kintonePrettyType.OrganizationSelect
	| kintonePrettyType.GroupSelect
	| kintonePrettyType.Date
	| kintonePrettyType.Time
	| kintonePrettyType.DateTime
	| kintonePrettyType.Link => {
	if (isSingleLineText(field) && "isLookupCopy" in field) return true;
	if (isMultiLineText(field) && "isLookupCopy" in field) return true;
	if (isRichText(field) && "isLookupCopy" in field) return true;
	if (isNumber(field) && "isLookupCopy" in field) return true;
	if (isCalc(field) && "isLookupCopy" in field) return true;
	if (isCheckBox(field) && "isLookupCopy" in field) return true;
	if (isRadioButton(field) && "isLookupCopy" in field) return true;
	if (isMultiSelect(field) && "isLookupCopy" in field) return true;
	if (isDropDown(field) && "isLookupCopy" in field) return true;
	if (isUserSelect(field) && "isLookupCopy" in field) return true;
	if (isOrganizationSelect(field) && "isLookupCopy" in field) return true;
	if (isGroupSelect(field) && "isLookupCopy" in field) return true;
	if (isDate(field) && "isLookupCopy" in field) return true;
	if (isTime(field) && "isLookupCopy" in field) return true;
	if (isDatetime(field) && "isLookupCopy" in field) return true;
	if (isLink(field) && "isLookupCopy" in field) return true;
	return false;
};
export const isInGroup = <T extends kintonePrettyType.OneOf>(
	field: T,
): field is T & { group: string } => "group" in field;
export const isInSubtable = <T extends kintonePrettyType.OneOf>(
	field: T,
): field is Exclude<
	T,
	| kintonePrettyType.RecordNumber
	| kintonePrettyType.Creator
	| kintonePrettyType.CreatedTime
> => {
	return "table" in field;
};
export const isNotInSubtable = <T extends kintonePrettyType.OneOf>(
	field: T,
): field is T => !("table" in field);
