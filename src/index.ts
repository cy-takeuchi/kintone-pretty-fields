import type * as kintonePrettyType from "./exportTypes/formField";
import * as kintonePrettyTypeGuard from "./functions/formField";
import { generateFields, get, get as getFields } from "./functions/utility";

const kintonePrettyFields = {
	/**
	 *  kintone アプリのフィールドを取得します。
	 *  @deprecated getFields関数を利用してください。
	 */
	get,
	getFields,
	generateFields,
	...kintonePrettyTypeGuard,
};
export { kintonePrettyFields };
export type { kintonePrettyType };
