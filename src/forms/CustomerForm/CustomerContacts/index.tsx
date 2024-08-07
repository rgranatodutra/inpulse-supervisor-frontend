import ContactsTable from "./ContactsTable";
import { ButtonType3 } from "../../../styles/buttons.style";
import ContactModal from "./ContactModal";
import { useContext } from "react";
import { CustomerContext } from "../context";

const CustomerContacts = () => {
    const { contactModalState } = useContext(CustomerContext);

    const onClickAddContactButton = () => contactModalState.set(true);

    return (
        <section>
            <ButtonType3 onClick={onClickAddContactButton}>
                <a> Adicionar Contato </a>
            </ButtonType3>
            <ContactsTable />
            {
                contactModalState.value && <ContactModal modalState={contactModalState} />
            }
        </section>
    );
}

export default CustomerContacts;