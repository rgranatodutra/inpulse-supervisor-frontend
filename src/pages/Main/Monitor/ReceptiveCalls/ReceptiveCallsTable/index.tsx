import Table from "../../../../../components/Table";
import { ReceptiveCall } from "../../../../../interfaces/ReceptiveCall.type";

const ReceptiveCallsTable = () => {
	return (
		<Table<ReceptiveCall>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={[]}
			tableName="Chamadas recebidas"
			$modalFiltersWidth={40}
			requestEndpoint="/receptive-calls"
			enableAutoUpdate
			service="monitoring"
		/>
	);
};

export default ReceptiveCallsTable;
