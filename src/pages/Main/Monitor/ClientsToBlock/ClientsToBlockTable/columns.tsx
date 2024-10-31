import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { ClientsToBlock } from "../../../../../interfaces/ClientsToBlock.type";

const clientsQueueColumns: Array<TableColumn<ClientsToBlock>> = [
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
		key: "CODIGO_CAMPANHA_CLIENTE",
		header: "Código cliente",
		width: 7,
		filter: {
			type: "input",
			width: "19.5rem",
			icon: <FaTag />,
		},
	},
	{
		key: "COD_ERP",
		header: "Código erp",
		width: 7,
		filter: {
			type: "input",
			width: "19.5rem",
			icon: <FaTag />,
		},
	},
	{
		key: "RAZAO",
		header: "Razão social",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "DATA_HORA_CRIACAO",
		header: "Data da criação",
		width: 20,
		format: (r) => {
			if (r.DATA_HORA_CRIACAO) {
				return new Date(r.DATA_HORA_CRIACAO).toLocaleString();
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
		key: "BLOQUEADO",
		header: "Bloqueado",
		width: 8,
		format: (r) => (r.BLOQUEADO === "S" ? "Sim" : "Não"),
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "RESULTADO",
		header: "Resultado",
		width: 8,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "OPERADOR",
		header: "Operador",
		width: 8,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "UF",
		header: "Estado",
		width: 8,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
];

export default clientsQueueColumns;
