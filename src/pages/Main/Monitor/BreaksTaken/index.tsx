import BreaksTable from "./BreaksTable";
import StyledBreaksTaken from "./style";

const BreaksTaken = () => {
	return (
		<StyledBreaksTaken>
			<h1>Monitor {"->"} Pausas realizadas</h1>
			<BreaksTable />
		</StyledBreaksTaken>
	);
};

export default BreaksTaken;
