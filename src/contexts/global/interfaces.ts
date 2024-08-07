import { ReactNode } from "react";
import { CustomState } from "../../utils/customState.hook";

export type GlobalContextProps = {
    darkModeState: CustomState<boolean>;
    modalState: CustomState<ReactNode>;
    userState: CustomState<User | null>;
    login: (props: TryToLoginProps) => void;
    logout: () => void;
}

export type GlobalProviderProps = {
    children: ReactNode;
}

export type User = {
    readonly CODIGO: number;
    readonly ATIVO: 'SIM' | 'NAO';
    readonly NOME: string;
    readonly LOGIN: string;
    readonly EMAIl: string;
    readonly NIVEL: 'ATIVO' | 'RECEP' | 'AMBOS' | 'ADMIN';
    readonly HORARIO: number;
    readonly DATACAD: Date | null;
    readonly SETOR: number;
    readonly NOME_EXIBICAO: string | null;
    readonly CODIGO_ERP: string;
    readonly SETOR_NOME: string;
}

export type LoginResponse = {
    token: string;
    user: User;
    message: string;
}

export type LoginRequest = {
    LOGIN: string;
    SENHA: string;
}

export type TryToLoginProps = {
    login: string;
    password: string;
    loadingState: CustomState<boolean>;
}