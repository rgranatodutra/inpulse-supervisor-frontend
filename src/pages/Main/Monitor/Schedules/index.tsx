import useCustomState from "../../../../utils/customState.hook";
import CustomersFilter from "./Filters/CustomersFilter";
import VariantFilter from "./Filters/VariantFilter";
import SchedulesTable from "./SchedulesTable";
import StyledMonitorSchedules from "./style";

const MonitorSchedules = () => {
	const customerInputFilterValues = useCustomState<{
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

	const variantInputFilterValues = useCustomState<{
		currentType?: "Agendamentos" | "Ligações" | "Sem agendamento";
		scheduling?: { min: string | undefined; max: string | undefined };
		rePurchased?: { min: string | undefined; max: string | undefined };
		call?: { min: string | undefined; max: string | undefined };
		clientOperator?: string | null | undefined;
		callOperator?: string | null | undefined;
		clientsNotWorked?: boolean;
	}>({});

	return (
		<StyledMonitorSchedules>
			<main>
				<form>
					<VariantFilter variantFiltersState={variantInputFilterValues} />
					<CustomersFilter customerFilterState={customerInputFilterValues} />
				</form>
				<div>
					<SchedulesTable
						title="Agendamentos"
						queryCustomerFilters={customerInputFilterValues.value}
						queryVariantFilters={variantInputFilterValues.value}
					/>
				</div>
			</main>
		</StyledMonitorSchedules>
	);
};

export default MonitorSchedules;
