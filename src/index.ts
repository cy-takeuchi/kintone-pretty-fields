import * as kintonePrettyTypeGuard from "./functions/formField";
import type * as kintonePrettyType from "./exportTypes/formField";
import { get } from "./functions/utility";

const kintonePrettyFields = { get, ...kintonePrettyTypeGuard };
export { kintonePrettyFields };
export type { kintonePrettyType };
