import axios from "axios";
import { ReactNode, createContext, useEffect } from "react";
import { useCustomRequest } from "../../api";
import useCustomState from "../../utils/customState.hook";
import {
	GlobalContextProps,
	GlobalProviderProps,
	LoginRequest,
	LoginResponse,
	TryToLoginProps,
	User,
} from "./interfaces";

const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

const GlobalProvider = ({ children }: GlobalProviderProps) => {
	const darkModeState = useCustomState<boolean>(false);
	const userState = useCustomState<User | null>(null);
	const modalState = useCustomState<ReactNode>(null);

	const login = ({ login, password, loadingState }: TryToLoginProps) => {
		useCustomRequest<LoginResponse, LoginRequest>({
			method: "post",
			service: "users",
			endpoint: "/auth",
			enableToast: true,
			loadingState: loadingState,
			requestData: { LOGIN: login, SENHA: password },
			onSuccess: (data) => {
				console.log(data.message);
				localStorage.setItem("@inpulse/auth-token", data.token);
				axios.defaults.headers["authorization"] = `Bearer ${data.token}`;
				userState.set(data.user);
			},
		});
	};

	const logout = () => {
		localStorage.removeItem("@inpulse/auth-token");
		userState.set(null);
	};

	useEffect(() => {
		const localDarkMode = window.localStorage.getItem("@inpulse/dark-mode");
		darkModeState.set(Boolean(Number(localDarkMode)));

		const localToken = localStorage.getItem("@inpulse/auth-token");

		if (localToken) {
			useCustomRequest<{ message: string; user: User }, object>({
				method: "get",
				service: "users",
				endpoint: "/auth",
				onSuccess: (data) => {
					console.log(data.message);
					userState.set(data.user);
				},
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				darkModeState,
				userState,
				modalState,
				login,
				logout,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export { GlobalContext, GlobalProvider };
