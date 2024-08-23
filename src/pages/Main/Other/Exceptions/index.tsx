import useCustomState from "../../../../utils/customState.hook";
import AddException from "./AddException/AddException";
import ExceptionsCitiesTable from "./ExceptionsCities";
import ExceptionsClientsTable from "./ExceptionsClientsTable";
import ExceptionsSegmentsTable from "./ExceptionsSegments";
import ExceptionsStatesTable from "./ExceptionsStates";
import StyledExceptionsPage from "./style";

const ExceptionsPage = () => {
	const subMenuState = useCustomState(<ExceptionsClientsTable />);
	const subMenuSelectedState = useCustomState(["selected", undefined, undefined, undefined]);
	const formTypeState = useCustomState("customer-exceptions");

	return (
		<StyledExceptionsPage>
			<div>
				<h1
					onClick={() => {
						subMenuState.set(<ExceptionsClientsTable />);
						formTypeState.set("customer-exceptions");
						subMenuSelectedState.set(["selected", undefined, undefined, undefined]);
					}}
					className={subMenuSelectedState.value[0]}
				>
					Clientes
				</h1>
				<h1
					onClick={() => {
						subMenuState.set(<ExceptionsCitiesTable />);
						formTypeState.set("city-exceptions");
						subMenuSelectedState.set([undefined, "selected", undefined, undefined]);
					}}
					className={subMenuSelectedState.value[1]}
				>
					Cidades
				</h1>
				<h1
					onClick={() => {
						subMenuState.set(<ExceptionsStatesTable />);
						formTypeState.set("state-exceptions");
						subMenuSelectedState.set([undefined, undefined, "selected", undefined]);
					}}
					className={subMenuSelectedState.value[2]}
				>
					Estados
				</h1>

				<h1
					onClick={() => {
						subMenuState.set(<ExceptionsSegmentsTable />);
						formTypeState.set("segment-exceptions");
						subMenuSelectedState.set([undefined, undefined, undefined, "selected"]);
					}}
					className={subMenuSelectedState.value[3]}
				>
					Segmentos
				</h1>
			</div>

			<AddException type={formTypeState.value} />

			{subMenuState.value}
		</StyledExceptionsPage>
	);
};

export default ExceptionsPage;
