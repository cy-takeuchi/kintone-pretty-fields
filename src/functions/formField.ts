import type { kintonePrettyType } from "../index";

export const isRecordNumber = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyRecordNumber =>
  field.type === "RECORD_NUMBER";
export const isCreator = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyCreator => field.type === "CREATOR";
export const isCreatedTime = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyCreatedTime =>
  field.type === "CREATED_TIME";
export const isModifier = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyModifier => field.type === "MODIFIER";
export const isUpdatedTime = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyUpdatedTime =>
  field.type === "UPDATED_TIME";
export const isSingleLineText = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettySingleLineText =>
  field.type === "SINGLE_LINE_TEXT";
export const isMultiLineText = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyMultiLineText =>
  field.type === "MULTI_LINE_TEXT";
export const isRichText = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyRichText => field.type === "RICH_TEXT";
export const isNumber = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyNumber => field.type === "NUMBER";
export const isCalc = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyCalc => field.type === "CALC";
export const isCheckBox = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyCheckBox => field.type === "CHECK_BOX";
export const isRadioButton = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyRadioButton =>
  field.type === "RADIO_BUTTON";
export const isMultiSelect = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyMultiSelect =>
  field.type === "MULTI_SELECT";
export const isDropDown = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyDropdown => field.type === "DROP_DOWN";
export const isUserSelect = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyUserSelect =>
  field.type === "USER_SELECT";
export const isOrganizationSelect = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyOrganizationSelect =>
  field.type === "ORGANIZATION_SELECT";
export const isGroupSelect = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyGroupSelect =>
  field.type === "GROUP_SELECT";
export const isDate = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyDate => field.type === "DATE";
export const isTime = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyTime => field.type === "TIME";
export const isDatetime = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyDateTime => field.type === "DATETIME";
export const isLink = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyLink => field.type === "LINK";
export const isFile = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyFile => field.type === "FILE";
export const isLookup = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyLookup =>
  (field.type === "SINGLE_LINE_TEXT" || field.type === "NUMBER") && "lookup" in field;
export const isSubtable = (
  field: kintonePrettyType.PrettyOneOf,
): field is kintonePrettyType.PrettySubtable<{ [fieldCode: string]: kintonePrettyType.PrettyInSubtable }> => field.type === "SUBTABLE";
export const isGroup = (
  field: kintonePrettyType.PrettyOneOf,
): field is kintonePrettyType.PrettyGroup<{ [fieldCode: string]: kintonePrettyType.PrettyInGroup }> => field.type === "GROUP";
export const isReferenceTable = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyReferenceTable =>
  field.type === "REFERENCE_TABLE";
export const isCategory = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyCategory => field.type === "CATEGORY";
export const isStatus = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyStatus => field.type === "STATUS";
export const isStatusAssignee = (field: kintonePrettyType.PrettyOneOf): field is kintonePrettyType.PrettyStatusAssignee =>
  field.type === "STATUS_ASSIGNEE";
