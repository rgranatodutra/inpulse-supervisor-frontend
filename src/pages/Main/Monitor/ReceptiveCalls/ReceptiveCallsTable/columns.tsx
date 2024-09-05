import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { ReceptiveCall } from "../../../../../interfaces/ReceptiveCall.type";

const receptiveCallColumns: Array<TableColumn<ReceptiveCall>> = [
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
		header: "Código operador",
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
		key: "CLIENTE",
		header: "Código cliente",
		width: 6,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "RAZAO",
		header: "Razão social do cliente",
		width: 24,
		filter: {
			type: "input",
			width: "40rem",
		},
	},
	{
		key: "LIGACAO_RECEBIDA",
		header: "Data da ligação",
		width: 12,
		format: (l) => {
			return `${l.LIGACAO_RECEBIDA.slice(0, 10)} às ${l.LIGACAO_RECEBIDA.slice(11, 16)}`;
		},
		filter: {
			type: "date-range",
			width: "38rem",
		},
	},
	{
		key: "LIGACAO_FINALIZADA",
		header: "Fim da ligação",
		width: 12,
		format: (l) => {
			return `${l.LIGACAO_FINALIZADA.slice(0, 10)} às ${l.LIGACAO_FINALIZADA.slice(11, 16)}`;
		},
		filter: {
			type: "date-range",
			width: "38rem",
		},
	},
	{
		key: "FONE_RECEPTIVO",
		header: "Telefone",
		width: 12,
		format: (f) => {
			return f.FONE_RECEPTIVO.trim() ? f.FONE_RECEPTIVO.trim() : "Não cadastrado";
		},
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "RESULTADO",
		header: "Resultado da ligação",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
];

export default receptiveCallColumns;
