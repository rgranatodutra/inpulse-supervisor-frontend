import { TableColumn } from "../../../../../components/Table/types";
import { Schedule } from "../../../../../interfaces/Schedule.type";

const schedulesColumns: Array<TableColumn<Schedule>> = [
	{
		key: "CODIGO",
		header: "Código",
		width: 6,
		primarykey: true,
		alignContent: "start",
	},
	{
		key: "COD_ERP",
		header: "Código ERP",
		width: 6,
		format: (row) => {
			return row.COD_ERP ?? "Não cadastrado";
		},
	},
	{
		key: "ULTIMO_CONTATO",
		header: "Último contato",
		width: 12,
		format: (row) => {
			if (row.ULTIMO_CONTATO) {
				return new Date(row.ULTIMO_CONTATO).toLocaleString();
			} else {
				return "Não contatado";
			}
		},
	},
	{
		key: "DT_AGENDAMENTO",
		header: "Data agendamento",
		width: 20,
		format: (row) => {
			if (row.DT_AGENDAMENTO) {
				return new Date(row.DT_AGENDAMENTO).toLocaleString();
			} else {
				return "Não agendado";
			}
		},
	},
	{
		key: "CLIENTE_NOME",
		header: "Razão do cliente",
		width: 24,
	},
	{
		key: "CPF_CNPJ",
		header: "CPF/CNPJ",
		width: 12,
		format: (row) => {
			if (row.CPF_CNPJ.trim()) {
				return row.CPF_CNPJ;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "CIDADE",
		header: "CIDADE",
		width: 12,
	},
	{
		key: "ESTADO",
		header: "UF",
		width: 3,
	},
	{
		key: "CAMPANHA_NOME",
		header: "Campanha",
		width: 12,
		defaultDisabled: true,
	},
	{
		key: "SEGMENTO",
		header: "Segmento",
		width: 12,
		defaultDisabled: true,
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
		key: "RESULTADO_NOME",
		header: "Resultado",
		width: 12,
		defaultDisabled: true,
		format: (row) => {
			if (row.RESULTADO_NOME != null && row.RESULTADO_NOME != undefined && row.RESULTADO_NOME.trim()) {
				return row.RESULTADO_NOME;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "FONE1",
		header: "Fone 1",
		width: 12,
		format: (row) => {
			if (row.FONE1 && row.FONE1 != "0") {
				return row.FONE1;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "FONE2",
		header: "Fone 2",
		width: 12,
		defaultDisabled: true,
		format: (row) => {
			if (row.FONE2 && row.FONE2 != "0") {
				return row.FONE2;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "FONE3",
		header: "Fone 3",
		width: 12,
		defaultDisabled: true,
		format: (row) => {
			if (row.FONE3 && row.FONE3 != "0") {
				return row.FONE3;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "OPERADOR_NOME",
		header: "Operador",
		width: 12,
		defaultDisabled: true,
		format: (row) => {
			if (row.OPERADOR_NOME != null && row.OPERADOR_NOME != undefined && row.OPERADOR_NOME.trim()) {
				return row.OPERADOR_NOME;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "OPERADOR_LIG_NOME",
		header: "Operador ligação",
		width: 12,
		defaultDisabled: true,
		format: (row) => {
			if (row.OPERADOR_LIG_NOME != null && row.OPERADOR_LIG_NOME != undefined) {
				return row.OPERADOR_LIG_NOME;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "TELEFONE_LIGADO",
		header: "Telefone ligado",
		width: 12,
		format: (row) => {
			if (row.TELEFONE_LIGADO != null && row.TELEFONE_LIGADO != undefined && row.TELEFONE_LIGADO.trim()) {
				return row.TELEFONE_LIGADO;
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "DATA_HORA_LIG",
		header: "Início Ligação",
		width: 20,
		format: (row) => {
			if (row.DATA_HORA_LIG) {
				return new Date(row.DATA_HORA_LIG).toLocaleString();
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "DATA_HORA_FIM",
		header: "Fim Ligação",
		width: 20,
		format: (row) => {
			if (row.DATA_HORA_FIM) {
				return new Date(row.DATA_HORA_FIM).toLocaleString();
			} else {
				return "Não cadastrado";
			}
		},
	},
	{
		key: "DATA_ULT_COMPRA",
		header: "Última compra",
		width: 12,
		format: (row) => {
			if (row.DATA_ULT_COMPRA) {
				return new Date(row.DATA_ULT_COMPRA).toLocaleString();
			} else {
				return "Não cadastrado";
			}
		},
	},
];

export default schedulesColumns;
