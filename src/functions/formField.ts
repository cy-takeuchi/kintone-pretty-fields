import {
  PrettyRecordNumber,
  PrettyCreator,
  PrettyCreatedTime,
  PrettyModifier,
  PrettyUpdatedTime,
  PrettySingleLineText,
  PrettyMultiLineText,
  PrettyRichText,
  PrettyNumber,
  PrettyCalc,
  PrettyCheckBox,
  PrettyRadioButton,
  PrettyMultiSelect,
  PrettyDropdown,
  PrettyUserSelect,
  PrettyOrganizationSelect,
  PrettyGroupSelect,
  PrettyDate,
  PrettyTime,
  PrettyDateTime,
  PrettyLink,
  PrettyFile,
  PrettyLookup,
  PrettySubtable,
  PrettyGroup,
  PrettyReferenceTable,
  PrettyCategory,
  PrettyStatus,
  PrettyStatusAssignee,
  PrettyInSubtable,
  PrettyInGroup,
  PrettyOneOf,
} from "../types/type";

const isRecordNumber = (field: PrettyOneOf): field is PrettyRecordNumber => field.type === "RECORD_NUMBER";
const isCreator = (field: PrettyOneOf): field is PrettyCreator => field.type === "CREATOR";
const isCreatedTime = (field: PrettyOneOf): field is PrettyCreatedTime => field.type === "CREATED_TIME";
const isModifier = (field: PrettyOneOf): field is PrettyModifier => field.type === "MODIFIER";
const isUpdatedTime = (field: PrettyOneOf): field is PrettyUpdatedTime => field.type === "UPDATED_TIME";
const isSingleLineText = (field: PrettyOneOf): field is PrettySingleLineText => field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (field: PrettyOneOf): field is PrettyMultiLineText => field.type === "MULTI_LINE_TEXT";
const isRichText = (field: PrettyOneOf): field is PrettyRichText => field.type === "RICH_TEXT";
const isNumber = (field: PrettyOneOf): field is PrettyNumber => field.type === "NUMBER";
const isCalc = (field: PrettyOneOf): field is PrettyCalc => field.type === "CALC";
const isCheckBox = (field: PrettyOneOf): field is PrettyCheckBox => field.type === "CHECK_BOX";
const isRadioButton = (field: PrettyOneOf): field is PrettyRadioButton => field.type === "RADIO_BUTTON";
const isMultiSelect = (field: PrettyOneOf): field is PrettyMultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (field: PrettyOneOf): field is PrettyDropdown => field.type === "DROP_DOWN";
const isUserSelect = (field: PrettyOneOf): field is PrettyUserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (field: PrettyOneOf): field is PrettyOrganizationSelect => field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (field: PrettyOneOf): field is PrettyGroupSelect => field.type === "GROUP_SELECT";
const isDate = (field: PrettyOneOf): field is PrettyDate => field.type === "DATE";
const isTime = (field: PrettyOneOf): field is PrettyTime => field.type === "TIME";
const isDatetime = (field: PrettyOneOf): field is PrettyDateTime => field.type === "DATETIME";
const isLink = (field: PrettyOneOf): field is PrettyLink => field.type === "LINK";
const isFile = (field: PrettyOneOf): field is PrettyFile => field.type === "FILE";
const isLookup = (field: PrettyOneOf): field is PrettyLookup =>
  (field.type === "SINGLE_LINE_TEXT" || field.type === "NUMBER") && "lookup" in field;
const isSubtable = (field: PrettyOneOf): field is PrettySubtable<{ [fieldCode: string]: PrettyInSubtable }> => field.type === "SUBTABLE";
const isGroup = (field: PrettyOneOf): field is PrettyGroup<{ [fieldCode: string]: PrettyInGroup }> => field.type === "GROUP";
const isReferenceTable = (field: PrettyOneOf): field is PrettyReferenceTable => field.type === "REFERENCE_TABLE";
const isCategory = (field: PrettyOneOf): field is PrettyCategory => field.type === "CATEGORY";
const isStatus = (field: PrettyOneOf): field is PrettyStatus => field.type === "STATUS";
const isStatusAssignee = (field: PrettyOneOf): field is PrettyStatusAssignee => field.type === "STATUS_ASSIGNEE";

export {
  isRecordNumber,
  isCreator,
  isCreatedTime,
  isModifier,
  isUpdatedTime,
  isSingleLineText,
  isMultiLineText,
  isRichText,
  isNumber,
  isCalc,
  isCheckBox,
  isRadioButton,
  isMultiSelect,
  isDropDown,
  isUserSelect,
  isOrganizationSelect,
  isGroupSelect,
  isDate,
  isTime,
  isDatetime,
  isLink,
  isFile,
  isLookup,
  isSubtable,
  isGroup,
  isReferenceTable,
  isCategory,
  isStatus,
  isStatusAssignee,
};
