import { ReactNode } from "react";
import Modal from "../../../../components/Modal";
import { Purchase } from "../../../../interfaces/Purchase.type";
import { CustomState } from "../../../../utils/customState.hook";
import ItemsTable from "./ItemsTable";

type PurchaseItemsModalProps = {
    modalState: CustomState<ReactNode>;
    purchase: Purchase;
}
const PurchaseItemsModal = ({ modalState, purchase }: PurchaseItemsModalProps) => {
    return (
        <Modal
            modalState={modalState}
            title={`Items da compra: ${purchase.DESCRICAO}`}
        >
            <ItemsTable />
        </Modal>
    );
}

export default PurchaseItemsModal;