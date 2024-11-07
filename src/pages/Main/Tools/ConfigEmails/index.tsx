import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StyledExceptionsPage from "./style";

const ConfigEmailsPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/ferramentas/emails") {
			navigate("emails");
		}
	}, []);

	return (
		<StyledExceptionsPage>
			<div className="top-menu">
				<h1
					onClick={() => {
						navigate("emails");
					}}
					className={location.pathname.includes("emails") ? "selected" : undefined}
				>
					E-Mails
				</h1>
				<h1
					onClick={() => {
						navigate("teste");
					}}
					className={location.pathname.includes("teste") ? "selected" : undefined}
				>
					E-Mail Teste
				</h1>
			</div>

			<Outlet />
		</StyledExceptionsPage>
	);
};

export default ConfigEmailsPage;
