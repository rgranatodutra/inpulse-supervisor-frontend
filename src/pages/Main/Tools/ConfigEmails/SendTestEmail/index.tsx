import { Editor } from "primereact/editor";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput, defaultSelect } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import { smtpexpressClient } from "../../../../../utils/smtp";
import StyledParamsForm from "../configsStyle";

const emailConfigFields = [
	{ type: "string", text: "Assunto do E-Mail", field: "ASSUNTO" },
	{ type: "string", text: "Cópia", field: "COPIA" },
	{ type: "string", text: "Cópia oculta", field: "COPIAOCULTA" },
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

const SendTestEmail = () => {
	const configInputsState = useCustomState<Partial<emailAccountConfigsType>>({});
	const emailConfigsState = useCustomState<Partial<emailAccountConfigsType[]>>([]);
	const currentEmail = useCustomState(1);
	const readOnly = useCustomState(false);
	const reloadForm = useCustomState(true);

	useEffect(() => {
		const newValue = emailConfigsState.value[currentEmail.value - 1];
		if (newValue != undefined) {
			configInputsState.set(newValue);
		}
	}, [currentEmail.value]);

	useEffect(() => {
		if (emailConfigsState.value[currentEmail.value - 1]?.ALTERAR_DADOS_EMAIL === "S") {
			readOnly.set(false);
			reloadForm.set(true);
			setTimeout(() => {
				reloadForm.set(false);
			}, 50);
		} else {
			readOnly.set(true);
			reloadForm.set(true);
			setTimeout(() => {
				reloadForm.set(false);
			}, 50);
		}
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
				configInputsState.set(responseData.data[0]);
			},
		});
	}, []);

	async function sendEmail() {
		try {
			// Sending an email using SMTP
			await smtpexpressClient.sendApi.sendMail({
				// Subject of the email
				subject: configInputsState.value.ASSUNTO ?? "Houve um erro na mensagem automatica",
				// Body of the email
				message: configInputsState.value.TEXTO ?? "Houve um erro na mensagem automatica",
				// Sender's details
				sender: {
					// Sender's name
					name: "SMTP Article by DevYoma",
					// Sender's email address
					email: "inpulse-sgr-a14b31@smtpexpress.email",
				},
				// Recipient's details
				recipients: {
					email: "giovannioliveira1020@gmail.com",
				},
			});
			toast("E-Mail Enviado com sucesso");
		} catch (error) {
			toast("Ouve um erro, tente novamente mais tarde ou contate o suporte técnico");
			console.log(error);
		}
	}

	const options = emailConfigsState.value.map((em) => ({
		name: em?.CODIGO.toLocaleString() ?? "Não cadastrado",
		value: em?.CODIGO,
	}));

	console.log(emailConfigsState.value[currentEmail.value - 1]?.ALTERAR_DADOS_EMAIL === "S" ? false : true);

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={sendEmail}> Enviar </ButtonType2>
			</div>
			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Enviar E-Mail de Teste">
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

				<div className="inputs" style={{ marginBottom: "3rem" }}>
					{reloadForm.value ? (
						<FaSpinner />
					) : (
						<Editor
							value={emailConfigsState.value[currentEmail.value - 1]?.TEXTO ?? "Não cadastrado"}
							onTextChange={(e) => {
								configInputsState.set((prev) => ({ ...prev, TEXTO: e.htmlValue }));
							}}
							readOnly={readOnly.value}
						/>
					)}
				</div>
			</FormTemplate>
		</StyledParamsForm>
	);
};

export default SendTestEmail;
