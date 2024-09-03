import Table from "../../../../../components/Table";
import { CustomerChanges } from "../../../../../interfaces/CustomerChanges.type";
import ResultsColumns from "./columns";

const ChangesTable = () => {
	return (
		<Table<CustomerChanges>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={ResultsColumns}
			tableName="Unidades"
			$modalFiltersWidth={41}
			className="display-table"
			requestEndpoint="/customer-changes"
			service="customers"
		/>
	);
};

export default ChangesTable;
