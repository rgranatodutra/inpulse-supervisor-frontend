import { MutableRefObject, ReactNode } from "react";
import {
	FaAngleDown,
	FaExpand,
	FaEye,
	FaFileExport,
	FaFilter,
	FaMinimize,
	FaSort,
	FaTableColumns,
} from "react-icons/fa6";
import { SetURLSearchParams } from "react-router-dom";
import { defaultSelect50 } from "../../../components-variants/defaultInputs";
import { ButtonType1 } from "../../../styles/buttons.style";
import cssVars from "../../../utils/cssVariables.vars";
import { CustomState } from "../../../utils/customState.hook";
import MultiSelect from "../../MultiSelect";
import PageController from "../../PageController";
import Select from "../../Select";
import ExportTableDialog from "../ExportTableDialog";
import FiltersModal from "../FiltersModal";
import { TableColumn } from "../types";
import StyledTableHeader from "./styles";

type TableHeaderProps<T> = {
	rowsState: CustomState<Array<T>>;
	modalState: CustomState<ReactNode>;
	loadingState: CustomState<boolean>;
	displayColumnsState: CustomState<Array<TableColumn<T>>>;
	displayActionsState: CustomState<boolean>;
	isMaximizedState: CustomState<boolean>;
	nextPage: boolean;
	totalRowsCount: number;
	tableName: string;
	tableRef: MutableRefObject<null | HTMLTableElement>;
	searchParams: URLSearchParams;
	setSearchParams: SetURLSearchParams;
	columns: Array<TableColumn<T>>;
	haveActions: boolean;
	$modalFiltersWidth: number;
	$fontSize: number;
	$tableWidth: string;
	$tableHeight: string;
	enableAutoUpdate: boolean;
	autoUpdateState: CustomState<boolean>;
	autoUpdateIntervalState: CustomState<number | null>;
};

function TableHeader<T>({
	enableAutoUpdate,
	rowsState,
	modalState,
	loadingState,
	displayColumnsState,
	displayActionsState,
	isMaximizedState,
	autoUpdateState,
	autoUpdateIntervalState,
	nextPage,
	totalRowsCount,
	haveActions,
	tableName,
	tableRef,
	columns,
	searchParams,
	setSearchParams,
	$modalFiltersWidth,
	$fontSize,
}: TableHeaderProps<T>) {
	const openExportTableModal = () =>
		modalState.set(<ExportTableDialog modalState={modalState} tableName={tableName} tableRef={tableRef} />);

	const openFiltersModal = () =>
		modalState.set(
			<FiltersModal<T>
				$modalFiltersWidth={$modalFiltersWidth}
				columns={columns}
				filtersModalState={modalState}
				setSearchParams={setSearchParams}
				rowsState={rowsState}
				tableName={tableName}
				searchParams={searchParams}
			/>
		);

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

	const onChangeSortByColumn = (v: string | null) => {
		setSearchParams((prev) => {
			prev.set("ORDENAR_POR", v || "");

			return prev;
		});
	};

	const onShowAll = () =>
		setSearchParams((prev) => {
			prev.set("perPage", String(totalRowsCount));

			return prev;
		});

	const onClickMaximizeButton = () => isMaximizedState.set((prev) => !prev);

	const totalNumberOfFilters = columns.filter((c) => c.filter).length;
	const numberOfAppliedFilters = columns.filter((c) => c.filter && searchParams.get(String(c.key))).length;
	const filtersText = `Filtros (${numberOfAppliedFilters}/${totalNumberOfFilters})`;
	const haveFilters: boolean = columns.some((c) => !!c.filter);

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
					searchParams={searchParams}
					setSearchParams={setSearchParams}
					nextPage={nextPage}
					disabled={loadingState.value}
				/>
				<ButtonType1 onClick={onShowAll}>
					<FaEye />
					<p> Mostrar todos </p>
				</ButtonType1>
				<ButtonType1 onClick={openExportTableModal}>
					<FaFileExport />
					<p> Exportar </p>
				</ButtonType1>
				{haveFilters && (
					<ButtonType1 onClick={openFiltersModal} disabled={loadingState.value}>
						<FaFilter />
						<p> {filtersText} </p>
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
					onChange={onChangeSortByColumn}
					options={sortColumnOptions}
					defaultValue={sortColumnOptions.find((o) => o.value === searchParams.get("ORDENAR_POR"))}
					placeholder="Ordenar por"
					disabled={loadingState.value}
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
