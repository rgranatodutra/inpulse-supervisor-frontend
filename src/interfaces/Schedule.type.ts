import { UF } from "./UF.type";

export interface Schedule {
	CODIGO: number;
	ULTIMO_CONTATO: string;
	DT_AGENDAMENTO: string;
	COD_ERP: string;
	RAZAO: string;
	CPF_CNPJ: string;
	CIDADE: string;
	ESTADO: UF;
	CAMPANHA: string;
	SEGMENTO: string;
	DT_RESULTADO: string;
	RESULTADO: string;
	FONE1: string;
	FONE2: string;
	FONE3: string;
	OPERADOR: string;
	OPERADOR_LIGACAO: string;
	TELEFONE_LIGADO: string;
	DATA_HORA_LIG: string;
	DATA_HORA_FIM: string;
	DATA_ULT_COMPRA: string;
	DATA_RECOMPRA: string;
}
