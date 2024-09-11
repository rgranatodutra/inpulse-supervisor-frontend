import { MutableRefObject, ReactNode } from "react";
import { FaAngleDown, FaExpand, FaFileExport, FaMinimize, FaSort, FaTableColumns } from "react-icons/fa6";
import { defaultSelect50 } from "../../../components-variants/defaultInputs";
import { ButtonType1 } from "../../../styles/buttons.style";
import cssVars from "../../../utils/cssVariables.vars";
import { CustomState } from "../../../utils/customState.hook";
import MultiSelect from "../../MultiSelect";
import PageController from "../../PageController";
import Select from "../../Select";
import ExportTableDialog from "../ExportTableDialog";
import { TableColumn } from "../types";
import StyledTableHeader from "./styles";

type TableHeaderProps<T> = {
	modalState: CustomState<ReactNode>;
	loadingState: CustomState<boolean>;
	displayColumnsState: CustomState<Array<TableColumn<T>>>;
	displayActionsState: CustomState<boolean>;
	isMaximizedState: CustomState<boolean>;
	nextPage: boolean;
	tableName: string;
	tableRef: MutableRefObject<null | HTMLTableElement>;
	columns: Array<TableColumn<T>>;
	haveActions: boolean;
	$fontSize: number;
	$tableWidth: string;
	$tableHeight: string;
	enableAutoUpdate: boolean;
	autoUpdateState: CustomState<boolean>;
	autoUpdateIntervalState: CustomState<number | null>;
	currentPage: CustomState<number>;
	orderBy: CustomState<string | undefined>;
	exportEnabled?: boolean;
};

function TableHeader<T>({
	enableAutoUpdate,
	modalState,
	loadingState,
	displayColumnsState,
	displayActionsState,
	isMaximizedState,
	autoUpdateState,
	autoUpdateIntervalState,
	nextPage,
	haveActions,
	tableName,
	tableRef,
	columns,
	$fontSize,
	currentPage,
	orderBy,
	exportEnabled,
}: TableHeaderProps<T>) {
	const openExportTableModal = () =>
		modalState.set(<ExportTableDialog modalState={modalState} tableName={tableName} tableRef={tableRef} />);

	const displayColumnsOptions = haveActions
		? [
				{ name: "Ações", value: "actions" },
				...columns.map((c) => ({ name: c.header || String(c.key), value: String(c.key) })),
		  ]
		: columns.map((c) => ({ name: c.header || String(c.key), value: String(c.key) }));

	const sortColumnOptions = columns.map((c) => ({ name: c.header || String(c.key), value: String(c.key) }));

	const onChangeDisplayColumns = (v: (string | null)[]) => {
		displayActionsState.set(v.some((o) => o === "actions"));
		displayColumnsState.set(columns.filter((c) => v.includes(String(c.key))));
	};

	const onClickMaximizeButton = () => isMaximizedState.set((prev) => !prev);

	function changeNextPage() {
		currentPage.set((prev) => prev + 1);
	}

	function changePreviousPage() {
		currentPage.set((prev) => prev - 1);
	}

	function changeSortColumn(v: string | null) {
		if (v) {
			orderBy.set(v);
		} else if (!v) {
			orderBy.reset();
		}
	}

	return (
		<StyledTableHeader>
			<div>
				<button title="Maximizar tabela" onClick={onClickMaximizeButton}>
					{isMaximizedState.value ? <FaMinimize /> : <FaExpand />}
				</button>
			</div>
			<div>
				{enableAutoUpdate && (
					<>
						<div className="auto-update">
							<span>Atualizar</span>
							<input type="checkbox" onChange={(e) => autoUpdateState.set(e.target.checked)} />
							{autoUpdateState.value && (
								<Select
									{...defaultSelect50}
									$focusColor={cssVars.colorGrey[0]}
									placeholder="Intervalo"
									$width="10rem"
									options={[
										{ value: 5, name: "5 segundos" },
										{ value: 15, name: "15 segundos" },
										{ value: 30, name: "30 segundos" },
										{ value: 60, name: "1 minuto" },
										{ value: 300, name: "5 minutos" },
										{ value: 600, name: "10 minutos" },
									]}
									defaultValue={{ value: 5, name: "5 segundos" }}
									onChange={(v) => autoUpdateIntervalState.set(v)}
								/>
							)}
						</div>
					</>
				)}
				<PageController
					onClickNextPageFn={changeNextPage}
					onClickPreviousPageFn={changePreviousPage}
					nextPage={nextPage}
					disabled={loadingState.value}
					pageProp={currentPage.value.toLocaleString()}
				/>

				{exportEnabled && (
					<ButtonType1 onClick={openExportTableModal}>
						<FaFileExport />
						<p> Exportar </p>
					</ButtonType1>
				)}
				<Select
					$color={cssVars.colorGrey[3]}
					$focusColor={cssVars.colorGrey[0]}
					$borderColor={cssVars.colorGrey[2]}
					$width="10rem"
					$padding={[0.375, 0.375]}
					$fontSize={$fontSize}
					leftIcon={<FaSort />}
					options={sortColumnOptions}
					placeholder="Ordenar por"
					disabled={loadingState.value}
					onChange={changeSortColumn}
				/>
				<MultiSelect
					$color={cssVars.colorGrey[3]}
					$borderColor={cssVars.colorGrey[2]}
					$padding={[0.375, 0.375]}
					$fontSize={$fontSize}
					$width="12rem"
					leftIcon={<FaTableColumns />}
					rightIcon={<FaAngleDown />}
					onChange={onChangeDisplayColumns}
					options={displayColumnsOptions}
					placeholder="Colunas"
					defaultValue={displayColumnsOptions.filter(
						(dco) => !columns.find((c) => dco.value === c.key)?.defaultDisabled
					)}
				/>
			</div>
		</StyledTableHeader>
	);
}

export default TableHeader;
