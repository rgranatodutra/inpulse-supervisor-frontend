import { TableColumn } from "../../../../../components/Table/types";
import { CampaignsChanges } from "../../../../../interfaces/CampaignsChanges.type";

const campaignColumns: Array<TableColumn<CampaignsChanges>> = [
	{
		key: "CODIGO",
		header: "Código",
		width: 7,
		primarykey: true,
		alignContent: "start",
	},
	{
		key: "OPERADOR",
		header: "Código operador",
		width: 6,
		format: (row) => {
			return row.OPERADOR ? row.OPERADOR : "não resgistrado";
		},
	},
	{
		key: "OPERADOR_NOME",
		header: "Nome do operador",
		width: 24,
		format: (row) => {
			return row.OPERADOR_NOME ? row.OPERADOR_NOME : "não resgistrado";
		},
	},
	{
		key: "DATA_HORA",
		header: "Data",
		width: 16,
		format: (row) => {
			if (row.DATA_HORA) {
				return new Date(row.DATA_HORA).toLocaleString();
			} else {
				return "Não registrado";
			}
		},
		filter: {
			type: "date-range",
			width: "20rem",
		},
	},
	{
		key: "TABELA",
		header: "Tabela",
		width: 12,
		format: (row) => {
			return row.TABELA ? row.TABELA : "não resgistrado";
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
	},
	{
		key: "OLD_VALOR",
		header: "Valor antigo",
		width: 24,
		format: (row) => {
			return row.OLD_VALOR ? row.OLD_VALOR : "não resgistrado";
		},
	},
	{
		key: "NEW_VALOR",
		header: "Valor novo",
		width: 24,
		format: (row) => {
			return row.NEW_VALOR ? row.NEW_VALOR : "não resgistrado";
		},
	},
	{
		key: "MODULO",
		header: "Módulo",
		width: 12,
		format: (row) => {
			return row.MODULO ? row.MODULO : "não resgistrado";
		},
	},
	{
		key: "OPERACAO",
		header: "Operação",
		width: 12,
		format: (row) => {
			return row.OPERACAO ? row.OPERACAO : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "CODIGO_PK",
		header: "Código PK",
		width: 6,
		format: (row) => {
			return row.CODIGO_PK ? row.CODIGO_PK : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
];

export default campaignColumns;
