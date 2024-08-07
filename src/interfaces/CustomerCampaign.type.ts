export type CustomerCampaign = {
    CODIGO: number;
    CLIENTE: number;
    CAMPANHA: number;
    DT_RESULTADO: string;
    DT_AGENDAMENTO: string;
    RESULTADO: number;
    CONCLUIDO: 'SIM' | 'NAO';
    FONE1: string;
    FONE2: string;
    FONE3: string;
    ORDEM: number;
    OPERADOR: number;
    OPERADOR_LIGACAO: number;
    DATA_HORA_LIG: string;
    TELEFONE_LIGADO: string;
    DATA_HORA_FIM: string;
    AGENDA: number;
    DESC_FONE1: string;
    DESC_FONE2: string;
    DESC_FONE3: string;
    FIDELIZA: 'S' | 'N' | null;
    MANUAL: 'S' | 'N' | null;
}