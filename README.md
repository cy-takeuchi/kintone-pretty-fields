# kintone-pretty-fields

[![npm version](https://badge.fury.io/js/kintone-pretty-fields.svg)](https://badge.fury.io/js/kintone-pretty-fields)

Retrieve kintone form field([@kintone/rest-api-client](https://www.npmjs.com/package/@kintone/rest-api-client)) information in a pretty format.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description

Provides the field information needed to create a kintone plugin.

1. Get both field and spacer.  
Check[ Kintone Developer Program ](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-fields/#response-parameters)for property details.

2. Obtain in layout order. (top left first, bottom right after)

3. Determine the fields in a table.  
Set the table field code to the table property.

```js
{
  type: 'SINGLE_LINE_TEXT',
  code: '文字列__1行_',
  label: '文字列 (1行)',
  noLabel: false,
  required: false,
  minLength: '',
  maxLength: '',
  expression: '',
  hideExpression: false,
  unique: false,
  defaultValue: '',
  table: 'テーブル' // table field code
}
```

4. Determine the fields in a group.  
Set the group field code to the group property.
```js
  {
    type: 'SINGLE_LINE_TEXT',
    code: '文字列__1行_',
    label: '文字列 (1行)',
    noLabel: false,
    required: false,
    minLength: '',
    maxLength: '',
    expression: '',
    hideExpression: false,
    unique: false,
    defaultValue: '',
    group: 'グループ' // group field code
  }
```

5. Determine the destination field for copying lookups.  
Set the true to the isLookupCopy property.(Requires lookup source app permissions)
```js
{
  type: 'SINGLE_LINE_TEXT',
  code: '文字列__1行_',
  label: '文字列 (1行)',
  noLabel: false,
  required: false,
  minLength: '',
  maxLength: '',
  expression: '',
  hideExpression: false,
  unique: false,
  defaultValue: '',
  isLookupCopy: true // If true, lookup copy destination field
}
```

6. Sorts the values of the options.
```js
{
  type: 'CHECK_BOX',
  code: 'チェックボックス',
  label: 'チェックボックス',
  noLabel: false,
  required: false,
  options: {
    sample1: { label: 'sample1', index: '0' },
    sample4: { label: 'sample4', index: '3' },
    sample3: { label: 'sample3', index: '2' },
    sample2: { label: 'sample2', index: '1' }
  },
  defaultValue: [],
  align: 'HORIZONTAL',
  sortedOptions: [ 'sample1', 'sample2', 'sample3', 'sample4' ] // sorted options
}
```

## Installation

### 1. Install with `npm`

This library is distributed on `npm`.

```shell
npm install kintone-pretty-fields
```

You can then use `import` to import the library.

```ts
// ES modules
import { kintonePrettyFields } from "kintone-pretty-fields";
```

## Usage

Here is a sample code that retrieves form fields of an app.

```ts
import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { kintonePrettyFields, kintonePrettyType } from "kintone-pretty-fields";

const client = new KintoneRestAPIClient();
const { fields, spacers } = await kintonePrettyFields.get({ client, app: 1, lang: "en", preview: false });
console.log({ fields, spacers });

const checkBoxFields = fields.filter(kintonePrettyFields.isCheckBox);
console.log(checkBoxFields);

const inSubtableFields = fields.filter(kintonePrettyFields.isInSubtable);
console.log(inSubtableFields);

const myFunction1 = (fields: kintonePrettyType.OneOf[]) => {
  // do something
};

const myFunction2 = (field: kintonePrettyType.CheckBox) => {
  // do something
};
```

## License

- [MIT](https://github.com/cy-takeuchi/kintone-pretty-fields/blob/main/LICENSE)
