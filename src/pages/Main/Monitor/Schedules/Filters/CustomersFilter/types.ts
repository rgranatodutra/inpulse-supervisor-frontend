import { RangeDate } from "../../../../../../interfaces/generics.types";

type ActiveFiltersValues =
    { type: "string", value: string } |
    { type: "array", value: Array<string> | Array<number> } |
    { type: "range-date", value: RangeDate };

export type ActiveFilters = Record<string, ActiveFiltersValues>;