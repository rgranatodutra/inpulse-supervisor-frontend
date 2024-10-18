import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput, defaultSelect100 } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import { EmailParameter } from "../../../../../interfaces/EmailParameter.type";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../../../configsStyle";

const importFields = [
	{ type: "checkbox", text: "Autenticar", field: "AUTENTICAR" },
	{ type: "checkbox", text: "Confirmação de leitura", field: "CONFIRMACAOLEITURA" },
	{ type: "checkbox", text: "SSL", field: "PROTOCOLO_SSL" },
	{ type: "checkbox", text: "TLS", field: "PROTOCOLO_TLS" },
	{ type: "number", text: "Porta para envio", field: "PORTA" },
	{ type: "select", text: "Prioridade (A, N, B)", field: "PRIORIDADE" },
	{ type: "string", text: "Host", field: "HOST" },
];

const MailConfigs = () => {
	const configInputsState = useCustomState<Partial<EmailParameter>>({});
	const mailParamsState = useCustomState<Partial<EmailParameter>>({});

	useEffect(() => {
		useCustomRequest<
			{
				message: String;
				data: EmailParameter[];
			},
			undefined
		>({
			endpoint: "/email-parameters",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				mailParamsState.set(responseData.data[0]);
				importFields.map((f) => {
					if (f.type === "checkbox") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});
			},
		});
	}, []);

	function updateParams() {
		useCustomRequest({
			endpoint: "/email-parameters/1",
			requestData: configInputsState.value,
			method: "patch",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Parametros atualizados com sucesso");
			},
		});
	}

	const options = [
		{ name: "A", value: "A" },
		{ name: "N", value: "N" },
		{ name: "B", value: "B" },
	];
	const selectedPriority = mailParamsState.value.PRIORIDADE ?? undefined;

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Configurações de SIP">
				<div className="number-inputs">
					{importFields.map((field) => {
						if (field.type === "string") {
							return (
								<div className="number-input">
									<Input
										{...defaultInput}
										type="text"
										onChange={(e) => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: e.target.value != "" ? e.target.value : null,
											}));
										}}
										label={field.text}
										placeholder={mailParamsState.value[field.field] ?? field.text}
									/>
								</div>
							);
						}
						if (field.type === "select") {
							return (
								<div className="checkbox-input">
									<Select
										{...defaultSelect100}
										options={options}
										label={field.text}
										defaultValue={selectedPriority ? { name: selectedPriority, value: selectedPriority } : undefined}
										placeholder={selectedPriority ? selectedPriority : undefined}
										onChange={(e) => {
											configInputsState.set((prev) => ({ ...prev, [field.field]: e }));
										}}
										disableInitOncChange
									/>
								</div>
							);
						}
					})}
				</div>
				<div className="inputs">
					{importFields.map((field) => {
						if (field.type === "checkbox") {
							const checked =
								configInputsState.value[field.field] === "SIM"
									? true
									: mailParamsState.value[field.field] === "SIM"
									? true
									: undefined;
							return (
								<div className="checkbox-input">
									<Input
										{...defaultInput}
										type="checkbox"
										defaultChecked={checked}
										onClick={() => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: prev[field.field] === "SIM" ? "NÃO" : "SIM",
											}));
										}}
									/>
									{field.text}
								</div>
							);
						}
					})}
				</div>
			</FormTemplate>
		</StyledParamsForm>
	);
};

export default MailConfigs;
