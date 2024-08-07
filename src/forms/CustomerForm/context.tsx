import { ReactNode, createContext, useEffect } from "react";
import useCustomState, { CustomState } from "../../utils/customState.hook";
import { Customer } from "../../interfaces/Customer.type";
import { FaCalendar, FaCartShopping, FaEnvelope, FaEyeSlash, FaFile, FaMapLocation, FaNetworkWired, FaNoteSticky, FaPhone } from "react-icons/fa6";
import CustomerAddress from "./CustomerAddress";
import { Contact } from "../../interfaces/Contact.type";
import CustomerContacts from "./CustomerContacts";
import CustomerObservations from "./CustomerObservations";
import CustomerPhones from "./CustomerPhones";
import CustomerSchedule from "./CustomerSchedule";
import CustomerHistory from "./CustomerHistory";
import CustomerPurchases from "./CustomerPurchases";
import { customRequest } from "../../api";
import { City } from "../../interfaces/City.type";
import { Segment } from "../../interfaces/Segment.type";
import { Media } from "../../interfaces/Media.type";
import { Operator } from "../../interfaces/Operator.type";
import { CustomerGroup } from "../../interfaces/CustomerGroup.type";
import { Origin } from "../../interfaces/Origin.type";
import CustomerOrigin from "./CustomerOrigin";
import { Position } from "../../interfaces/Position.type";

type CustomerContextProps = {
    formSections: Array<FormSectionButton>;
    renderingSectionState: CustomState<number>;
    customerDataState: CustomState<Customer>;
    selectedContactState: CustomState<Contact>;
    loadingState: CustomState<boolean>;
    contactModalState: CustomState<boolean>;
    citiesState: CustomState<Array<City>>;
    segmentsState: CustomState<Array<Segment>>;
    mediasState: CustomState<Array<Media>>;
    operatorsState: CustomState<Array<Operator>>;
    groupsState: CustomState<Array<CustomerGroup>>;
    originsState: CustomState<Array<Origin>>;
    positionsState: CustomState<Array<Position>>;
    onClickAddContact: () => void;
    onClickCancelEditContact: () => void;
    onClickEditContact: (c: Contact) => () => void;
    onClickDeleteContact: (c: Contact) => () => void;
}

type CustomerProviderProps = {
    children: ReactNode;
}

type FormSectionButton = {
    id: number;
    button: ReactNode;
    component: ReactNode;
    mode: "edit" | "create" | "both";
}

const CustomerContext = createContext<CustomerContextProps>({} as CustomerContextProps);

