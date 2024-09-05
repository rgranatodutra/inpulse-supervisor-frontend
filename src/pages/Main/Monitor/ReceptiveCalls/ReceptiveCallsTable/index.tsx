import Table from "../../../../../components/Table";
import { ReceptiveCall } from "../../../../../interfaces/ReceptiveCall.type";
import receptiveCallColumns from "./columns";

const ReceptiveCallsTable = () => {
	return (
		<Table<ReceptiveCall>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={receptiveCallColumns}
			tableName="Pausas realizadas"
			$modalFiltersWidth={40}
			requestEndpoint="/receptive-calls"
			service="monitoring"
			enableAutoUpdate
		/>
	);
};

export default ReceptiveCallsTable;
