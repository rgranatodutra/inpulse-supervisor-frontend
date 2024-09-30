import BreaksTable from "./ClientsToAttendTable";
import StyledBreaksTaken from "./style";

const ClientsQueue = () => {
	return (
		<StyledBreaksTaken>
			<h1>Monitor {"->"} Fila de atendimento</h1>
			<BreaksTable />
		</StyledBreaksTaken>
	);
};

export default ClientsQueue;
