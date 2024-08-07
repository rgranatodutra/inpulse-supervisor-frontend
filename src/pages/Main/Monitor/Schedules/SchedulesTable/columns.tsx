import { TableColumn } from "../../../../../components/Table/types";
import { Schedule } from "../../../../../interfaces/Schedule.type";

const schedulesColumns: Array<TableColumn<Schedule>> = [
    {
        key: "CODIGO",
        header: "Código",
        width: 6,
        primarykey: true,
        alignContent: "start"
    },
    {
        key: "CODIGO_ERP",
        header: "Código ERP",
        width: 6
    },
    {
        key: "ULTIMO_CONTATO",
        header: "Último contato",
        width: 12
    },
    {
        key: "DATA_AGENDAMENTO",
        header: "Data agendamento",
        width: 20,
        format: (r) => new Date(r.DATA_AGENDAMENTO).toLocaleString()
    },
    {
        key: "CLIENTE",
        header: "Cliente",
        width: 20
    },
    {
        key: "CPF_CNPJ",
        header: "CPF/CNPJ",
        width: 12
    },
    {
        key: "CIDADE",
        header: "CIDADE",
        width: 12
    },
    {
        key: "UF",
        header: "UF",
        width: 3
    },
    {
        key: "CAMPANHA",
        header: "Campanha",
        width: 12
    },
    {
        key: "SEGMENTO",
        header: "Segmento",
        width: 12
    },
    {
        key: "DATA_RESULTADO",
        header: "Data resultado",
        width: 20,
        format: (r) => new Date(r.DATA_RESULTADO).toLocaleString()
    },
    {
        key: "RESULTADO",
        header: "Resultado",
        width: 12
    },
    {
        key: "FONE1",
        header: "Fone 1",
        width: 12
    },
    {
        key: "FONE2",
        header: "Fone 2",
        width: 12
    },
    {
        key: "FONE3",
        header: "Fone 3",
        width: 12
    },
    {
        key: "OPERADOR",
        header: "Operador",
        width: 12
    },
    {
        key: "OPERADOR_LIGACAO",
        header: "Operador ligação",
        width: 12
    },
    {
        key: "FONE_LIGACAO",
        header: "Fone ligação",
        width: 12
    },
    {
        key: "LIGACAO_INICIO",
        header: "Início Ligação",
        width: 20,
        format: (r) => new Date(r.LIGACAO_INICIO).toLocaleString()
    },
    {
        key: "LIGACAO_FIM",
        header: "Fim Ligação",
        width: 20,
        format: (r) => new Date(r.LIGACAO_FIM).toLocaleString()
    },
    {
        key: "ULTIMA_COMPRA",
        header: "Última compra",
        width: 12,
        format: (r) => new Date(r.ULTIMA_COMPRA).toLocaleDateString()
    },
    {
        key: "DATA_RECOMPRA",
        header: "Data recompra",
        width: 12,
        format: (r) => new Date(r.DATA_RECOMPRA).toLocaleDateString()
    },
];

export default schedulesColumns;