import { UF } from "./UF.type";

export interface Schedule {
    CODIGO: number;
    ULTIMO_CONTATO: string;
    DATA_AGENDAMENTO: string;
    CODIGO_ERP: string;
    CLIENTE: string;
    CPF_CNPJ: string;
    CIDADE: string;
    UF: UF;
    CAMPANHA: string;
    SEGMENTO: string;
    DATA_RESULTADO: string;
    RESULTADO: string;
    FONE1: string;
    FONE2: string;
    FONE3: string;
    OPERADOR: string;
    OPERADOR_LIGACAO: string;
    FONE_LIGACAO: string;
    LIGACAO_INICIO: string;
    LIGACAO_FIM: string;
    ULTIMA_COMPRA: string;
    DATA_RECOMPRA: string;
}