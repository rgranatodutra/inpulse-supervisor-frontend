import cssVars from "../../../utils/cssVariables.vars";
import { CustomState } from "../../../utils/customState.hook";
import { FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";
import { TableColumn } from "../types";
import MultiSelect from "../../MultiSelect";
import { Option } from "../../Select";

function filterMultiSelect<T>(
    column: TableColumn<T>,
    /* rowsState: CustomState<Array<T>>, */
    filterState: CustomState<Record<keyof T, any>>,
    searchParams: URLSearchParams
) {
    const options = column.filter!.options as Array<Option<T[keyof T]>>;

    const defaultValue = searchParams.getAll(String(column.key));

    const onChange = (v: (T[keyof T] | null)[]) => {
        filterState.set(prev => {
            if (v) {
                prev[column.key] = v;
            } else {
                delete prev[column.key];
            }

            return prev;
        })
    }

    return (
        <MultiSelect
            $color={cssVars.colorGrey[3]}
            $borderColor={cssVars.colorGrey[2]}
            $padding={[0.5, 0.5]}
            $fontSize={1}
            $width={column.filter!.width}
            leftIcon={column.filter?.icon || <FaMagnifyingGlass />}
            rightIcon={<FaAngleDown />}
            onChange={onChange}
            options={options}
            placeholder={column.filter!.placeholder || `${column.header || String(column.key)}s`}
            defaultValue={options.filter(o => defaultValue?.includes(String(o.value)))}
        />
    );
}

export default filterMultiSelect;