import { get } from "./functions/utility";
import * as kintonePrettyTypeGuard from "./functions/formField";
import type * as kintonePrettyType from "./exportTypes/formField";

const kintonePrettyFields = { get, ...kintonePrettyTypeGuard };
export { kintonePrettyFields };
export type { kintonePrettyType };
