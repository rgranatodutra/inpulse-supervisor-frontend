import { CustomState } from "../../../utils/customState.hook";
import { TableColumn } from "../types";
import InputDateRange from "../../InputDateRange";
import { defaultInput50 } from "../../../components-variants/defaultInputs";
import { RangeDate } from "../../../interfaces/generics.types";


function filterDateRange<T>(
    column: TableColumn<T>,
    filterState: CustomState<Record<keyof T, any>>,
    searchParams: URLSearchParams
) {
    const defaultValue = searchParams.get(String(column.key));

    const formatedDefaultValue = {
        min: defaultValue && new Date(defaultValue.split("_")[0]) || null,
        max: defaultValue && new Date(defaultValue.split("_")[1]) || null
    }

    const onChange = (v: RangeDate) => {
        filterState.set(prev => {
            const { min, max } = v;
            const format = (date: Date | null) => {
                if (date) {
                    const [YYYY, month, day] = [String(date.getUTCFullYear()), date.getUTCMonth() + 1, date.getUTCDate()];

                    const MM = month >= 10 ? String(month) : `0${month}`;
                    const DD = day >= 10 ? String(day) : `0${day}`;

                    return `${YYYY}-${MM}-${DD}`;
                }

                return "";
            }

            if (min || max) {
                prev[column.key] = `${format(min)}_${format(max)}`;
            } else {
                delete prev[column.key];
            }

            return prev;
        });
    }

    return (
        <InputDateRange
            {...defaultInput50}
            title={(column.header || column.key) as string}
            onChange={onChange}
            defaultValue={formatedDefaultValue}
        />
    );
}

export default filterDateRange;