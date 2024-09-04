export type BreaksTaken = {
	CODIGO: number;
	OPERADOR: number;
	NOME: string;
	DATA_HORA?: Date;
	OBS?: string;
	COD_PAUSA?: number;
	EXCEDEU?: "SIM" | "NAO";
	TIPO?: "ATIVO" | "RECEP";
	TEMPO_EXCEDIDO?: string;
	DATA_HORA_FIM?: Date;
};
