import ReceptiveCallsTable from "./DeactivateCustomersTable";
import StyledReceptiveCalls from "./style";

const DeactivatedCustomers = () => {
	return (
		<StyledReceptiveCalls>
			<h1>Ferramentas {"->"} clientes sem ação</h1>
			<ReceptiveCallsTable />
		</StyledReceptiveCalls>
	);
};

export default DeactivatedCustomers;
