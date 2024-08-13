import { useContext, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useCustomRequest } from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Contact } from "../../interfaces/Contact.type";
import { Customer } from "../../interfaces/Customer.type";
import CustomerData from "./CustomerData";
import SwitchSectionButton from "./SwitchSectionButton";
import { CustomerContext } from "./context";
import StyledCustomerForm from "./styles";

type CustomerFormProps = {
	mode: "edit" | "create";
};

const CustomerForm = ({ mode }: CustomerFormProps) => {
	const { formSections, renderingSectionState, customerDataState, loadingState } = useContext(CustomerContext);

	const navigate = useNavigate();
	const params = useParams();
	const renderingFormSection = formSections.find((s) => s.id === renderingSectionState.value);
	const isCreateMode = mode === "create";
	const headerText = isCreateMode ? "Cadastro de Cliente" : "Edição de Cliente";
	const buttonText = isCreateMode ? "Cadastrar" : "Salvar Alterações";

	const onRegister = () => {
		const { CONTATOS, ...CLIENTE } = customerDataState.value;

		useCustomRequest<{ message: string; data?: Customer }, Partial<Customer>>({
			service: "customers",
			endpoint: "/customers",
			method: "post",
			requestData: CLIENTE,
			onSuccess: (data) => {
				console.log(data.message, data.data?.CODIGO);

				CONTATOS?.length &&
					CONTATOS.forEach((c) => {
						useCustomRequest<{ message: string; data?: Contact }, Partial<Contact>>({
							service: "customers",
							endpoint: "/contacts",
							method: "post",
							requestData: c,
							onSuccess: (data) => {
								console.log(data.message, data.data?.CODIGO);
							},
						});
					});
			},
			enableToast: true,
			loadingState: loadingState,
		});
	};

	const onSave = () => {
		const { CONTATOS, ...CLIENTE } = customerDataState.value;

		useCustomRequest<{ message: string; data?: Customer }, Partial<Customer>>({
			service: "customers",
			endpoint: `/customers/${params.customerId}`,
			method: "patch",
			requestData: CLIENTE,
			onSuccess: (data) => {
				console.log(data.message, data.data?.CODIGO);

				CONTATOS?.length &&
					CONTATOS.forEach((c) => {
						useCustomRequest<{ message: string; data?: Contact }, Partial<Contact>>({
							service: "customers",
							endpoint: `/contacts/${c.CODIGO}`,
							method: "patch",
							requestData: c,
							onSuccess: (data) => {
								console.log(data.message, data.data?.CODIGO);
							},
						});
					});
			},
			enableToast: true,
			loadingState: loadingState,
		});
	};

	const onClickBack = () => {
		navigate(-1);
	};

	const sendButtonCallback = isCreateMode ? onRegister : onSave;

	useEffect(() => {
		if (mode === "edit") {
			const customerId = params.customerId;

			// Carrega cliente
			useCustomRequest<{ data: Customer }, never>({
				method: "get",
				service: "customers",
				endpoint: `/customers/${customerId}`,
				onSuccess: (res) => customerDataState.set(res.data),
				loadingState: loadingState,
			});
		}
	}, [mode, params.customerId]);

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
						<CustomerData />
						<nav>
							{formSections.map((s) => (
								<SwitchSectionButton
									children={s.button}
									currentMode={mode}
									displayOnMode={s.mode}
									sectionId={s.id}
									key={`form_section_${s.id}`}
									context={CustomerContext}
								/>
							))}
						</nav>
						{!loadingState.value ? renderingFormSection?.component : <> </>}
					</form>
					<div>
						<button className="register" type="button" onClick={sendButtonCallback}>
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

export default CustomerForm;
