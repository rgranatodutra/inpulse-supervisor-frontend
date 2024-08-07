import cssVars from "../../../utils/cssVariables.vars";
import { CustomState } from "../../../utils/customState.hook";
import Select, { Option } from "../../Select";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TableColumn } from "../types";

function filterSelect<T>(
    column: TableColumn<T>,
    rowsState: CustomState<Array<T>>,
    filterState: CustomState<Record<keyof T, any>>,
    searchParams: URLSearchParams
) {
    const uniqueColumnValues = Array.from(new Set(rowsState.value.map(r => r[column.key])))
    const options = (column.filter!.options as Array<Option<T>>) || uniqueColumnValues.map((ucv) => ({
        name: column.format ? column.format({ [column.key]: ucv } as T) as string : ucv as string,
        value: ucv
    }));

    const defaultValue = searchParams.get(String(column.key));
    const placeholder = column.filter!.placeholder || `Selecione um(a) ${column.header?.toLowerCase()}`;
    const leftIcon = column.filter!.icon || <FaMagnifyingGlass />;

    const onChange = (v: T | null) => {
        filterState.set(prev => {
            if (v) {
                prev[column.key] = v;
            } else {
                delete prev[column.key];
            }

            return prev;
        });
    }

    return (
        <Select
            $color={cssVars.colorGrey[3]}
            $borderColor={cssVars.colorGrey[2]}
            $focusColor={cssVars.colorGrey[0]}
            $padding={[0.5, 0.5]}
            $fontSize={1}
            $width={column.filter!.width}
            leftIcon={leftIcon}
            placeholder={placeholder}
            onChange={onChange}
            options={options}
            defaultValue={options.find(o => o.value === defaultValue) || undefined}
        />
    );
}

export default filterSelect;