import useCustomState from "../../../../utils/customState.hook";
import CustomersFilter from "./Filters/CustomersFilter";
import VariantFilter from "./Filters/VariantFilter";
import SchedulesTable from "./SchedulesTable";
import StyledMonitorSchedules from "./style";

const MonitorSchedules = () => {
	const customerInputFieldValues = useCustomState<{
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
	}>({});

	return (
		<StyledMonitorSchedules>
			<main>
				<form>
					<VariantFilter />
					<CustomersFilter customerFilterState={customerInputFieldValues} />
				</form>
				<div>
					<SchedulesTable title="Agendamentos" queryFilters={customerInputFieldValues.value} />
				</div>
			</main>
		</StyledMonitorSchedules>
	);
};

export default MonitorSchedules;
