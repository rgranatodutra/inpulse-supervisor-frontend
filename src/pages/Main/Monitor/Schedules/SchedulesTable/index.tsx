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
		multiSelect?: {
			campaigns?: (string | null)[];
			groups?: (string | null)[];
			segments?: (string | null)[];
			origins?: (string | null)[];
			medias?: (string | null)[];
			ufStates?: (string | null)[];
			purchasedProduct?: (string | null)[];
		};
	};
};

const SchedulesTable = ({ title, queryFilters }: SchedulesTableProps) => {
	const queryParameters: string[] = [];

	if (queryFilters.CAMPANHA) {
		queryParameters.push(`CAMPANHA=${queryFilters.CAMPANHA}`);
	}
	if (queryFilters.CODIGO) {
		queryParameters.push(`CODIGO=${queryFilters.CODIGO}`);
	}
	if (queryFilters.CPF_CNPJ) {
		queryParameters.push(`CPF_CNPJ=${queryFilters.CPF_CNPJ}`);
	}
	if (queryFilters.COD_ERP) {
		queryParameters.push(`COD_ERP=${queryFilters.COD_ERP}`);
	}
	if (queryFilters.SEGMENTO) {
		queryParameters.push(`SEGMENTO=${queryFilters.SEGMENTO}`);
	}
	if (queryFilters.ESTADO) {
		queryParameters.push(`ESTADO=${queryFilters.ESTADO}`);
	}

	if (queryFilters.dates?.lastPurchase.min || queryFilters.dates?.lastPurchase.max) {
		queryParameters.push(
			`DATA_ULT_COMPRA=${
				(queryFilters.dates.lastPurchase.min ?? "") + "_" + (queryFilters.dates?.lastPurchase.max ?? "")
			}`
		);
	}
	if (queryFilters.multiSelect?.campaigns) {
		queryFilters.multiSelect.campaigns.map((campaign) => queryParameters.push(`campaign=${campaign}`));
	}
	if (queryFilters.multiSelect?.segments) {
		queryFilters.multiSelect.segments.map((segment) => queryParameters.push(`segment=${segment}`));
	}
	if (queryFilters.multiSelect?.ufStates) {
		queryFilters.multiSelect.ufStates.map((ufState) => queryParameters.push(`ufState=${ufState}`));
	}
	if (queryFilters.multiSelect?.origins) {
		queryFilters.multiSelect.origins.map((origin) => queryParameters.push(`origin=${origin}`));
	}

	if (queryFilters.multiSelect?.groups) {
		queryFilters.multiSelect.groups.map((group) => queryParameters.push(`group=${group}`));
	}

	return (
		<Table<Schedule>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={schedulesColumns}
			tableName={title}
			$modalFiltersWidth={40}
			requestEndpoint={`/schedules?${queryParameters[0] ? queryParameters.join("&") : ""}`}
			service="monitoring"
			className="display-table"
		/>
	);
};

export default SchedulesTable;
