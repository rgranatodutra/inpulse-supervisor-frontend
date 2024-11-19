import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StyledExceptionsPage from "./style";

const ConfigEmailsPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/ferramentas/emails") {
			navigate("emailConfigs");
		}
	}, []);

	return (
		<StyledExceptionsPage>
			<div className="top-menu">
				<h1
					onClick={() => {
						navigate("emailConfigs");
					}}
					className={location.pathname.includes("emailConfigs") ? "selected" : undefined}
				>
					Configurar E-Mails
				</h1>
				<h1
					onClick={() => {
						navigate("testEmail");
					}}
					className={location.pathname.includes("testEmail") ? "selected" : undefined}
				>
					Enviar E-Mail Teste
				</h1>
			</div>

			<Outlet />
		</StyledExceptionsPage>
	);
};

export default ConfigEmailsPage;
