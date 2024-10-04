import { ChangeEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import cssVars from "../../../utils/cssVariables.vars";
import { CustomState } from "../../../utils/customState.hook";
import Input from "../../Input";
import { TableColumn } from "../types";

function filterInput<T>(
	column: TableColumn<T>,
	filterState: CustomState<Record<keyof T, any>>,
	searchParams: URLSearchParams
) {
	const defaultValue = searchParams.get(String(column.key));

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		filterState.set((prev) => {
			if (e.target.value) {
				prev[column.key] = e.target.value;
			} else {
				delete prev[column.key];
			}

			return prev;
		});
	};

	return (
		<Input
			$color={cssVars.colorGrey[3]}
			$focusColor={cssVars.colorGrey[0]}
			$padding={[0.5, 0.5]}
			$fontSize={1}
			$width={column.filter!.width}
			leftIcon={column.filter!.icon || <FaMagnifyingGlass />}
			rightIcon={null}
			onChange={onChange}
			placeholder={column.header}
			defaultValue={defaultValue || undefined}
		/>
	);
}

export default filterInput;
