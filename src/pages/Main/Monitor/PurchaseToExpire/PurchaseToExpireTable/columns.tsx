import { FaTag } from "react-icons/fa6";
import { TableColumn } from "../../../../../components/Table/types";
import { PurchaseToExpire } from "../../../../../interfaces/PurchaseToExpire.type";

const purchaseToExpireColumns: Array<TableColumn<PurchaseToExpire>> = [
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
		key: "OPERADOR",
		header: "Código operador",
		width: 6,
		format: (r) => {
			return r.OPERADOR ?? "Não cadastrado";
		},
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "nome",
		header: "Nome do operador",
		width: 24,
		format: (r) => {
			return r.nome ?? "Não cadastrado";
		},
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "razao",
		header: "Razão social do cliente",
		width: 24,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "DIAS_RECOMPRA",
		header: "Dias de recompra",
		width: 12,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "PERIODO_RECOMPRA",
		header: "Periodo de recompra",
		width: 12,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "DIAS_ULTIMA_COMPRA",
		header: "Dias desde última compra",
		width: 12,
		filter: {
			type: "input",
			width: "19.5rem",
		},
	},
	{
		key: "DT_AGENDAMENTO",
		header: "Data de agendamento",
		width: 12,
		format: (l) => {
			return l.DT_AGENDAMENTO.slice(0, 10);
		},
		filter: {
			type: "date-range",
			width: "38rem",
		},
	},
	{
		key: "DATA_ULT_COMPRA",
		header: "Data última compra",
		width: 12,
		format: (l) => {
			return l.DATA_ULT_COMPRA.slice(0, 10);
		},
		filter: {
			type: "date-range",
			width: "38rem",
		},
	},
];

export default purchaseToExpireColumns;
