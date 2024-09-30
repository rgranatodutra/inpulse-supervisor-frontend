import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { ClientsToAttend } from "../../../../../interfaces/ClientsToAttend.type";

const clientsQueueColumns: Array<TableColumn<ClientsToAttend>> = [
	{
		key: "codigo",
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
		key: "razao",
		header: "Razão do cliente",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "cod_erp",
		header: "Código erp",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
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
		key: "nome",
		header: "Nome do operador",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "DT_AGENDAMENTO",
		header: "Data de agendamento",
		width: 20,
		format: (r) => {
			if (r.DT_AGENDAMENTO) {
				return new Date(r.DT_AGENDAMENTO).toLocaleString();
			} else {
				return "Não registrado";
			}
		},
		filter: {
			type: "date-range",
			width: "38rem",
		},
	},
];

export default clientsQueueColumns;
