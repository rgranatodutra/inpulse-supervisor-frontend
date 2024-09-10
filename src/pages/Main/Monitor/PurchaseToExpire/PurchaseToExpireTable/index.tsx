import Table from "../../../../../components/Table";
import { PurchaseToExpire } from "../../../../../interfaces/PurchaseToExpire.type";
import purchaseToExpireColumns from "./columns";

const PurchaseToExpireTable = () => {
	return (
		<Table<PurchaseToExpire>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={purchaseToExpireColumns}
			tableName="Pausas realizadas"
			$modalFiltersWidth={40}
			requestEndpoint="/rebuying-clients"
			service="monitoring"
			enableAutoUpdate
		/>
	);
};

export default PurchaseToExpireTable;
