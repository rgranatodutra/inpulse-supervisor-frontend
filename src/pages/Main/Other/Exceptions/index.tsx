import { Outlet, useNavigate } from "react-router-dom";
import useCustomState from "../../../../utils/customState.hook";
import AddException from "./AddException/AddException";
import StyledExceptionsPage from "./style";

const ExceptionsPage = () => {
	const subMenuSelectedState = useCustomState(["selected", undefined, undefined, undefined]);
	const formTypeState = useCustomState("customer-exceptions");
	const navigate = useNavigate();

	return (
		<StyledExceptionsPage>
			<div>
				<h1
					onClick={() => {
						navigate("clientes");
						formTypeState.set("customer-exceptions");
						subMenuSelectedState.set(["selected", undefined, undefined, undefined]);
					}}
					className={subMenuSelectedState.value[0]}
				>
					Clientes
				</h1>
				<h1
					onClick={() => {
						navigate("cidades");
						formTypeState.set("city-exceptions");
						subMenuSelectedState.set([undefined, "selected", undefined, undefined]);
					}}
					className={subMenuSelectedState.value[1]}
				>
					Cidades
				</h1>
				<h1
					onClick={() => {
						navigate("estados");
						formTypeState.set("state-exceptions");
						subMenuSelectedState.set([undefined, undefined, "selected", undefined]);
					}}
					className={subMenuSelectedState.value[2]}
				>
					Estados
				</h1>

				<h1
					onClick={() => {
						navigate("segmentos");
						formTypeState.set("segment-exceptions");
						subMenuSelectedState.set([undefined, undefined, undefined, "selected"]);
					}}
					className={subMenuSelectedState.value[3]}
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
