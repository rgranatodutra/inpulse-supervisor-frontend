import { useContext } from "react";
import { FaUserGear } from "react-icons/fa6";
import Table from "../../../../../../components/Table";
import { GlobalContext } from "../../../../../../contexts/global";
import { Customer } from "../../../../../../interfaces/Customer.type";
import { ButtonType3 } from "../../../../../../styles/buttons.style";
import customerColumns from "./columns";

interface CustomerTableProps {
	addCustomer: (client: Customer) => void;
}

const CustomersTable = ({ addCustomer }: CustomerTableProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<Table<Customer>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={customerColumns}
			tableName="Clientes"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						addCustomer(row);
						modalState.reset();
					}}
				>
					<FaUserGear />
				</ButtonType3>,
			]}
			requestEndpoint="/customers"
			service="customers"
		/>
	);
};

export default CustomersTable;
