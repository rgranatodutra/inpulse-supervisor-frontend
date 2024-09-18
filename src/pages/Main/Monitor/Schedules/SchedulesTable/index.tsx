import Table from "../../../../../components/Table";
import { Schedule } from "../../../../../interfaces/Schedule.type";
import schedulesColumns from "./columns";

type SchedulesTableProps = {
	title: string;
	queryFilters: {
		CPF_CNPJ?: number;
		CODIGO?: number;
		COD_ERP?: number;
		CAMPANHA?: number;
		SEGMENTO?: number;
		ESTADO?: string;
		dates?: {
			lastContract: { min: string | undefined; max: string | undefined };
			lastPurchase: { min: string | undefined; max: string | undefined };
		};
	};
};
const SchedulesTable = ({ title, queryFilters }: SchedulesTableProps) => {
	const queryParam = `${queryFilters.CAMPANHA ? "CAMPANHA=" + queryFilters.CAMPANHA + "&" : ""}${
		queryFilters.CODIGO ? "CODIGO=" + queryFilters.CODIGO + "&" : ""
	}${queryFilters.CPF_CNPJ ? "CPF_CNPJ=" + queryFilters.CPF_CNPJ + "&" : ""}${
		queryFilters.COD_ERP ? "COD_ERP=" + queryFilters.COD_ERP + "&" : ""
	}${queryFilters.SEGMENTO ? "SEGMENTO=" + queryFilters.SEGMENTO + "&" : ""}${
		queryFilters.ESTADO ? "ESTADO=" + queryFilters.ESTADO + "&" : ""
	}
	${
		queryFilters.dates?.lastPurchase.min || queryFilters.dates?.lastPurchase.max
			? "DATA_ULT_COMPRA=" +
			  (queryFilters.dates.lastPurchase.min ?? "") +
			  "_" +
			  (queryFilters.dates?.lastPurchase.max ?? "")
			: ""
	}`;

	return (
		<Table<Schedule>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={schedulesColumns}
			tableName={title}
			$modalFiltersWidth={40}
			requestEndpoint={`/schedules?${queryParam ?? ""}`}
			service="monitoring"
			className="display-table"
		/>
	);
};

export default SchedulesTable;
