import { FaBriefcase, FaCalendar, FaCity, FaIdCard, FaMapLocation, FaTag, FaToggleOn, FaUser } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { Customer } from "../../../../../interfaces/Customer.type";
import formatCpfCnpj from "../../../../../utils/formatCpfCnpj.util";

const customerColumns: Array<TableColumn<Customer>> = [
    {
        key: "CODIGO",
        header: "Código",
        width: 7,
        primarykey: true,
        alignContent: "start",
        filter: {
            section: "Dados do cliente",
            type: "input",
            width: "20rem",
            icon: <FaTag />,
        }
    },
    {
        key: "COD_ERP",
        header: "Código ERP",
        width: 10,
        primarykey: true,
        format: (r) => r.COD_ERP || "N/D",
        filter: {
            section: "Dados do cliente",
            type: "input",
            width: "20rem",
            icon: <FaTag />,
        }
    },
    {
        key: "ATIVO",
        header: "Ativo",
        width: 6,
        format: (r) => (
            <div className={`customer_active_tag ${r.ATIVO === "SIM" ? "active" : "inactive"}`}>
                {r.ATIVO === "SIM" ? "Ativo" : "Inativo"}
            </div>),
        filter: {
            section: "Dados do cliente",
            type: "select",
            width: "20rem",
            icon: <FaToggleOn />,
            placeholder: "Status do cliente",
            options: [
                { name: "Ativo", value: "SIM" },
                { name: "Inativo", value: "NAO" },
                { name: "Ambos", value: undefined },
            ]
        }
    },
    {
        key: "RAZAO",
        header: "Razão Social",
        width: 20,
        format: (r) => r.RAZAO || "Não definido",
        filter: {
            section: "Dados do cliente",
            type: "input",
            width: "41rem",
            icon: <FaBriefcase />,
        }
    },
    {
        key: "CPF_CNPJ",
        header: "CPF/CNPJ",
        width: 20,
        format: (r) => r.CPF_CNPJ ? formatCpfCnpj(r.CPF_CNPJ) : "Não definido",
        filter: {
            section: "Dados do cliente",
            type: "input",
            width: "41rem",
            icon: <FaIdCard />,
            placeholder: "Telefone 1"
        }
    },
    {
        key: "PESSOA",
        header: "Pessoa",
        format: (r) => r.PESSOA === "FIS" ? "Física" : "Jurídica",
        width: 6,
        filter: {
            section: "Dados do cliente",
            type: "select",
            width: "20rem",
            icon: <FaUser />,
            placeholder: "Pessoa",
            options: [
                { name: "Física", value: "FIS" },
                { name: "Jurídica", value: "JUR" },
                { name: "Ambas", value: undefined },
            ]
        }
    },
    {
        key: "CIDADE",
        header: "Cidade",
        width: 12,
        filter: {
            section: "Dados do cliente",
            type: "input",
            width: "20rem",
            icon: <FaCity />,
            placeholder: "Cidade",
        }
    },
    {
        key: "ESTADO",
        header: "UF",
        width: 6,
        filter: {
            section: "Dados do cliente",
            type: "input",
            width: "10rem",
            icon: <FaMapLocation />,
            placeholder: "UF",
        }
    },
    {
        key: "DATACAD",
        header: "Data Cadastro",
        format: (r) => new Date(r.DATACAD).toLocaleString(),
        width: 10,
        filter: {
            section: "Dados do cliente",
            type: "date-range",
            width: "20rem",
            icon: <FaCalendar />,
            placeholder: "Data Cadastro",
        }
    },
];

export default customerColumns;