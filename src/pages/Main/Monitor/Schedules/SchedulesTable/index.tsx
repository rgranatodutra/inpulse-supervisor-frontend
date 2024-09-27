import Table from "../../../../../components/Table";
import { Schedule } from "../../../../../interfaces/Schedule.type";
import schedulesColumns from "./columns";

type SchedulesTableProps = {
	title: string;
	queryCustomerFilters: {
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
	queryVariantFilters: {
		currentType?: "Agendamentos" | "Ligações" | "Sem agendamento";
		scheduling?: { min: string | undefined; max: string | undefined };
		rePurchased?: { min: string | undefined; max: string | undefined };
		call?: { min: string | undefined; max: string | undefined };
		clientOperator?: string | null | undefined;
		callOperator?: string | null | undefined;
		clientsNotWorked?: boolean;
	};
};

const SchedulesTable = ({ title, queryCustomerFilters, queryVariantFilters }: SchedulesTableProps) => {
	const queryParameters: string[] = [];

	//Customer Filters
	if (queryCustomerFilters.CAMPANHA) {
		queryParameters.push(`CAMPANHA=${queryCustomerFilters.CAMPANHA}`);
	}
	if (queryCustomerFilters.CODIGO) {
		queryParameters.push(`CODIGO=${queryCustomerFilters.CODIGO}`);
	}
	if (queryCustomerFilters.CPF_CNPJ) {
		queryParameters.push(`CPF_CNPJ=${queryCustomerFilters.CPF_CNPJ}`);
	}
	if (queryCustomerFilters.COD_ERP) {
		queryParameters.push(`COD_ERP=${queryCustomerFilters.COD_ERP}`);
	}
	if (queryCustomerFilters.SEGMENTO) {
		queryParameters.push(`SEGMENTO=${queryCustomerFilters.SEGMENTO}`);
	}
	if (queryCustomerFilters.ESTADO) {
		queryParameters.push(`ESTADO=${queryCustomerFilters.ESTADO}`);
	}

	if (queryCustomerFilters.dates?.lastPurchase.min || queryCustomerFilters.dates?.lastPurchase.max) {
		queryParameters.push(
			`DATA_ULT_COMPRA=${
				(queryCustomerFilters.dates.lastPurchase.min ?? "") + "_" + (queryCustomerFilters.dates?.lastPurchase.max ?? "")
			}`
		);
	}
	if (queryCustomerFilters.dates?.lastContract.min || queryCustomerFilters.dates?.lastContract.max) {
		queryParameters.push(
			`lastContact=${
				(queryCustomerFilters.dates.lastContract.min ?? "") + "_" + (queryCustomerFilters.dates?.lastContract.max ?? "")
			}`
		);
	}

	if (queryCustomerFilters.multiSelect?.campaigns) {
		queryCustomerFilters.multiSelect.campaigns.map((campaign) => queryParameters.push(`campaign=${campaign}`));
	}
	if (queryCustomerFilters.multiSelect?.segments) {
		queryCustomerFilters.multiSelect.segments.map((segment) => queryParameters.push(`segment=${segment}`));
	}
	if (queryCustomerFilters.multiSelect?.ufStates) {
		queryCustomerFilters.multiSelect.ufStates.map((ufState) => queryParameters.push(`ufState=${ufState}`));
	}
	if (queryCustomerFilters.multiSelect?.origins) {
		queryCustomerFilters.multiSelect.origins.map((origin) => queryParameters.push(`origin=${origin}`));
	}
	if (queryCustomerFilters.multiSelect?.groups) {
		queryCustomerFilters.multiSelect.groups.map((group) => queryParameters.push(`group=${group}`));
	}
	if (queryCustomerFilters.multiSelect?.medias) {
		queryCustomerFilters.multiSelect.medias.map((media) => queryParameters.push(`media=${media}`));
	}

	//Variant Filters
	/* 	if (queryVariantFilters.rePurchased?.min || queryVariantFilters.rePurchased?.max) {
		queryParameters.push(
			`repurchase=${(queryVariantFilters.rePurchased.min ?? "") + "_" + (queryVariantFilters?.rePurchased.max ?? "")}`
		);
	} */
	if (queryVariantFilters.call?.min || queryVariantFilters.call?.max) {
		queryParameters.push(
			`DATA_HORA_LIG=${(queryVariantFilters.call.min ?? "") + "_" + (queryVariantFilters?.call.max ?? "")}`
		);
	}
	if (queryVariantFilters.scheduling?.min || queryVariantFilters.scheduling?.max) {
		queryParameters.push(
			`DT_AGENDAMENTO=${(queryVariantFilters.scheduling.min ?? "") + "_" + (queryVariantFilters?.scheduling.max ?? "")}`
		);
	}
	if (queryVariantFilters.callOperator) {
		queryParameters.push(`OPERADOR_LIGACAO=${queryVariantFilters.callOperator}`);
	}
	if (queryVariantFilters.clientOperator) {
		queryParameters.push(`OPERADOR=${queryVariantFilters.clientOperator}`);
	}
	if (queryVariantFilters.rePurchased?.min || queryVariantFilters.rePurchased?.max) {
		queryParameters.push(
			`dateRepurchase=${
				(queryVariantFilters.rePurchased.min ?? "") + "_" + (queryVariantFilters?.rePurchased.max ?? "")
			}`
		);
	}
	if (queryVariantFilters.clientsNotWorked) {
		queryParameters.push(`clientsNotWorked=true`);
	}
	if (queryVariantFilters.currentType) {
		queryParameters.push(
			queryVariantFilters.currentType === "Sem agendamento" ? "noScheduling" : queryVariantFilters.currentType
		);
	} else {
		queryParameters.push("Agendamentos");
	}

	console.log(`/schedules?${queryParameters[0] ? queryParameters.join("&") : ""}`);

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
