import Table from "../../../../../components/Table";
import { ClientsToAttend } from "../../../../../interfaces/ClientsToAttend.type";
import clientsQueueColumns from "./columns";
const BreaksTable = () => {
	return (
		<Table<ClientsToAttend>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={clientsQueueColumns}
			tableName="Pausas realizadas"
			$modalFiltersWidth={40}
			requestEndpoint="/clientsToAttend"
			service="monitoring"
		/>
	);
};

export default BreaksTable;
