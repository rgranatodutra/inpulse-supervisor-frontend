import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AddException from "./SaveConfig/AddException";
import StyledExceptionsPage from "./style";

const ConfigParametersPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/ferramentas/parametros") {
			navigate("main");
		}
	}, []);

	return (
		<StyledExceptionsPage>
			<div>
				<h1
					onClick={() => {
						navigate("main");
					}}
					className={location.pathname.includes("main") ? "selected" : undefined}
				>
					Configurações
				</h1>
				<h1
					onClick={() => {
						navigate("DDDS");
					}}
					className={location.pathname.includes("DDDS") ? "selected" : undefined}
				>
					Configurar DDDs
				</h1>
				<h1
					onClick={() => {
						navigate("SIP");
					}}
					className={location.pathname.includes("SIP") ? "selected" : undefined}
				>
					Configurar SIP
				</h1>

				<h1
					onClick={() => {
						navigate("agenda");
					}}
					className={location.pathname.includes("agenda") ? "selected" : undefined}
				>
					Agenda
				</h1>
				<h1
					onClick={() => {
						navigate("importacao");
					}}
					className={location.pathname.includes("importacao") ? "selected" : undefined}
				>
					Importação
				</h1>
				<h1
					onClick={() => {
						navigate("email");
					}}
					className={location.pathname.includes("email") ? "selected" : undefined}
				>
					E-Mails
				</h1>
				<h1
					onClick={() => {
						navigate("inativacao");
					}}
					className={location.pathname.includes("inativacao") ? "selected" : undefined}
				>
					Inativação
				</h1>
				<h1
					onClick={() => {
						navigate("outros");
					}}
					className={location.pathname.includes("outro") ? "selected" : undefined}
				>
					Outros
				</h1>
			</div>

			<AddException />

			<Outlet />
		</StyledExceptionsPage>
	);
};

export default ConfigParametersPage;
