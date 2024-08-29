import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useCustomState from "../../../../utils/customState.hook";
import AddException from "./AddException/AddException";
import StyledExceptionsPage from "./style";

const ExceptionsPage = () => {
	const formTypeState = useCustomState("customer-exceptions");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/campanhas/excecoes") {
			navigate("clientes");
		}

		if (location.pathname === "/campanhas/excecoes/estados") {
			formTypeState.set("state-exceptions");
		}

		if (location.pathname === "/campanhas/excecoes/cidades") {
			formTypeState.set("city-exceptions");
		}

		if (location.pathname === "/campanhas/excecoes/segmentos") {
			formTypeState.set("segment-exceptions");
		}
	}, []);

	return (
		<StyledExceptionsPage>
			<div>
				<h1
					onClick={() => {
						navigate("clientes");
						formTypeState.set("customer-exceptions");
					}}
					className={location.pathname.includes("clientes") ? "selected" : undefined}
				>
					Clientes
				</h1>
				<h1
					onClick={() => {
						navigate("cidades");
						formTypeState.set("city-exceptions");
					}}
					className={location.pathname.includes("cidades") ? "selected" : undefined}
				>
					Cidades
				</h1>
				<h1
					onClick={() => {
						navigate("estados");
						formTypeState.set("state-exceptions");
					}}
					className={location.pathname.includes("estados") ? "selected" : undefined}
				>
					Estados
				</h1>

				<h1
					onClick={() => {
						navigate("segmentos");
						formTypeState.set("segment-exceptions");
					}}
					className={location.pathname.includes("segmentos") ? "selected" : undefined}
				>
					Segmentos
				</h1>
			</div>

			<AddException type={formTypeState.value} />

			<Outlet />
		</StyledExceptionsPage>
	);
};

export default ExceptionsPage;
