import { ReactNode, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginatedResponse, useCustomRequest } from "../../api";
import useCustomState from "../../utils/customState.hook";
import LoadingSpinner from "../LoadingSpinner";
import TableHeader from "./TableHeader";
import StyledTable from "./style";
import { TableColumn, TableProps } from "./types";

function Table<T>({
	columns,
	actions,
	tableName,
	requestEndpoint,
	enableAutoUpdate,
	service,
	className,
	...styleProps
}: TableProps<T>) {
	const tableRef = useRef<null | HTMLTableElement>(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const rowsState = useCustomState<Array<T>>([]);
	const loadingState = useCustomState<boolean>(false);
	const displayColumnsState = useCustomState<Array<TableColumn<T>>>([...columns.filter((c) => !c.defaultDisabled)]);
	const displayActionsState = useCustomState<boolean>(true);
	const modalState = useCustomState<ReactNode>("");
	const nextPage = useCustomState<boolean>(false);
	const totalRowsCount = useCustomState<number>(0);
	const isMaximizedState = useCustomState<boolean>(false);
	const autoUpdateState = useCustomState<boolean>(false);
	const autoUpdateIntervalState = useCustomState<number | null>(5);

	useEffect(() => {
		useCustomRequest<PaginatedResponse<Array<T>>, undefined>({
			method: "get",
			service,
			endpoint: requestEndpoint,
			params: searchParams,
			onSuccess: (res) => {
				rowsState.set(res.data);
				nextPage.set(res.page.next);
			},
			loadingState,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	useEffect(() => {
		let intervalId: NodeJS.Timeout | null = null;

		if (autoUpdateState.value) {
			intervalId = setInterval(() => {
				console.log(new Date().toLocaleString(), "Auto-update...");
				useCustomRequest<PaginatedResponse<Array<T>>, undefined>({
					service,
					method: "get",
					endpoint: requestEndpoint,
					params: searchParams,
					onSuccess: (res) => {
						rowsState.set(res.data);
					},
					loadingState,
				});
			}, (autoUpdateIntervalState.value || 60 * 5) * 1000); // Converte segundos para milissegundos
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams, autoUpdateState.value, autoUpdateIntervalState.value]);

	const getRowKey = (row: T, key: keyof T) => String(row[key]);

	return (
		<StyledTable
			$columns={displayColumnsState.value}
			$isMaximized={isMaximizedState.value}
			$haveActions={!!actions}
			{...{ className }}
			{...styleProps}
		>
			<TableHeader
				$fontSize={styleProps.$fontSize}
				$modalFiltersWidth={styleProps.$modalFiltersWidth}
				$tableHeight={styleProps.$tableHeight}
				$tableWidth={styleProps.$tableWidth}
				columns={columns}
				displayActionsState={displayActionsState}
				displayColumnsState={displayColumnsState}
				loadingState={loadingState}
				modalState={modalState}
				isMaximizedState={isMaximizedState}
				nextPage={nextPage.value}
				totalRowsCount={totalRowsCount.value}
				rowsState={rowsState}
				haveActions={!!actions}
				tableName={tableName}
				tableRef={tableRef}
				setSearchParams={setSearchParams}
				searchParams={searchParams}
				enableAutoUpdate={enableAutoUpdate || false}
				autoUpdateState={autoUpdateState}
				autoUpdateIntervalState={autoUpdateIntervalState}
			/>
			{!loadingState.value && (
				<table ref={tableRef}>
					<thead>
						<tr>
							{actions && displayActionsState.value && <th>Ações</th>}
							{displayColumnsState.value.map((c, i) => (
								<th key={`column_${i}`}>{c.header || String(c.key)}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rowsState.value.map((row, index) => (
							<tr key={`${tableName}row_${index}`}>
								{displayActionsState.value && actions && <td> {actions(row)} </td>}
								{displayColumnsState.value.map((c, i) => (
									<td key={`${tableName}row_${index}_column_${i}`}>
										{c.format ? c.format(row) : getRowKey(row, c.key)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)}
			{loadingState.value && <LoadingSpinner />}
			{modalState.value}
		</StyledTable>
	);
}

export default Table;
