export type PurchaseToExpire = {
	codigo: number;
	razao: string;
	OPERADOR?: number;
	nome?: string;
	PERIODO_RECOMPRA: number;
	DIAS_RECOMPRA: number;
	DIAS_ULTIMA_COMPRA: number;
	DT_AGENDAMENTO: string;
	DATA_ULT_COMPRA: string;
};
