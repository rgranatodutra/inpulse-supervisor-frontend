export type Contact = {
    CODIGO?: number | string;
    NOME: string;
    CARGO?: number | null;
    EMAIL?: string | null;
    AREA_DIRETO?: string | null;
    AREA_CEL?: string | null;
    AREA_RESI?: string | null;
    FONE_DIRETO?: string | null;
    CELULAR?: string | null;
    FONE_RESIDENCIAL?: string | null;
    ANIVERSARIO?: string | null;
    TIME_FUTEBOL?: string | null;
    SEXO?: 'M' | 'F' | null;
    FILHOS?: number | null;
    CLIENTE?: number | null;
    TRATAMENTO?: string | null;
}