import { TableColumn } from "../../../../../components/Table/types";
import { Pause } from "../../../../../interfaces/Pause.type";

const breaksColumns: Array<TableColumn<Pause>> = [
    {
        key: "DATA_HORA",
        header: "Data e hora",
        width: 20,
        format: (r) => new Date(r.DATA_HORA).toLocaleString(),
        filter: {
            type: "date-range",
            width: "41rem",
        }
    },
    {
        key: "OPERADOR",
        header: "Operador",
        width: 12,
    },
    {
        key: "MOTIVO",
        header: "Motivo",
        width: 12
    },
    {
        key: "TIPO",
        header: "Tipo",
        width: 8,
        format: (r) => r.TIPO === "ATIVO" ? "Ativo" : r.TIPO === "RECEP" ? "Receptivo" : "N/D"
    },
    {
        key: "EXCEDEU",
        header: "Excedeu ?",
        width: 8,
        format: (r) => r.EXCEDEU === "SIM" ? "Sim" : "Não"
    },
    {
        key: "TEMPO_EXCEDIDO",
        header: "Tempo excedido",
        width: 8,
    },
    {
        key: "OBS",
        header: "Observação",
        width: 24,
    },
];

export default breaksColumns;
