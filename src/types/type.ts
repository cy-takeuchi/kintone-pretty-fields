import type {
	KintoneFormFieldProperty,
	KintoneFormLayout,
} from "@kintone/rest-api-client";

export interface RecordNumber extends KintoneFormFieldProperty.RecordNumber {
	// table?: string;
	group?: string;
}

export interface Creator extends KintoneFormFieldProperty.Creator {
	// table?: string;
	group?: string;
}

export interface CreatedTime extends KintoneFormFieldProperty.CreatedTime {
	// table?: string;
	group?: string;
}

export interface Modifier extends KintoneFormFieldProperty.Modifier {
	// table?: string;
	group?: string;
}

export interface UpdatedTime extends KintoneFormFieldProperty.UpdatedTime {
	// table?: string;
	group?: string;
}

export interface SingleLineText
	extends KintoneFormFieldProperty.SingleLineText {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface MultiLineText extends KintoneFormFieldProperty.MultiLineText {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface RichText extends KintoneFormFieldProperty.RichText {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Number extends KintoneFormFieldProperty.Number {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Calc extends KintoneFormFieldProperty.Calc {
	table?: string;
	group?: string;
}

export interface CheckBox extends KintoneFormFieldProperty.CheckBox {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface RadioButton extends KintoneFormFieldProperty.RadioButton {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface MultiSelect extends KintoneFormFieldProperty.MultiSelect {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface Dropdown extends KintoneFormFieldProperty.Dropdown {
	table?: string;
	group?: string;
	sortedOptions: string[];
	isLookupCopy?: true;
}

export interface UserSelect extends KintoneFormFieldProperty.UserSelect {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface OrganizationSelect
	extends KintoneFormFieldProperty.OrganizationSelect {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface GroupSelect extends KintoneFormFieldProperty.GroupSelect {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Date extends KintoneFormFieldProperty.Date {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Time extends KintoneFormFieldProperty.Time {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface DateTime extends KintoneFormFieldProperty.DateTime {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface Link extends KintoneFormFieldProperty.Link {
	table?: string;
	group?: string;
	isLookupCopy?: true;
}

export interface File extends KintoneFormFieldProperty.File {
	table?: string;
	group?: string;
}

export interface Lookup extends KintoneFormFieldProperty.Lookup {
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

export interface ReferenceTable
	extends KintoneFormFieldProperty.ReferenceTable {
	// table?: string;
	group?: string;
}

export interface Category extends KintoneFormFieldProperty.Category {
	// table?: string;
	// group?: string;
}

export interface Status extends KintoneFormFieldProperty.Status {
	// table?: string;
	// group?: string;
}

export interface StatusAssignee
	extends KintoneFormFieldProperty.StatusAssignee {
	// table?: string;
	// group?: string;
}

export interface Spacer extends KintoneFormLayout.Field.Spacer {}

export type InSubtable =
	| (Omit<SingleLineText, "group"> & { table: string })
	| (Omit<Number, "group"> & { table: string })
	| (Omit<Calc, "group"> & { table: string })
	| (Omit<MultiLineText, "group"> & { table: string })
	| (Omit<RichText, "group"> & { table: string })
	| (Omit<Link, "group"> & { table: string })
	| (Omit<CheckBox, "group"> & { table: string })
	| (Omit<RadioButton, "group"> & { table: string })
	| (Omit<Dropdown, "group"> & { table: string })
	| (Omit<MultiSelect, "group"> & { table: string })
	| (Omit<File, "group"> & { table: string })
	| (Omit<Date, "group"> & { table: string })
	| (Omit<Time, "group"> & { table: string })
	| (Omit<DateTime, "group"> & { table: string })
	| (Omit<UserSelect, "group"> & { table: string })
	| (Omit<OrganizationSelect, "group"> & { table: string })
	| (Omit<GroupSelect, "group"> & { table: string })
	| (Omit<Lookup, "group"> & { table: string });

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
	| Group<{ [fieldCode: string]: InGroup }>
	| Lookup
	| Subtable<{ [fieldCode: string]: InSubtable }>;
