import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { BreaksTaken } from "../../../../../interfaces/BreaksTaken.type";

const breaksColumns: Array<TableColumn<BreaksTaken>> = [
	{
		key: "CODIGO",
		width: 7,
		header: "Código",
		primarykey: true,
		alignContent: "start",
		filter: {
			type: "input",
			width: "19.5rem",
			icon: <FaTag />,
		},
	},
	{
		key: "OPERADOR",
		header: "Operador código",
		width: 6,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "NOME",
		header: "Nome do operador",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "TIPO",
		header: "Tipo",
		width: 8,
		format: (r) => (r.TIPO === "ATIVO" ? "Ativo" : r.TIPO === "RECEP" ? "Receptivo" : "N/D"),
		filter: {
			type: "select",
			width: "19.5rem",
			placeholder: "Selecione o tipo",
			options: [
				{ name: "Ativo", value: "ATIVO" },
				{ name: "Receptivo", value: "RECEP" },
				{ name: "Nenhum", value: null },
			],
		},
	},
	{
		key: "DATA_HORA",
		header: "Data e hora",
		width: 20,
		format: (r) => {
			if (r.DATA_HORA) {
				return new Date(r.DATA_HORA).toLocaleString();
			} else {
				return "Não registrado";
			}
		},
		filter: {
			type: "date-range",
			width: "38rem",
		},
	},
	{
		key: "EXCEDEU",
		header: "Excedeu ?",
		width: 8,
		format: (r) => (r.EXCEDEU === "SIM" ? "Sim" : "Não"),
		filter: {
			type: "select",
			width: "19.5rem",
			placeholder: "Excedeu?",
			options: [
				{ name: "Sim", value: "SIM" },
				{ name: "Não", value: "NAO" },
			],
		},
	},
	{
		key: "TEMPO_EXCEDIDO",
		header: "Tempo excedido",
		width: 8,
		format: (r) => (r.TEMPO_EXCEDIDO ? r.TEMPO_EXCEDIDO : "Não excedeu"),
	},
	{
		key: "OBS",
		header: "Observação",
		width: 24,
	},
];

export default breaksColumns;
