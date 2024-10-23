import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../configsStyle";

const sipFields = [
	{ type: "number", text: "Servidor", field: "ASTERISK_SERVER" },
	{ type: "number", text: "Proxy (Padrão igual ao Servidor)", field: "ASTERISK_PROXY" },
	{ type: "number", text: "Porta de comunicação (Padrão 5060)", field: "ASTERISK_PORTA" },
	{ type: "checkbox", text: "Emite bip entre as ligações", field: "SIP_EMITE_BIP" },
	{ type: "checkbox", text: "Controle de volume automático", field: "SIP_VOLUME_AUTOMATICO" },
	{ type: "checkbox", text: "Ocultar botão de transferência", field: "OCULTAR_BOTAO_TRANSFERENCIA" },
	{ type: "checkbox", text: "Produtividade em linha", field: "PRODUTIVIDADE_EM_LINHA" },
];

const weonFields = [
	{ type: "number", text: "WSDL Versão 01", field: "WSDL_WEON_V1" },
	{ type: "number", text: "WSDL Versão 02", field: "WSDL_WEON_V2" },
];

type sipConfigsType = {
	SIP_EMITE_BIP?: string | null;
	CONTROLE_VOLUME_AUTOMATICO?: string | null;
	PRODUTIVIDADE_LINHA?: string | null;
	OCULTAR_BOTAO_TRANSFERENCIA?: string | null;
	SERVIDOR?: number | null;
	PROXY?: number | null;
	PORTA_COMUNICACAO?: number | null;
	WSDL_VERSAO_01?: number | null;
	WSDL_VERSAO_02?: number | null;
};

const SipConfigs = () => {
	const configInputsState = useCustomState<sipConfigsType>({});
	const sipParamsState = useCustomState<Partial<sipConfigsType>>({});

	useEffect(() => {
		useCustomRequest<
			{
				message: String;
				data: sipConfigsType[];
			},
			undefined
		>({
			endpoint: "/parameterss",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				sipParamsState.set(responseData.data[0]);
				sipFields.map((f) => {
					if (f.type === "checkbox") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});
			},
		});
	}, []);

	function updateParams() {
		useCustomRequest({
			endpoint: "/parameterss/1",
			requestData: configInputsState.value,
			method: "patch",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Parametros atualizados com sucesso");
			},
		});
	}

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Configurações de SIP">
				<div className="inputs">
					{sipFields.map((field) => {
						if (field.type === "checkbox") {
							const checked =
								configInputsState.value[field.field] === "S"
									? true
									: sipParamsState.value[field.field] === "S"
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
				<div className="number-inputs">
					{sipFields.map((field) => {
						if (field.type === "number") {
							return (
								<div className="number-input">
									<Input
										{...defaultInput}
										min={1}
										type="number"
										onChange={(e) => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: e.target.value != "" ? e.target.value : null,
											}));
										}}
										label={field.text}
										placeholder={sipParamsState.value[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
					<div className="sub-form">
						<div className="sub-title"> Configurações WeON</div>
						<div className="sub-inputs">
							{weonFields.map((field) => {
								if (field.type === "number") {
									return (
										<div className="number-input">
											<Input
												{...defaultInput}
												min={1}
												type="number"
												onChange={(e) => {
													configInputsState.set((prev) => ({
														...prev,
														[field.field]: e.target.value != "" ? e.target.value : null,
													}));
												}}
												label={field.text}
												placeholder={sipParamsState.value[field.field] ?? field.text}
											/>
										</div>
									);
								}
							})}
						</div>
					</div>
				</div>
			</FormTemplate>
		</StyledParamsForm>
	);
};

export default SipConfigs;
