import { useContext, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useCustomRequest } from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import { User } from "../../interfaces/User.type";
import useCustomState from "../../utils/customState.hook";
import SwitchSectionButton from "../CustomerForm/SwitchSectionButton";
import StyledCustomerForm from "../CustomerForm/styles";
import OperatorData from "./OperatorData";
import { OperatorContext } from "./context";

type OperatorFormProps = {
	mode: "edit" | "create";
};

const OperatorForm = ({ mode }: OperatorFormProps) => {
	// React Hooks
	const navigate = useNavigate();
	const params = useParams();
	const { formSections, renderingSectionState, operatorDataState } = useContext(OperatorContext);

	// Conditional Rendering
	const isCreateMode = mode === "create";
	const headerText = isCreateMode ? "Cadastro de Operador" : "Edição de Operador";
	const buttonText = isCreateMode ? "Cadastrar" : "Salvar Alterações";
	const renderingFormSection = formSections.find((fs) => fs.id === renderingSectionState.value);

	// Custom States
	const loadingState = useCustomState<boolean>(false);

	// Elements Callbacks
	const onClickBack = () => navigate(-1);

	// Load Operator (when edit mode)
	useEffect(() => {
		if (!isCreateMode) {
			const operatorId = params.operatorId;

			// Carrega cliente
			useCustomRequest<User, never>({
				method: "get",
				service: "users",
				endpoint: `/users/${operatorId}`,
				onSuccess: (data) => operatorDataState.set(data),
				loadingState: loadingState,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isCreateMode]);

	return (
		<StyledCustomerForm>
			<header>
				<button title="voltar" type="button" onClick={onClickBack}>
					<FaArrowLeftLong />
				</button>
				<h1> {headerText} </h1>
			</header>
			{!loadingState.value ? (
				<>
					<form>
						<OperatorData />
						<nav>
							{formSections.map((s) => (
								<SwitchSectionButton
									children={s.button}
									currentMode={mode}
									displayOnMode={s.mode}
									sectionId={s.id}
									key={`form_section_${s.id}`}
									context={OperatorContext}
								/>
							))}
						</nav>
						{renderingFormSection?.component}
					</form>
					<div>
						<button className="register" type="button">
							{buttonText}
						</button>
					</div>
				</>
			) : (
				<LoadingSpinner />
			)}
		</StyledCustomerForm>
	);
};

export default OperatorForm;
