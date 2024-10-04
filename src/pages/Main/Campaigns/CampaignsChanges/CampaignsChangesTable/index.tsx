import Table from "../../../../../components/Table";
import { CampaignsChanges } from "../../../../../interfaces/CampaignsChanges.type";
import ResultsColumns from "./columns";

const ChangesTable = () => {
	return (
		<Table<CampaignsChanges>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={ResultsColumns}
			tableName="Unidades"
			$modalFiltersWidth={41}
			className="display-table"
			requestEndpoint="/logs"
			service="tools"
		/>
	);
};

export default ChangesTable;
