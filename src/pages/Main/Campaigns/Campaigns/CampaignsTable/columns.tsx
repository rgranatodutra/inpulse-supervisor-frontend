import { TableColumn } from "../../../../../components/Table/types";
import { Campaign } from "../../../../../interfaces/Campaign.type";

const campaignColumns: Array<TableColumn<Campaign>> = [
	{
		key: "CODIGO",
		header: "Código",
		width: 7,
		primarykey: true,
		alignContent: "start",
	},
	{
		key: "NOME",
		header: "Nome",
		width: 24,
	},
	{
		key: "DATA_INI",
		header: "Data inicial",
		width: 12,
	},
	{
		key: "PRIORIDADE",
		header: "Prioridade",
		width: 6,
		format: (row) => {
			return row.PRIORIDADE ? row.PRIORIDADE : "Não registrado";
		},
	},
	{
		key: "TIPO",
		header: "Tipo",
		width: 10,
		format: (row) => {
			return row.TIPO ? row.TIPO : "Não registrado";
		},
	},
	{
		key: "MAX_RESPOSTA",
		header: "Tempo máximo",
		width: 6,
		format: (row) => {
			return row.MAX_RESPOSTA ? row.MAX_RESPOSTA : "Não registrado";
		},
	},
	{
		key: "PAUSADA",
		header: "Pausada",
		width: 6,
		format: (row) => {
			return row.PAUSADA ? row.PAUSADA : "Não registrado";
		},
	},
	{
		key: "PAUSAR_AG_PUBLICA",
		header: "Pausar ligações",
		width: 6,
		format: (row) => {
			return row.PAUSAR_AG_PUBLICA ? row.PAUSAR_AG_PUBLICA : "Não registrado";
		},
	},
];

export default campaignColumns;
