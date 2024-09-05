import ReceptiveCallsTable from "./ReceptiveCallsTable";
import StyledReceptiveCalls from "./style";

const ReceptiveCalls = () => {
	return (
		<StyledReceptiveCalls>
			<h1>Monitor {"->"} chamadas recebidas</h1>
			<ReceptiveCallsTable />
		</StyledReceptiveCalls>
	);
};

export default ReceptiveCalls;
