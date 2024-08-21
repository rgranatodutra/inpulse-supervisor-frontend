import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { Campaign } from "../../../../../interfaces/Campaign.type";

const campaignColumns: Array<TableColumn<Campaign>> = [
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
		key: "NOME",
		header: "Nome",
		width: 24,
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "DATA_INI",
		header: "Data inicial",
		width: 12,
		filter: {
			type: "date-range",
			width: "20rem",
		},
	},
	{
		key: "PRIORIDADE",
		header: "Prioridade",
		width: 6,
		format: (row) => {
			return row.PRIORIDADE ? row.PRIORIDADE : "Não registrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "TIPO",
		header: "Tipo",
		width: 10,
		format: (row) => {
			return row.TIPO ? row.TIPO : "Não registrado";
		},
		filter: {
			type: "multi-select",
			width: "20rem",
			options: [
				{ name: "Ativos", value: "ATIVOS" },
				{ name: "Inat_R", value: "INAT_R" },
				{ name: "Inat_A", value: "INAT_A" },
				{ name: "Prospe", value: "PROSPE" },
			],
		},
	},
	{
		key: "MAX_RESPOSTA",
		header: "Tempo máximo",
		width: 6,
		format: (row) => {
			return row.MAX_RESPOSTA ? row.MAX_RESPOSTA : "Não registrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "PAUSADA",
		header: "Pausada",
		width: 6,
		format: (row) => {
			return row.PAUSADA ? row.PAUSADA : "Não registrado";
		},
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Está pausada?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
		},
	},
	{
		key: "PAUSAR_AG_PUBLICA",
		header: "Pausar ligações",
		width: 6,
		format: (row) => {
			return row.PAUSAR_AG_PUBLICA ? row.PAUSAR_AG_PUBLICA : "Não registrado";
		},
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Pausar ligações?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
		},
	},
];

export default campaignColumns;
