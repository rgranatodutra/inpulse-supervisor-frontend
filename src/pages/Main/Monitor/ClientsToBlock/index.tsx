import ClientsToBlockTable from "./ClientsToBlockTable";
import StyledBreaksTaken from "./style";

const ClientsToBlock = () => {
	return (
		<StyledBreaksTaken>
			<h1>Monitor {"->"} Clientes a bloquear</h1>
			<ClientsToBlockTable />
		</StyledBreaksTaken>
	);
};

export default ClientsToBlock;
