import { FaA, FaHeadphones, FaHeadset, FaMicrophone, FaSitemap, FaTag, FaToggleOn, FaUserTie } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { Operator } from "../../../../../interfaces/Operator.type";

const operatorsColumns: Array<TableColumn<Operator>> = [
    {
        key: "CODIGO",
        header: "Código",
        width: 6,
        primarykey: true,
        alignContent: "start",
        filter: {
            section: "Dados do Operador",
            type: "input",
            width: "20rem",
            icon: <FaTag />
        }
    },
    {
        key: "CODIGO_ERP",
        header: "Código ERP",
        width: 6,
        format: (r) => r.CODIGO_ERP || "N/D",
        filter: {
            section: "Dados do Operador",
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
            section: "Dados do Operador",
            type: "select",
            width: "20rem",
            icon: <FaToggleOn />,
            placeholder: "Status do operador",
            options: [
                { name: "Ativo", value: "SIM" },
                { name: "Inativo", value: "NAO" },
                { name: "Ambos", value: undefined },
            ]
        }
    },
    {
        key: "NIVEL",
        header: "Nível",
        width: 6,
        format: (r) => {
            switch (r.NIVEL) {
                case "ATIVO":
                    return <> <FaMicrophone /> Ativo </>;
                case "RECEP":
                    return <> <FaHeadphones /> Receptivo </>;
                case "AMBOS":
                    return <> <FaHeadset /> Ambos </>;
                case "ADMIN":
                    return <> <FaUserTie /> Supervisor </>;
                default:
                    return "N/D";
            }
        },
        filter: {
            section: "Dados do Operador",
            type: "multi-select",
            width: "20rem",
            icon: <FaSitemap />,
            placeholder: "Nível do operador",
            options: [
                { name: "Ativo", value: "ATIVO" },
                { name: "Receptivo", value: "RECEP" },
                { name: "Ambos", value: "AMBOS" },
                { name: "Supervisor", value: "ADMIN" }
            ]
        }
    },
    {
        key: "NOME",
        header: "Nome",
        width: 16
        ,
        format: (r) => r.NOME || "Não definido",
        filter: {
            section: "Dados do Operador",
            type: "input",
            width: "41rem",
            icon: <FaA />,
        }
    },
    {
        key: "LOGIN",
        header: "Login",
        width: 16,
        format: (r) => r.LOGIN || "Não definido",
        filter: {
            section: "Dados do Operador",
            type: "input",
            width: "41rem",
            icon: <FaA />,
        }
    },
    {
        key: "DATACAD",
        header: "Data Cadastro",
        width: 12,
        format: (r) => r.DATACAD ? new Date(r.DATACAD).toLocaleString() : "N/D",
        filter: {
            section: "Dados do Operador",
            type: "date-range",
            width: "41rem",
        }
    },
];

export default operatorsColumns;