const CustomerProvider = ({ children }: CustomerProviderProps) => {
    const formSections: Array<FormSectionButton> = [
        {
            id: 0,
            button: <> <FaEyeSlash /> </>,
            component: <></>,
            mode: "both"
        },
        {
            id: 1,
            button: (<> <FaMapLocation /> Endereço </>),
            component: (<CustomerAddress />),
            mode: "both",
        },
        {
            id: 2,
            button: (<> <FaNetworkWired /> Origem </>),
            component: (<CustomerOrigin />),
            mode: "both",
        },
        {
            id: 3,
            button: (<> <FaEnvelope /> Contatos </>),
            component: (<CustomerContacts />),
            mode: "both",
        },
        {
            id: 4,
            button: (<> <FaPhone /> Telefones </>),
            component: (<CustomerPhones />),
            mode: "both",
        },
        {
            id: 5,
            button: (<> <FaNoteSticky /> Observações </>),
            component: (<CustomerObservations />),
            mode: "both",
        },
        {
            id: 6,
            button: (<> <FaCalendar /> Agenda </>),
            component: (<CustomerSchedule />),
            mode: "edit",
        },
        {
            id: 7,
            button: (<> <FaFile /> Histórico </>),
            component: (<CustomerHistory />),
            mode: "edit",
        },
        {
            id: 8,
            button: (<> <FaCartShopping /> Compras </>),
            component: (<CustomerPurchases />),
            mode: "edit",
        },
    ];

    const renderingSectionState = useCustomState<number>(0);
    const customerDataState = useCustomState<Customer>({} as Customer);
    const selectedContactState = useCustomState<Contact>({ CODIGO: 0, NOME: "" });
    const loadingState = useCustomState<boolean>(false);
    const contactModalState = useCustomState<boolean>(false);
    const citiesState = useCustomState<Array<City>>([]);
    const segmentsState = useCustomState<Array<Segment>>([]);
    const mediasState = useCustomState<Array<Media>>([]);
    const groupsState = useCustomState<Array<CustomerGroup>>([]);
    const originsState = useCustomState<Array<Origin>>([]);
    const operatorsState = useCustomState<Array<Operator>>([]);
    const positionsState = useCustomState<Array<Position>>([]);

    const onClickAddContact = () => {
        customerDataState.set(prev => {
            const updatedCustomerData = { ...prev };
            const CODIGO = selectedContactState.value.CODIGO || Date.now();

            if (updatedCustomerData.CONTATOS && updatedCustomerData.CONTATOS.some(c => c.CODIGO && c.CODIGO === selectedContactState.value.CODIGO)) {
                updatedCustomerData.CONTATOS = updatedCustomerData.CONTATOS.filter(c => c.CODIGO !== selectedContactState.value.CODIGO);
            }

            updatedCustomerData.CONTATOS = [...(updatedCustomerData.CONTATOS || []), { FILHOS: 0, ...selectedContactState.value, CODIGO }];

            return updatedCustomerData;
        });

        contactModalState.set(false);
    }

    const onClickCancelEditContact = () => {
        contactModalState.set(false);
        selectedContactState.reset();
    }

    const onClickEditContact = (c: Contact) => () => {
        contactModalState.set(true);
        selectedContactState.set(c);
    }

    const onClickDeleteContact = (c: Contact) => () => {
        customerDataState.set(prev => {
            const updated = { ...prev };
            updated.CONTATOS = updated.CONTATOS?.filter((pc) => pc.CODIGO !== c.CODIGO);
            return updated;
        });

        if (selectedContactState.value.CODIGO === c.CODIGO) {
            selectedContactState.set({} as Contact);
        }
    }

    useEffect(() => {
        customRequest<{ message: string, data: City[] }, never>({
            method: "get",
            service: "customers",
            endpoint: "/cities",
            params: { perPage: 99999 },
            onSuccess: (res) => citiesState.set(res["data"]),
            loadingState
        });

        customRequest<{ message: string, data: Segment[] }, never>({
            method: "get",
            service: "customers",
            endpoint: "/segments",
            params: { perPage: 9999 },
            onSuccess: (res) => segmentsState.set(res["data"]),
            loadingState
        });

        customRequest<{ message: string, data: Media[] }, never>({
            method: "get",
            service: "customers",
            endpoint: "/medias",
            params: { perPage: 9999 },
            onSuccess: (res) => mediasState.set(res["data"]),
            loadingState
        });

        customRequest<{ message: string, data: Operator[] }, never>({
            method: "get",
            service: "users",
            endpoint: "/users",
            params: { perPage: 9999 },
            onSuccess: (res) => operatorsState.set(res["data"]),
            loadingState
        });

        customRequest<{ message: string, data: Origin[] }, never>({
            method: "get",
            service: "customers",
            endpoint: "/origins",
            params: { perPage: 9999 },
            onSuccess: (res) => originsState.set(res["data"]),
            loadingState
        });

        customRequest<{ message: string, data: CustomerGroup[] }, never>({
            method: "get",
            service: "customers",
            endpoint: "/customer-groups",
            params: { perPage: 9999 },
            onSuccess: (res) => groupsState.set(res["data"]),
            loadingState
        });

        customRequest<{ message: string, data: Position[] }, never>({
            method: "get",
            service: "customers",
            endpoint: "/positions",
            params: { perPage: 9999 },
            onSuccess: (res) => positionsState.set(res["data"]),
            loadingState
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <CustomerContext.Provider value={{
            formSections,
            renderingSectionState,
            customerDataState,
            selectedContactState,
            loadingState,
            contactModalState,
            citiesState,
            segmentsState,
            mediasState,
            operatorsState,
            groupsState,
            originsState,
            positionsState,
            onClickAddContact,
            onClickEditContact,
            onClickDeleteContact,
            onClickCancelEditContact,
        }}>
            {children}
        </CustomerContext.Provider>
    );
}

export { CustomerContext, CustomerProvider };