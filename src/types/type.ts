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
  // Group,
  Date,
  Time,
  DateTime,
  Link,
  File,
  Lookup,
  // Subtable,
  ReferenceTable,
  Category,
  Status,
  StatusAssignee,
  // InSubtable,
  // OneOf,
} from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/property";

export interface PrettyRecordNumber extends RecordNumber {
  // table?: string;
  group?: string;
}

export interface PrettyCreator extends Creator {
  // table?: string;
  group?: string;
}

export interface PrettyCreatedTime extends CreatedTime {
  // table?: string;
  group?: string;
}

export interface PrettyModifier extends Modifier {
  // table?: string;
  group?: string;
}

export interface PrettyUpdatedTime extends UpdatedTime {
  // table?: string;
  group?: string;
}

export interface PrettySingleLineText extends SingleLineText {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyMultiLineText extends MultiLineText {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyRichText extends RichText {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyNumber extends Number {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyCalc extends Calc {
  table?: string;
  group?: string;
}

export interface PrettyCheckBox extends CheckBox {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

export interface PrettyRadioButton extends RadioButton {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

export interface PrettyMultiSelect extends MultiSelect {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

export interface PrettyDropdown extends Dropdown {
  table?: string;
  group?: string;
  sortedOptions: string[];
  isLookupCopy?: true;
}

export interface PrettyUserSelect extends UserSelect {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyOrganizationSelect extends OrganizationSelect {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyGroupSelect extends GroupSelect {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyDate extends Date {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyTime extends Time {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyDateTime extends DateTime {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyLink extends Link {
  table?: string;
  group?: string;
  isLookupCopy?: true;
}

export interface PrettyFile extends File {
  table?: string;
  group?: string;
}

export interface PrettyLookup extends Lookup {
  table?: string;
  group?: string;
}

export type PrettySubtable<
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

export type PrettyGroup<
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

export interface PrettyReferenceTable extends ReferenceTable {
  // table?: string;
  group?: string;
}

export interface PrettyCategory extends Category {
  // table?: string;
  // group?: string;
}

export interface PrettyStatus extends Status {
  // table?: string;
  // group?: string;
}

export interface PrettyStatusAssignee extends StatusAssignee {
  // table?: string;
  // group?: string;
}

export type PrettyInSubtable =
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

export type PrettyInGroup =
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

export type PrettyOneOf =
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
