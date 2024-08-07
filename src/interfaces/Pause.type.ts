export interface Pause {
    CODIGO: number;
    OPERADOR: number;
    OBS: string;
    COD_PAUSA: number;
    MOTIVO: string;
    TIPO: 'ATIVO' | 'RECEP' | null;
    DATA_HORA: string;
    DATA_HORA_FIM: 'string' | null;
    EXCEDEU: 'SIM' | 'NAO' | null;
    TEMPO_EXCEDIDO: 'STRING';
}