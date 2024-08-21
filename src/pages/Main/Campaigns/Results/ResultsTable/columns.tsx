import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { Result } from "../../../../../interfaces/Result.type";

const resultsColumns: Array<TableColumn<Result>> = [
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
		format: (row) => {
			return row.NOME ? row.NOME : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "TIPO",
		header: "Tipo",
		width: 12,
		format: (row) => {
			return row.TIPO ? row.TIPO : "não resgistrado";
		},
		filter: {
			type: "select",
			width: "13rem",
			placeholder: "Selecione o tipo",
			options: [
				{ name: "Ativo", value: "ATIVO" },
				{ name: "Recep", value: "RECEP" },
				{ name: "Ambos", value: "AMBOS" },
			],
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
		filter: {
			type: "select",
			width: "13rem",
			placeholder: "É sucesso?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "select",
			width: "13rem",
			placeholder: "É venda?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
		},
	},
	{
		key: "NOME_ACAO",
		header: "Nome da ação",
		width: 24,
		format: (row) => {
			return row.NOME_ACAO ? row.NOME_ACAO : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "ECONTATO",
		header: "Contato",
		width: 6,
		defaultDisabled: true,
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "É contato?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
		},
	},
	{
		key: "COD_ACAO",
		header: "Codigo da ação",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.COD_ACAO ? row.COD_ACAO : "não resgistrado";
		},
		filter: {
			type: "input",
			width: "20rem",
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
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Tem prioridade?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "É proposta?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Fidelizar cotação?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
		},
	},
	{
		key: "PESQUISA_SATISFACAO",
		header: "Pesquisa de satisfação",
		width: 10,
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "É pesquisa de satisfação?",
			options: [
				{ name: "Não", value: "N" },
				{ name: "Sim", value: "S" },
			],
		},
	},
	{
		key: "EPEDIDO",
		header: "Pedido",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.EPEDIDO ? row.EPEDIDO : "não resgistrado";
		},
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "É pedido?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "input",
			width: "20rem",
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
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Alterar duração?",
			options: [
				{ name: "Não", value: "N" },
				{ name: "Sim", value: "S" },
			],
		},
	},
	{
		key: "CANCELAPROPOSTA",
		header: "Cancelar proposta",
		width: 10,
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Cancelar proposta?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
		},
	},
	{
		key: "UTILIZAR_AGENDA",
		header: "Utilizar agenda",
		width: 6,
		defaultDisabled: true,
		format: (row) => {
			return row.UTILIZAR_AGENDA ? row.UTILIZAR_AGENDA : "não resgistrado";
		},
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Utilizar agenda?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "É compra?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "É negociação?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "select",
			width: "20rem",
			placeholder: "Não é compra?",
			options: [
				{ name: "Não", value: "NAO" },
				{ name: "Sim", value: "SIM" },
			],
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
		filter: {
			type: "input",
			width: "20rem",
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
		filter: {
			type: "multi-select",
			width: "20rem",
			placeholder: "Nivel de urgencia",
			options: [
				{ name: "Muito alta", value: "MUITO_ALTA" },
				{ name: "Alta", value: "ALTA" },
				{ name: "Média", value: "MEDIA" },
				{ name: "Normal", value: "NORMAL" },
			],
		},
	},
	{
		key: "WHATS_ALTERAR_AGENDAMENTO",
		header: "Alterar agendamento whatsApp",
		width: 10,
		filter: {
			type: "input",
			width: "20rem",
		},
	},
];

export default resultsColumns;
