import { Editor } from "primereact/editor";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput, defaultSelect } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../configsStyle";

const emailConfigFields = [
	{ type: "string", text: "Descrição do E-Mail", field: "DESCRICAO" },
	{ type: "string", text: "Assunto do E-Mail", field: "ASSUNTO" },
	{ type: "string", text: "Cópia", field: "COPIA" },
	{ type: "string", text: "Cópia oculta", field: "COPIAOCULTA" },
	{ type: "checkbox", text: "Alterar dados antes de enviar", field: "ALTERAR_DADOS_EMAIL" },
];

type emailAccountConfigsType = {
	CODIGO: number;
	DESCRICAO?: string | null;
	ASSUNTO?: string | null;
	COPIA?: string | null;
	COPIAOCULTA?: string | null;
	ALTERAR_DADOS_EMAIL?: string | null;
	TEXTO?: string | null;
};

const EmailAccountConfigs = () => {
	const configInputsState = useCustomState<Partial<emailAccountConfigsType>>({});
	const emailConfigsState = useCustomState<Partial<emailAccountConfigsType[]>>([]);
	const currentEmail = useCustomState(1);

	useEffect(() => {
		configInputsState.reset();
	}, [currentEmail.value]);

	useEffect(() => {
		useCustomRequest<
			{
				message: String;
				data: emailAccountConfigsType[];
			},
			undefined
		>({
			endpoint: "/email-configs",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				emailConfigsState.set(responseData.data);
			},
		});
	}, []);

	function updateParams() {
		if (currentEmail.value) {
			useCustomRequest({
				endpoint: `/email-configs/${currentEmail.value}`,
				requestData: configInputsState.value,
				method: "patch",
				service: "campaigns",
				onSuccess: () => {
					toast.success("Configurações de E-Mail atualizadas com sucesso");
				},
			});
		} else {
			toast.error("Selecione um E-Mail");
		}
	}

	const options = emailConfigsState.value.map((em) => ({
		name: em?.CODIGO.toLocaleString() ?? "Não cadastrado",
		value: em?.CODIGO,
	}));

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Configurações de e-mail">
				<div className="number-inputs">
					<div className="number-input">
						<Select
							{...defaultSelect}
							options={options}
							label="Selecione o E-Mail"
							placeholder={currentEmail.value.toLocaleString()}
							onChange={(e) => {
								currentEmail.set(e ?? 1);
							}}
						/>
					</div>
					{emailConfigFields.map((field) => {
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
										placeholder={emailConfigsState.value[currentEmail.value - 1]?.[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
				</div>
				<div className="inputs">
					{emailConfigFields.map((field) => {
						if (field.type === "checkbox") {
							const checked =
								configInputsState.value[field.field] === "S"
									? true
									: configInputsState.value[field.field] === "N"
									? false
									: emailConfigsState.value[currentEmail.value - 1]?.[field.field] === "S"
									? true
									: false;

							return (
								<div className="checkbox-input">
									<Input
										{...defaultInput}
										type="checkbox"
										checked={checked}
										onClick={() => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: prev[field.field] === "S" ? "N" : "S",
											}));
										}}
									/>
									{field.text}
								</div>
							);
						}
					})}
				</div>
				<div className="inputs" style={{ marginBottom: "3rem" }}>
					<Editor
						value={emailConfigsState.value[currentEmail.value - 1]?.TEXTO ?? "Não cadastrado"}
						onTextChange={(e) => {
							configInputsState.set((prev) => ({ ...prev, TEXTO: e.htmlValue }));
						}}
					/>
				</div>
			</FormTemplate>
		</StyledParamsForm>
	);
};

export default EmailAccountConfigs;
