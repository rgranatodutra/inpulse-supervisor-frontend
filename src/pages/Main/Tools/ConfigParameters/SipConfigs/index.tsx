import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../../../configsStyle";

const sipFields = [
	{ type: "checkbox", text: "Emite bip entre as ligações", field: "EMITE_BIP_ENTRE_LIGACOES" },
	{ type: "checkbox", text: "Controle de volume automático", field: "CONTROLE_VOLUME_AUTOMATICO" },
	{ type: "checkbox", text: "Produtividade em linha", field: "PRODUTIVIDADE_LINHA" },
	{ type: "checkbox", text: "Ocultar botão de transferência", field: "OCULTAR_BOTAO_TRANSFERENCIA" },
	{ type: "number", text: "Servidor", field: "SERVIDOR" },
	{ type: "number", text: "Proxy (Padrão igual ao Servidor)", field: "PROXY" },
	{ type: "number", text: "Porta de comunicação (Padrão 5060)", field: "PORTA_COMUNICACAO" },
];

const weonFields = [
	{ type: "number", text: "WSDL Versão 01", field: "WSDL_VERSAO_01" },
	{ type: "number", text: "WSDL Versão 02", field: "WSDL_VERSAO_02" },
];
const SipConfigs = () => {
	const configInputsState = useCustomState<{
		EMITE_BIP_ENTRE_LIGACOES?: boolean | null;
		CONTROLE_VOLUME_AUTOMATICO?: boolean | null;
		PRODUTIVIDADE_LINHA?: boolean | null;
		OCULTAR_BOTAO_TRANSFERENCIA?: boolean | null;
		SERVIDOR?: number | null;
		PROXY?: number | null;
		PORTA_COMUNICACAO?: number | null;
		WSDL_VERSAO_01?: number | null;
		WSDL_VERSAO_02?: number | null;
	}>({});

	console.log(configInputsState.value);
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
							return (
								<div className="checkbox-input">
									<Input
										{...defaultInput}
										type="checkbox"
										onChange={(e) => {
											configInputsState.set((prev) => ({ ...prev, [field.field]: e.target.checked }));
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
										placeholder={field.text}
									/>
								</div>
							);
						}
					})}
					<div className="sub-form">
						<div className="sub-title"> Configurações WeON</div>
						<div className="sub-inputs">
							{weonFields.map((field) => {
								if (field.type === "checkbox") {
									return (
										<div className="checkbox-input">
											<Input
												{...defaultInput}
												type="checkbox"
												onChange={(e) => {
													configInputsState.set((prev) => ({ ...prev, [field.field]: e.target.checked }));
												}}
											/>
											{field.text}
										</div>
									);
								} else if (field.type === "number") {
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
												placeholder={field.text}
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
