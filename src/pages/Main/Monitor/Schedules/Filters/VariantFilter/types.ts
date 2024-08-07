import { RangeDate } from "../../../../../../interfaces/generics.types";

export type VariantFiltersValues =
    { type: "date-hour", value: Date | null } |
    { type: "select", value: Array<number> | Array<string> } |
    { type: "range-date", value: RangeDate } |
    { type: "boolean", value: boolean };

export type VariantFiltersTypes =
    { type: "date-hour" | "range-date" | "boolean" } |
    { type: "select", options: Array<number> | Array<string> };