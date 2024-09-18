import { Option } from "../../../../../../components/Select";
import { RangeDate } from "../../../../../../interfaces/generics.types";

type ActiveFiltersValues =
	| { type: "string"; value: string }
	| { type: "array"; value: Option<string>[] }
	| { type: "range-date"; value: RangeDate };

export type ActiveFilters = Record<string, ActiveFiltersValues>;
