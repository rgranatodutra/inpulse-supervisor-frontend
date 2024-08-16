import { useContext } from "react";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Customer } from "../../../../../interfaces/Customer.type";
import CustomersTable from "./CustomersTable";
import StyledDealModal from "./style";

interface CustomerDealsModal {
	addCustomer: (customer: Customer) => void;
}

function CustomerDealsModal({ addCustomer }: CustomerDealsModal) {
	const { modalState } = useContext(GlobalContext);

	return (
		<Modal modalState={modalState} title="Clientes">
			<StyledDealModal>
				<CustomersTable addCustomer={addCustomer} />
			</StyledDealModal>
		</Modal>
	);
}

export default CustomerDealsModal;
