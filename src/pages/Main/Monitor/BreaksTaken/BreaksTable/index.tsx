import Table from "../../../../../components/Table";
import { BreaksTaken } from "../../../../../interfaces/BreaksTaken.type";
import breaksColumns from "./columns";

const BreaksTable = () => {
	return (
		<Table<BreaksTaken>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={breaksColumns}
			tableName="Pausas realizadas"
			$modalFiltersWidth={40}
			requestEndpoint="/taken-breaks"
			service="monitoring"
			enableAutoUpdate
		/>
	);
};

export default BreaksTable;
