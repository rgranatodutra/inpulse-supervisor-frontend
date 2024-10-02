import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { DeactivatedCustomer } from "../../../../../interfaces/DeactivatedCustomer.type";

const deactivateCustomersColumns: Array<TableColumn<DeactivatedCustomer>> = [
	{
		key: "CLIENTE",
		width: 7,
		header: "Código cliente",
		primarykey: true,
		alignContent: "start",
		filter: {
			type: "input",
			width: "19.5rem",
			icon: <FaTag />,
		},
	},
	{
		key: "RAZAO",
		header: "Razão do cliente",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "COD_ERP",
		header: "Código erp",
		width: 6,
		filter: {
			type: "input",
			width: "19.5rem",
			icon: <FaTag />,
		},
	},
	{
		key: "OPERADOR",
		header: "Operador",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "COD_AGENDAMENTO",
		header: "Código agendamento",
		width: 8,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "DT_AGENDAMENTO",
		header: "Data de agendamento",
		width: 20,
		format: (row) => {
			if (row.DT_AGENDAMENTO) {
				return new Date(row.DT_AGENDAMENTO).toLocaleString();
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "DT_RESULTADO",
		header: "Data resultado",
		width: 20,
		format: (row) => {
			if (row.DT_RESULTADO) {
				return new Date(row.DT_RESULTADO).toLocaleString();
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "RESULTADO",
		header: "Resultado",
		width: 18,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
];

export default deactivateCustomersColumns;
