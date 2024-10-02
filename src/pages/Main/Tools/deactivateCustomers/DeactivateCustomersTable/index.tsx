import { useContext } from "react";
import { FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { GlobalContext } from "../../../../../contexts/global";
import { DeactivatedCustomer } from "../../../../../interfaces/DeactivatedCustomer.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeactivateCustomersModal from "../DeactivateCustomersModal";
import deactivateCustomersColumns from "./columns";

const TransferCostumersTable = () => {
	const { modalState } = useContext(GlobalContext);

	return (
		<Table<DeactivatedCustomer>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={deactivateCustomersColumns}
			tableName="Clientes sem ação"
			$modalFiltersWidth={40}
			requestEndpoint="/deactivate-customers-without-action"
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<DeactivateCustomersModal name={row.RAZAO} id={row.CLIENTE} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			service="tools"
		/>
	);
};

export default TransferCostumersTable;
