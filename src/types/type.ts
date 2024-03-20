import type * as property from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/property";
import type * as layout from "@kintone/rest-api-client/lib/src/KintoneFields/types/fieldLayout";

export interface RecordNumber extends property.RecordNumber {
	// table?: string;
	group?: string;
}

export interface Creator extends property.Creator {
	// table?: string;
	group?: string;
}

export interface CreatedTime extends property.CreatedTime {
	// table?: string;
	group?: string;
}

export interface Modifier extends property.Modifier {
	// table?: string;
	group?: string;
}

export interface UpdatedTime extends property.UpdatedTime {
	// table?: string;
	group?: string;
}

export interface SingleLineText extends property.SingleLineText {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface MultiLineText extends property.MultiLineText {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface RichText extends property.RichText {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Number extends property.Number {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Calc extends property.Calc {
	table?: string;
	group?: string;
}

export interface CheckBox extends property.CheckBox {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface RadioButton extends property.RadioButton {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface MultiSelect extends property.MultiSelect {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface Dropdown extends property.Dropdown {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface UserSelect extends property.UserSelect {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface OrganizationSelect extends property.OrganizationSelect {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface GroupSelect extends property.GroupSelect {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Date extends property.Date {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Time extends property.Time {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface DateTime extends property.DateTime {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Link extends property.Link {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface File extends property.File {
	table?: string;
	group?: string;
}

export interface Lookup extends property.Lookup {
	table?: string;
	group?: string;
}

export type Subtable<
	T extends {
		[fieldCode: string]: InSubtable;
	},
> = {
	type: "SUBTABLE";
	code: string;
	label: string;
	noLabel: boolean;
	fields: T;
};

export type Group<
	T extends {
		[fieldCode: string]: InGroup;
	},
> = {
	type: "GROUP";
	code: string;
	label: string;
	noLabel: boolean;
	openGroup: boolean;
	fields: T;
};

export interface ReferenceTable extends property.ReferenceTable {
	// table?: string;
	group?: string;
}

export interface Category extends property.Category {
	// table?: string;
	// group?: string;
}

export interface Status extends property.Status {
	// table?: string;
	// group?: string;
}

export interface StatusAssignee extends property.StatusAssignee {
	// table?: string;
	// group?: string;
}

export interface Spacer extends layout.Spacer {}

export type InSubtable =
	| SingleLineText
	| Number
	| Calc
	| MultiLineText
	| RichText
	| Link
	| CheckBox
	| RadioButton
	| Dropdown
	| MultiSelect
	| File
	| Date
	| Time
	| DateTime
	| UserSelect
	| OrganizationSelect
	| GroupSelect
	| Lookup;

export type InGroup =
	| RecordNumber
	| Creator
	| CreatedTime
	| Modifier
	| UpdatedTime
	| SingleLineText
	| Number
	| Calc
	| MultiLineText
	| RichText
	| Link
	| CheckBox
	| RadioButton
	| Dropdown
	| MultiSelect
	| File
	| Date
	| Time
	| DateTime
	| UserSelect
	| OrganizationSelect
	| GroupSelect
	| ReferenceTable
	| Lookup;

export type OneOf =
	| RecordNumber
	| Creator
	| CreatedTime
	| Modifier
	| UpdatedTime
	| Category
	| Status
	| StatusAssignee
	| SingleLineText
	| Number
	| Calc
	| MultiLineText
	| RichText
	| Link
	| CheckBox
	| RadioButton
	| Dropdown
	| MultiSelect
	| File
	| Date
	| Time
	| DateTime
	| UserSelect
	| OrganizationSelect
	| GroupSelect
	| ReferenceTable
	| Group<{
			[fieldCode: string]: InGroup;
	  }>
	| Lookup
	| Subtable<{
			[fieldCode: string]: InSubtable;
	  }>;
