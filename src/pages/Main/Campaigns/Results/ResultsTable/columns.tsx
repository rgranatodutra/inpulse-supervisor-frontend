import { TableColumn } from "../../../../../components/Table/types";
import { Result } from "../../../../../interfaces/Result.type";

const resultsColumns: Array<TableColumn<Result>> = [
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
		format: (row) => {
			return row.NOME ? row.NOME : "não resgistrado";
		},
	},
	{
		key: "TIPO",
		header: "Tipo",
		width: 12,
		format: (row) => {
			return row.TIPO ? row.TIPO : "não resgistrado";
		},
	},
	{
		key: "ESUCESSO",
		header: "Sucesso",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.ESUCESSO ? row.ESUCESSO : "não resgistrado";
		},
	},
	{
		key: "EVENDA",
		header: "Venda",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.EVENDA ? row.EVENDA : "não resgistrado";
		},
	},
	{
		key: "NOME_ACAO",
		header: "Nome da ação",
		width: 24,
		format: (row) => {
			return row.NOME_ACAO ? row.NOME_ACAO : "não resgistrado";
		},
	},
	{
		key: "ECONTATO",
		header: "Contato",
		width: 6,
		defaultDisabled: true,
	},
	{
		key: "COD_ACAO",
		header: "Codigo da ação",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.COD_ACAO ? row.COD_ACAO : "não resgistrado";
		},
	},
	{
		key: "PRIORIDADE",
		header: "Prioridade",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.PRIORIDADE ? row.PRIORIDADE : "não resgistrado";
		},
	},
	{
		key: "PROPOSTA",
		header: "Proposta",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.PROPOSTA ? row.PROPOSTA : "não resgistrado";
		},
	},
	{
		key: "FIDELIZARCOTACAO",
		header: "Fidelizar cotacão",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.FIDELIZARCOTACAO ? row.FIDELIZARCOTACAO : "não resgistrado";
		},
	},
	{
		key: "PESQUISA_SATISFACAO",
		header: "Pesquisa de satisfação",
		width: 10,
	},
	{
		key: "EPEDIDO",
		header: "Pedido",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.EPEDIDO ? row.EPEDIDO : "não resgistrado";
		},
	},
	{
		key: "QTDE_FIDELIZARCOTACAO",
		header: "Quantidade fidelizar cotação",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.QTDE_FIDELIZARCOTACAO ? row.QTDE_FIDELIZARCOTACAO : "não resgistrado";
		},
	},
	{
		key: "ALTERA_DURACAO",
		header: "Alterar duração",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.ALTERA_DURACAO ? row.ALTERA_DURACAO : "não resgistrado";
		},
	},
	{
		key: "CANCELAPROPOSTA",
		header: "Cancelar proposta",
		width: 10,
	},
	{
		key: "UTILIZAR_AGENDA",
		header: "Utilizar agenda",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.UTILIZAR_AGENDA ? row.UTILIZAR_AGENDA : "não resgistrado";
		},
	},
	{
		key: "ECOMPRA",
		header: "Compra",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.ECOMPRA ? row.ECOMPRA : "não resgistrado";
		},
	},
	{
		key: "ENEGOCIACAO",
		header: "Negociação",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.ENEGOCIACAO ? row.ENEGOCIACAO : "não resgistrado";
		},
	},
	{
		key: "NAOECOMPRA",
		header: "Não é compra",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.NAOECOMPRA ? row.NAOECOMPRA : "não resgistrado";
		},
	},
	{
		key: "WHATS_ACAO",
		header: "Ação whatsApp",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.WHATS_ACAO ? row.WHATS_ACAO : "não resgistrado";
		},
	},
	{
		key: "WHATS_URGENCIA_AGENDAMENTO",
		header: "Urgencia whatsApp",
		width: 10,
		defaultDisabled: true,
		format: (row) => {
			return row.WHATS_URGENCIA_AGENDAMENTO ? row.WHATS_URGENCIA_AGENDAMENTO : "não resgistrado";
		},
	},
	{
		key: "WHATS_ALTERAR_AGENDAMENTO",
		header: "Alterar agendamento whatsApp",
		width: 10,
	},
];

export default resultsColumns;
