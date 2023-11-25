import {
  RecordNumber,
  Creator,
  CreatedTime,
  Modifier,
  UpdatedTime,
  SingleLineText,
  MultiLineText,
  RichText,
  Number,
  Calc,
  CheckBox,
  RadioButton,
  MultiSelect,
  Dropdown,
  UserSelect,
  OrganizationSelect,
  GroupSelect,
  Group,
  Date,
  Time,
  DateTime,
  Link,
  File,
  Lookup,
  Subtable,
  ReferenceTable,
  Category,
  Status,
  StatusAssignee,
  InSubtable,
  OneOf,
} from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/property";

interface PrettyRecordNumber extends RecordNumber {
  // table?: string;
  group?: string;
}

interface PrettyCreator extends Creator {
  // table?: string;
  group?: string;
}

interface PrettyCreatedTime extends CreatedTime {
  // table?: string;
  group?: string;
}

interface PrettyModifier extends Modifier {
  // table?: string;
  group?: string;
}

interface PrettyUpdatedTime extends UpdatedTime {
  // table?: string;
  group?: string;
}

interface PrettySingleLineText extends SingleLineText {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyMultiLineText extends MultiLineText {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyRichText extends RichText {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyNumber extends Number {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyCalc extends Calc {
  table?: string;
  group?: string;
}

interface PrettyCheckBox extends CheckBox {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

interface PrettyRadioButton extends RadioButton {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

interface PrettyMultiSelect extends MultiSelect {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

interface PrettyDropdown extends Dropdown {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

interface PrettyUserSelect extends UserSelect {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyOrganizationSelect extends OrganizationSelect {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyGroupSelect extends GroupSelect {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyDate extends Date {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyTime extends Time {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyDateTime extends DateTime {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyLink extends Link {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

interface PrettyFile extends File {
  table?: string;
  group?: string;
}

interface PrettyLookup extends Lookup {
  table?: string;
  group?: string;
}

type PrettySubtable<
  T extends {
    [fieldCode: string]: PrettyInSubtable;
  },
> = {
  type: "SUBTABLE";
  code: string;
  label: string;
  noLabel: boolean;
  fields: T;
};

type PrettyGroup<
  T extends {
    [fieldCode: string]: PrettyInGroup;
  },
> = {
  type: "GROUP";
  code: string;
  label: string;
  noLabel: boolean;
  openGroup: boolean;
  fields: T;
};

interface PrettyReferenceTable extends ReferenceTable {
  // table?: string;
  group?: string;
}

interface PrettyCategory extends Category {
  // table?: string;
  // group?: string;
}

interface PrettyStatus extends Status {
  // table?: string;
  // group?: string;
}

interface PrettyStatusAssignee extends StatusAssignee {
  // table?: string;
  // group?: string;
}

type PrettyInSubtable =
  | PrettySingleLineText
  | PrettyNumber
  | PrettyCalc
  | PrettyMultiLineText
  | PrettyRichText
  | PrettyLink
  | PrettyCheckBox
  | PrettyRadioButton
  | PrettyDropdown
  | PrettyMultiSelect
  | PrettyFile
  | PrettyDate
  | PrettyTime
  | PrettyDateTime
  | PrettyUserSelect
  | PrettyOrganizationSelect
  | PrettyGroupSelect
  | PrettyLookup;

type PrettyInGroup =
  | PrettyRecordNumber
  | PrettyCreator
  | PrettyCreatedTime
  | PrettyModifier
  | PrettyUpdatedTime
  | PrettySingleLineText
  | PrettyNumber
  | PrettyCalc
  | PrettyMultiLineText
  | PrettyRichText
  | PrettyLink
  | PrettyCheckBox
  | PrettyRadioButton
  | PrettyDropdown
  | PrettyMultiSelect
  | PrettyFile
  | PrettyDate
  | PrettyTime
  | PrettyDateTime
  | PrettyUserSelect
  | PrettyOrganizationSelect
  | PrettyGroupSelect
  | PrettyReferenceTable
  | PrettyLookup;

type PrettyOneOf =
  | PrettyRecordNumber
  | PrettyCreator
  | PrettyCreatedTime
  | PrettyModifier
  | PrettyUpdatedTime
  | PrettyCategory
  | PrettyStatus
  | PrettyStatusAssignee
  | PrettySingleLineText
  | PrettyNumber
  | PrettyCalc
  | PrettyMultiLineText
  | PrettyRichText
  | PrettyLink
  | PrettyCheckBox
  | PrettyRadioButton
  | PrettyDropdown
  | PrettyMultiSelect
  | PrettyFile
  | PrettyDate
  | PrettyTime
  | PrettyDateTime
  | PrettyUserSelect
  | PrettyOrganizationSelect
  | PrettyGroupSelect
  | PrettyReferenceTable
  | PrettyGroup<{
      [fieldCode: string]: PrettyInGroup;
    }>
  | PrettyLookup
  | PrettySubtable<{
      [fieldCode: string]: PrettyInSubtable;
    }>;
