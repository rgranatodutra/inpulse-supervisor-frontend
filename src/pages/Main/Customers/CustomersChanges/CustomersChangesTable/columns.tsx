import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { CustomerChanges } from "../../../../../interfaces/CustomerChanges.type";

const customerColumns: Array<TableColumn<CustomerChanges>> = [
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
		key: "RAZAO",
		header: "Razão do cliente",
		width: 24,
		format: (row) => {
			return row.RAZAO ? row.RAZAO : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
			placeholder: "Digite a razão social",
		},
	},
	{
		key: "CODIGO_ERP",
		header: "Código ERP",
		width: 6,
		format: (row) => {
			return row.CODIGO_ERP ? row.CODIGO_ERP : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
			placeholder: "Digite o código ERP",
		},
	},
	{
		key: "CODIGO_SGR",
		header: "Código SGR",
		width: 6,
		format: (row) => {
			return row.CODIGO_SGR ? row.CODIGO_SGR : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
			placeholder: "Código SGR",
		},
	},
	{
		key: "DATAHORA",
		header: "Data",
		width: 16,
		filter: {
			type: "date-range",
			width: "20rem",
		},
	},
	{
		key: "OPERADOR_LOGIN",
		header: "Login do operador",
		width: 16,
		format: (row) => {
			return row.OPERADOR_LOGIN ? row.OPERADOR_LOGIN : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "CAMPO",
		header: "Campo alterado",
		width: 12,
		filter: {
			type: "input",
			width: "20rem",
			placeholder: "Campo alterado",
		},
	},
	{
		key: "VALOR_ANTIGO",
		header: "Valor antigo",
		width: 24,
		format: (row) => {
			return row.VALOR_ANTIGO ? row.VALOR_ANTIGO : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
			placeholder: "Valor antigo",
		},
	},
	{
		key: "VALOR_NOVO",
		header: "Valor novo",
		width: 24,
		format: (row) => {
			return row.VALOR_NOVO ? row.VALOR_NOVO : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
			placeholder: "Valor novo",
		},
	},
];

export default customerColumns;
