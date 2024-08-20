import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { Unit } from "../../../../../interfaces/Unit.type";

const unitsColumns: Array<TableColumn<Unit>> = [
	{
		key: "CODIGO",
		header: "Código",
		width: 7,
		primarykey: true,
		alignContent: "start",
		filter: {
			type: "input",
			width: "20rem",
			icon: <FaTag />,
		},
	},
	{
		key: "DESCRICAO",
		header: "Nome/Título",
		width: 24,
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "INATIVOS_RECENTES",
		header: "Dias p/ inativo recente",
		width: 12,
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "INATIVOS_ANTIGOS",
		header: "Dias p/ inativo antigo",
		width: 12,
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "EMAIL",
		header: "Email p/ manifesto",
		width: 24,
		format: (row) => {
			return row.EMAIL ? row.EMAIL : "Não registrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "CONTATO_MAIL",
		header: "Contato p/ manifesto",
		width: 24,
		format: (row) => {
			return row.CONTATO_MAIL ? row.CONTATO_MAIL : "Não registrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
];

export default unitsColumns;
