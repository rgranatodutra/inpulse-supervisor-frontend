import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../configsStyle";

const agendamentosFields = [
	{ type: "checkbox", text: "Agenda no sábado", field: "AGENDA_SABADO" },
	{ type: "checkbox", text: "Agenda no domingo", field: "AGENDA_DOMINGO" },
	{ type: "checkbox", text: "Agenda no feriado", field: "AGENDA_FERIADO" },
	{ type: "checkbox", text: "Utiliza fuso horário", field: "FUSO_HORARIO" },
	{ type: "checkbox", text: "Valida agendamentos simultâneos", field: "VALIDA_AGENDAMENTOS" },
	{ type: "checkbox", text: "Agendamento para o supervisor/backoffice", field: "AGENDAMENTO_SUPERVISOR" },
	{ type: "checkbox", text: "Carteira fixa para operador", field: "CARTEIRA_FIXA_OPERADOR" },
	{ type: "checkbox", text: "Bloquear limite de agendamento diário", field: "BLOQ_LIMITE_AGENDAMENTO_DIA" },
	{ type: "checkbox", text: "Agendar no receptivo", field: "AGENDAR_NO_RECEPTIVO" },
	{ type: "checkbox", text: "Exibir todos agendamentos", field: "EXIBIR_TODOS_AGENDAMENTOS" },
	{ type: "number", text: "Limite agendamento diário", field: "LIMITE_AGENDAMENTO_DIA" },
	{ type: "number", text: "Dias agendamento máximo", field: "DIAS_LIMITE_AGENDAMENTO" },
	{ type: "number", text: "Dias validar período recompra", field: "DIAS_VALIDAR_PERIODO_RECOMPRA" },
];

const importacaoClientesComprasFields = [
	{ type: "checkbox", text: "Valida CPF CNPJ", field: "VALIDA_CPF_CNPJ" },
	{ type: "checkbox", text: "Valida Código ERP", field: "CODIGO_ERP" },
	{ type: "checkbox", text: "Inclui cliente na campanha principal", field: "INCLUI_CLIENTE_CAMP_PRINC_IMP" },
	{ type: "checkbox", text: "Desligar computador após atualização", field: "DESLIGA_COMPUTADOR" },
	{ type: "checkbox", text: "Importa operador compra", field: "IMP_OPERADOR" },
	{ type: "checkbox", text: "Exibe alerta atualização", field: "EXIBE_ALERTA_ATUALIZACAO_CLIENTES" },
	{ type: "checkbox", text: "Utiliza régua", field: "UTILIZA_REGUA" },
	{ type: "checkbox", text: "Criar agendamento por orçamento", field: "AG_CLIENTES_ORCAMENTO" },
	{ type: "checkbox", text: "Criar agendamento por venda", field: "AG_CLIENTES_VENDA" },
	{ type: "number", text: "Dias expiração transferência", field: "DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES" },
	{ type: "number", text: "Hora atualização", field: "ATUALIZACAO_HORA" },
	{ type: "checkbox-number", text: "Expirar transferência", field: "EXPIRAR_TRANSFERENCIA_CLIENTES" },
];

const atualizarCamposFields = [
	{ type: "checkbox", text: "Razão Social", field: "RAZAO" },
	{ type: "checkbox", text: "CEP", field: "CEP" },
	{ type: "checkbox", text: "Contato", field: "CONTATO" },
	{ type: "checkbox", text: "Fantasia", field: "FANTASIA" },
	{ type: "checkbox", text: "Estado", field: "ESTADO" },
	{ type: "checkbox", text: "E-mail contato", field: "EMAIL_CONTATO" },
	{ type: "checkbox", text: "CNPJ", field: "CNPJ" },
	{ type: "checkbox", text: "Telefone", field: "TELEFONE" },
	{ type: "checkbox", text: "Cargo contato", field: "CARGO_CONTATO" },
	{ type: "checkbox", text: "Endereço", field: "ENDERECO" },
	{ type: "checkbox", text: "E-mail", field: "EMAIL" },
	{ type: "checkbox", text: "Telefone contato", field: "TEL_CONTATO" },
	{ type: "checkbox", text: "Bairro", field: "BAIRRO" },
	{ type: "checkbox", text: "Unidade", field: "UNIDADE" },
	{ type: "checkbox", text: "Saldo", field: "SALDO" },
	{ type: "checkbox", text: "Cidade", field: "CIDADE" },
	{ type: "checkbox", text: "Segmento", field: "SEGMENTO" },
	{ type: "checkbox", text: "Potencial", field: "POTENCIAL" },
	{ type: "checkbox", text: "Operador", field: "OPERADOR_QUALIFICADOR" },
];

const ativoFields = [
	{ type: "checkbox", text: "Pesquisar Clientes", field: "PESQUISAR_CLIENTES_NO_ATIVO" },
	{ type: "checkbox", text: "Exibir Produtividade", field: "EXIBIR_PRODUTIVIDADE" },
	{ type: "checkbox", text: "Exibir pedidos fechados", field: "EXIBIR_PEDIDOS_FECHADOS" },
	{ type: "checkbox", text: "Exibir fase contato", field: "EXIBIR_FASE_CONTATO" },
	{ type: "checkbox", text: "Exigir fase contato", field: "EXIGIR_FASE_CONTATO" },
	{ type: "checkbox", text: "Alterar razão social", field: "ALTERAR_RAZAO_SOCIAL" },
	{ type: "checkbox", text: "Mostrar representante da lig.", field: "MOSTRAR_REPRESENTANTE_LIG" },
	{ type: "checkbox", text: "Habilitar suspender o sistema", field: "HABILITAR_SUSPENDER_SISTEMA" },
	{ type: "checkbox", text: "Permitir uso da API CEP", field: "PERMITIR_USO_API_CEP" },
	{ type: "checkbox", text: "Exibir alerta API CEP", field: "EXIBIR_ALERTA_API_CEP" },
	{ type: "checkbox", text: "Ocultar alta prioridade", field: "OCULTAR_ALTA_PRIORIDADE" },
	{ type: "checkbox", text: "Bloquear grupo", field: "BLOQUEAR_GRUPO" },
	{ type: "checkbox", text: "Bloquear origem", field: "BLOQUEAR_ORIGEM" },
	{ type: "checkbox", text: "Bloquear mídia", field: "BLOQUEAR_MIDIA" },
	{ type: "checkbox", text: "Agenda c/ prioridade de supervisor", field: "AGENDA_PRIORIDADE_SUPERVISOR" },
	{ type: "number", text: "Finalizar auto. após (seg.)", field: "FINALIZAR_AUTO_SEGUNDOS" },
	{ type: "number", text: "Após liberar finalizar em (seg.)", field: "LIBERAR_FINALIZAR_SEGUNDOS" },
	{ type: "number", text: "Tempo mínimo conversa (seg.)", field: "TEMPO_MINIMO_CONVERSA_SEGUNDOS" },
];

const atendimentoFields = [
	{ type: "number", text: "Tempo previsto atendimento receptivo", field: "" },
	{ type: "number", text: "Intervalo entre chamadas (seg.)", field: "INTERVALO_CHAMADAS" },
];

const clientFields = [
	{ type: "checkbox", text: "Habilitar cadastro de marcas", field: "HABILITAR_CADASTRO_MARCAS" },
	{ type: "number", text: "Número de históricos", field: "QTD_HISTORICO_CLI" },
	{ type: "number", text: "Verificar dias faltantes para clientes inativos", field: "DIAS_LIMITE_AGENDAMENTO" },
	{
		type: "number",
		text: "Quantidade de resultados sem contato para excluir",
		field: "QTDE_ULTIMAS_LIGACOES",
	},
];

const gravacoesFields = [
	{ type: "checkbox", text: "Habilitar gravação de ligações", field: "GRAVAR_LIGACAO" },
	{ type: "number", text: "Método de gravação", field: "METODO_GRAVACAO" },
	{ type: "number", text: "Local de gravação", field: "LOCAL_GRAVACAO" },
];

type configParamsType = {
	AGENDA_PRIORIDADE_SUPERVISOR?: string | null;
	AGENDA_SABADO?: string | null;
	ALTERAR_RAZAO_SOCIAL?: string | null;
	AVISO_RECOMPRA_OPERADOR?: string | null;
	AVISO_RECOMPRA_SUPERVISOR?: string | null;
	BAIRRO?: string | null;
	BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA?: string | null;
	BLOQUEAR_GRUPO?: string | null;
	BLOQUEAR_MIDIA?: string | null;
	BLOQUEAR_ORIGEM?: string | null;
	CARGO_CONTATO?: string | null;
	CEP?: string | null;
	CIDADE?: string | null;
	CNPJ?: string | null;
	CONTATO?: string | null;
	DESLIGA_COMPUTADOR?: string | null;
	EMAIL?: string | null;
	EMAIL_CONTATO?: string | null;
	ENDERECO?: string | null;
	ESTADO?: string | null;
	EXIBE_ALERTA_ATUALIZACAO_CLIENTES?: string | null;
	EXIBIR_ALERTA_API_CEP?: string | null;
	EXIBIR_FASE_CONTATO?: string | null;
	EXIBIR_PEDIDOS_FECHADOS?: string | null;
	EXIBIR_PRODUTIVIDADE?: string | null;
	EXPIRAR_TRANSFERENCIA_CLIENTES?: string | null;
	EXIGIR_FASE_CONTATO?: string | null;
	FANTASIA?: string | null;
	GRAVAR_LIGACAO?: string | null;
	GRAVARLOG?: string | null;
	HABILITAR_CADASTRO_MARCAS?: string | null;
	HABILITAR_SUSPENDER_SISTEMA?: string | null;
	IMP_OPERADOR?: string | null;
	INCLUI_CLIENTE_CAMP_PRINC_IMP?: string | null;
	MOSTRAR_REPRESENTANTE_LIG?: string | null;
	OCULTAR_ALTA_PRIORIDADE?: string | null;
	OCULTAR_OPERADORES_CHAT?: string | null;
	OPERADOR_QUALIFICADOR?: string | null;
	PESQUISAR_CLIENTES_NO_ATIVO?: string | null;
	PERMITIR_USO_API_CEP?: string | null;
	RAZAO?: string | null;
	SOBREPOR_CHAT?: string | null;
	UTILIZA_REGUA?: string | null;
	UTILIZAR_QTDCLIENTEBASE?: string | null;
	VALIDA_CPF_CNPJ?: string | null;
	PAUSARRAMAL?: string | null;
	ATUALIZACAO_HORA?: number | null;
	DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES?: number | null;
	DIAS_LIMITE_AGENDAMENTO?: number | null;
	FINALIZAR_AUTO_SEGUNDOS?: number | null;
	INTERVALO_CHAMADAS?: number | null;
	LIBERAR_FINALIZAR_SEGUNDOS?: number | null;
	LOCAL_GRAVACAO?: number | null;
	METODO_GRAVACAO?: number | null;
	QTD_HISTORICO_CLI?: number | null;
	QTDE_ULTIMAS_LIGACOES?: number | null;
	RAMALDESPAUSA?: number | null;
	RAMALPAUSA?: number | null;
	SALDO?: number | null;
	SEGMENTO?: number | null;
	TEMPO_MINIMO_CONVERSA_SEGUNDOS?: number | null;
	TEMPO_PREVISTO_ATENDIMENTO_RECEPTIVO?: number | null;
	TELEFONE?: number | null;
	TEL_CONTATO?: number | null;
	POTENCIAL?: number | null;
	FILA?: string | null;
	UNIDADE?: string | null;
	VERSAO_SISTEMA?: string | null;
};

const MainParameterConfigs = () => {
	const configInputsState = useCustomState<configParamsType>({});
	const paramsState = useCustomState<configParamsType>({});

	useEffect(() => {
		useCustomRequest<
			{
				message: String;
				data: configParamsType[];
			},
			undefined
		>({
			endpoint: "/parameterss",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				paramsState.set(responseData.data[0]);
				agendamentosFields.map((f) => {
					if (f.type === "checkbox") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});
				importacaoClientesComprasFields.map((f) => {
					if (f.type === "checkbox" || f.type === "checkbox-number") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});
				atualizarCamposFields.map((f) => {
					if (f.type === "checkbox") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});
				ativoFields.map((f) => {
					if (f.type === "checkbox") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});
				clientFields.map((f) => {
					if (f.type === "checkbox") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});
				gravacoesFields.map((f) => {
					if (f.type === "checkbox") {
						configInputsState.set((prev) => ({ ...prev, [f.field]: responseData.data[0][f.field] }));
					}
				});

				configInputsState.set((prev) => ({
					...prev,
					PAUSARRAMAL: responseData.data[0].PAUSARRAMAL,
					FILA: responseData.data[0].FILA,
					UTILIZAR_QTDCLIENTEBASE: responseData.data[0].UTILIZAR_QTDCLIENTEBASE,
					GRAVARLOG: responseData.data[0].GRAVARLOG,
					VERSAO_SISTEMA: responseData.data[0].VERSAO_SISTEMA,
					RAMALPAUSA: responseData.data[0].RAMALPAUSA,
					RAMALDESPAUSA: responseData.data[0].RAMALDESPAUSA,
					OCULTAR_OPERADORES_CHAT: responseData.data[0].OCULTAR_OPERADORES_CHAT,
					SOBREPOR_CHAT: responseData.data[0].SOBREPOR_CHAT,
					AVISO_RECOMPRA_OPERADOR: responseData.data[0].AVISO_RECOMPRA_OPERADOR,
					AVISO_RECOMPRA_SUPERVISOR: responseData.data[0].AVISO_RECOMPRA_SUPERVISOR,
					BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA: responseData.data[0].BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA,
				}));
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

	const expirarTransfDisabled = configInputsState.value.EXPIRAR_TRANSFERENCIA_CLIENTES === "N" ? true : false;
	const baseCliDisabled = configInputsState.value.UTILIZAR_QTDCLIENTEBASE === "N" ? true : false;
	const gravacoesDisabled = configInputsState.value.GRAVAR_LIGACAO === "N" ? true : false;
	const ramalDisabled = configInputsState.value.PAUSARRAMAL === "N" ? true : false;

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Agendamentos">
				<div className="inputs">
					{agendamentosFields.map((field) => {
						if (field.type === "checkbox") {
							const checked =
								configInputsState.value[field.field] === "S"
									? true
									: paramsState.value[field.field] === "S"
									? true
									: undefined;
							return (
								<div className="checkbox-input">
									<Input
										{...defaultInput}
										type="checkbox"
										onClick={() => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: prev[field.field] === "S" ? "N" : "S",
											}));
										}}
										defaultChecked={checked}
									/>
									{field.text}
								</div>
							);
						}
					})}
				</div>
				<div className="number-inputs">
					{agendamentosFields.map((field) => {
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
										placeholder={paramsState.value[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
					<div className="sub-form">
						<div className="sub-title"> Atendimento</div>
						<div className="sub-inputs">
							{atendimentoFields.map((field) => {
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
												placeholder={paramsState.value[field.field] ?? field.text}
											/>
										</div>
									);
								}
							})}
						</div>
					</div>
				</div>
			</FormTemplate>

			<FormTemplate
				buttonText="Salvar"
				disabled={true}
				submitForm={() => {}}
				noButton
				title="Importação de clientes e compras"
			>
				<div className="inputs">
					{importacaoClientesComprasFields.map((field) => {
						if (field.type === "checkbox") {
							const checked =
								configInputsState.value[field.field] === "S"
									? true
									: paramsState.value[field.field] === "S"
									? true
									: undefined;
							return (
								<div className="checkbox-input">
									<Input
										{...defaultInput}
										type="checkbox"
										onClick={() => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: prev[field.field] === "S" ? "N" : "S",
											}));
										}}
										defaultChecked={checked}
									/>
									{field.text}
								</div>
							);
						}
					})}
				</div>
				<div className="number-inputs">
					{importacaoClientesComprasFields.map((field) => {
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
										placeholder={paramsState.value[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
					{importacaoClientesComprasFields.map((field) => {
						if (field.type === "checkbox-number") {
							const checked =
								configInputsState.value[field.field] === "S"
									? true
									: paramsState.value[field.field] === "S"
									? true
									: undefined;
							return (
								<div className="checkbox-number">
									<Input
										{...defaultInput}
										type="checkbox"
										onClick={() => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: prev[field.field] === "S" ? "N" : "S",
											}));
										}}
										defaultChecked={checked}
									/>
									<Input
										{...defaultInput}
										min={1}
										type="number"
										disabled={expirarTransfDisabled}
										label={field.text}
										onChange={(e) => {
											configInputsState.set((prev) => ({
												...prev,
												DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES: e.target.value != "" ? +e.target.value : null,
											}));
										}}
										placeholder={
											paramsState.value.DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES != null
												? paramsState.value.DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES.toString()
												: "Quantidade de dias"
										}
									/>
								</div>
							);
						}
					})}
				</div>

				<div className="sub-form">
					<div className="sub-title"> Atualizar campos</div>
					<div className="sub-inputs">
						{atualizarCamposFields.map((field) => {
							if (field.type === "checkbox") {
								const checked =
									configInputsState.value[field.field] === "S"
										? true
										: paramsState.value[field.field] === "S"
										? true
										: undefined;
								return (
									<div className="checkbox-input">
										<Input
											{...defaultInput}
											type="checkbox"
											onClick={() => {
												configInputsState.set((prev) => ({
													...prev,
													[field.field]: prev[field.field] === "S" ? "N" : "S",
												}));
											}}
											defaultChecked={checked}
										/>
										{field.text}
									</div>
								);
							}
						})}
					</div>
				</div>
			</FormTemplate>

			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Ativo">
				<div className="inputs">
					{ativoFields.map((field) => {
						if (field.type === "checkbox") {
							const checked =
								configInputsState.value[field.field] === "S"
									? true
									: paramsState.value[field.field] === "S"
									? true
									: undefined;
							return (
								<div className="checkbox-input">
									<Input
										{...defaultInput}
										type="checkbox"
										onClick={() => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: prev[field.field] === "S" ? "N" : "S",
											}));
										}}
										defaultChecked={checked}
									/>
									{field.text}
								</div>
							);
						}
					})}
				</div>
				<div className="number-inputs">
					{ativoFields.map((field) => {
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
										placeholder={paramsState.value[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
				</div>
			</FormTemplate>

			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Clientes">
				<div className="inputs">
					{clientFields.map((field) => {
						if (field.type === "checkbox") {
							const checked =
								configInputsState.value[field.field] === "S"
									? true
									: paramsState.value[field.field] === "S"
									? true
									: undefined;
							return (
								<div className="checkbox-input">
									<Input
										{...defaultInput}
										type="checkbox"
										onClick={() => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: prev[field.field] === "S" ? "N" : "S",
											}));
										}}
										defaultChecked={checked}
									/>
									{field.text}
								</div>
							);
						}
					})}
				</div>
				<div className="number-inputs">
					{clientFields.map((field) => {
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
										placeholder={paramsState.value[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
				</div>
			</FormTemplate>

			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Gravações">
				<div className="inputs">
					<div className="checkbox-number">
						{gravacoesFields.map((field) => {
							if (field.type === "checkbox") {
								const checked =
									configInputsState.value[field.field] === "S"
										? true
										: paramsState.value[field.field] === "S"
										? true
										: undefined;
								return (
									<>
										<Input
											{...defaultInput}
											type="checkbox"
											onClick={() => {
												configInputsState.set((prev) => ({
													...prev,
													[field.field]: prev[field.field] === "S" ? "N" : "S",
												}));
											}}
											defaultChecked={checked}
										/>
										{field.text}
									</>
								);
							} else if ((field.type = "number")) {
								return (
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
										disabled={gravacoesDisabled}
										placeholder={
											paramsState.value[field.field] != null ? paramsState.value[field.field].toString() : [field.text]
										}
									/>
								);
							}
						})}
					</div>
				</div>
			</FormTemplate>

			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Outros parametros">
				<div className="sub-form-line">
					<div className="sub-form halved">
						<div className="sub-title"> Quantidade de clientes</div>
						<div className="sub-inputs">
							<div className="checkbox-number">
								<Input
									{...defaultInput}
									type="checkbox"
									onClick={() => {
										configInputsState.set((prev) => ({
											...prev,
											UTILIZAR_QTDCLIENTEBASE: prev.UTILIZAR_QTDCLIENTEBASE === "S" ? "N" : "S",
										}));
									}}
									defaultChecked={
										configInputsState.value.UTILIZAR_QTDCLIENTEBASE === "S"
											? true
											: paramsState.value.UTILIZAR_QTDCLIENTEBASE === "S"
											? true
											: undefined
									}
								/>
								<Input
									{...defaultInput}
									min={1}
									type="number"
									disabled={baseCliDisabled}
									label="Quantidade de clientes base"
									/* placeholder={
										paramsState.value.DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES != null
											? paramsState.value.DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES.toString()
											: "Quantidade base"
									} */
								/>
							</div>
						</div>
					</div>
					<div className="sub-form halved">
						<div className="sub-title"> Telefonia</div>
						<div className="sub-inputs">
							<div className="number-inputs">
								<div className="number-input">
									<Input
										{...defaultInput}
										type="text"
										label="Fila"
										onChange={(e) => {
											configInputsState.set((prev) => ({
												...prev,
												FILA: e.target.value.trim() != "" ? e.target.value.trim() : null,
											}));
										}}
										placeholder={paramsState.value.FILA != null ? paramsState.value.FILA : "Fila"}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sub-form-line">
					<div className="sub-form halved">
						<div className="sub-title"> Log</div>
						<div className="sub-inputs">
							<div className="checkbox-input">
								<Input
									{...defaultInput}
									type="checkbox"
									onClick={() => {
										configInputsState.set((prev) => ({
											...prev,
											GRAVARLOG: prev.GRAVARLOG === "S" ? "N" : "S",
										}));
									}}
									defaultChecked={
										configInputsState.value.GRAVARLOG === "S"
											? true
											: paramsState.value.GRAVARLOG === "S"
											? true
											: undefined
									}
								/>
								Gravar log de clientes e agendamentos
							</div>
						</div>
					</div>
					<div className="sub-form halved">
						<div className="sub-title"> Sistema</div>
						<div className="sub-inputs">
							<div className="number-input">
								<Input
									{...defaultInput}
									type="text"
									label="Versão"
									placeholder={paramsState.value.VERSAO_SISTEMA ?? "Versão"}
									onChange={(e) => {
										configInputsState.set((prev) => ({
											...prev,
											VERSAO_SISTEMA: e.target.value.trim() != "" ? e.target.value.trim() : null,
										}));
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="sub-form-line">
					<div className="sub-form halved">
						<div className="sub-title"> Pausar ramal</div>
						<div className="sub-inputs">
							<div className="checkbox-number">
								<Input
									{...defaultInput}
									type="checkbox"
									onChange={(e) => {
										configInputsState.set((prev) => ({ ...prev, PAUSARRAMAL: e.target.checked ? "S" : "N" }));
									}}
									onClick={() => {
										configInputsState.set((prev) => ({
											...prev,
											PAUSARRAMAL: prev.PAUSARRAMAL === "S" ? "N" : "S",
										}));
									}}
									defaultChecked={
										configInputsState.value.PAUSARRAMAL === "S"
											? true
											: paramsState.value.PAUSARRAMAL === "S"
											? true
											: undefined
									}
								/>
								<Input
									{...defaultInput}
									min={1}
									type="number"
									label="Ramal pausa"
									placeholder={
										paramsState.value.RAMALPAUSA != null
											? paramsState.value.RAMALPAUSA.toString()
											: "Minutos para pausa"
									}
									disabled={ramalDisabled}
									onChange={(e) => {
										configInputsState.set((prev) => ({
											...prev,
											RAMALPAUSA: e.target.value != "" ? +e.target.value : null,
										}));
									}}
								/>
								<Input
									{...defaultInput}
									min={1}
									type="number"
									label="Ramal despausa"
									disabled={ramalDisabled}
									placeholder={
										paramsState.value.RAMALDESPAUSA != null
											? paramsState.value.RAMALDESPAUSA.toString()
											: "Minutos para despausa"
									}
									onChange={(e) => {
										configInputsState.set((prev) => ({
											...prev,
											RAMALDESPAUSA: e.target.value != "" ? +e.target.value : null,
										}));
									}}
								/>
							</div>
						</div>
					</div>
					<div className="sub-form halved">
						<div className="sub-title"> Chat</div>
						<div className="sub-inputs">
							<div className="checkbox-input">
								<Input
									{...defaultInput}
									type="checkbox"
									onClick={() => {
										configInputsState.set((prev) => ({
											...prev,
											OCULTAR_OPERADORES_CHAT: prev.OCULTAR_OPERADORES_CHAT === "S" ? "N" : "S",
										}));
									}}
									defaultChecked={
										configInputsState.value.OCULTAR_OPERADORES_CHAT === "S"
											? true
											: paramsState.value.OCULTAR_OPERADORES_CHAT === "S"
											? true
											: undefined
									}
								/>
								Ocultar operadores chat
							</div>
							<div className="checkbox-input">
								<Input
									{...defaultInput}
									type="checkbox"
									onClick={() => {
										configInputsState.set((prev) => ({
											...prev,
											SOBREPOR_CHAT: prev.SOBREPOR_CHAT === "S" ? "N" : "S",
										}));
									}}
									defaultChecked={
										configInputsState.value.SOBREPOR_CHAT === "S"
											? true
											: paramsState.value.SOBREPOR_CHAT === "S"
											? true
											: undefined
									}
								/>
								Sobrepor chat
							</div>
						</div>
					</div>
				</div>
				<div className="sub-form">
					<div className="sub-title"> Periodo de recompra</div>
					<div className="sub-inputs">
						<div className="checkbox-input">
							<Input
								{...defaultInput}
								type="checkbox"
								onClick={() => {
									configInputsState.set((prev) => ({
										...prev,
										AVISO_RECOMPRA_SUPERVISOR: prev.AVISO_RECOMPRA_SUPERVISOR === "S" ? "N" : "S",
									}));
								}}
								defaultChecked={
									configInputsState.value.AVISO_RECOMPRA_SUPERVISOR === "S"
										? true
										: paramsState.value.AVISO_RECOMPRA_SUPERVISOR === "S"
										? true
										: undefined
								}
							/>
							Avisar supervisor
						</div>
						<div className="checkbox-input">
							<Input
								{...defaultInput}
								type="checkbox"
								onClick={() => {
									configInputsState.set((prev) => ({
										...prev,
										AVISO_RECOMPRA_OPERADOR: prev.AVISO_RECOMPRA_OPERADOR === "S" ? "N" : "S",
									}));
								}}
								defaultChecked={
									configInputsState.value.AVISO_RECOMPRA_OPERADOR === "S"
										? true
										: paramsState.value.AVISO_RECOMPRA_OPERADOR === "S"
										? true
										: undefined
								}
							/>
							Avisar operador
						</div>
						<div className="checkbox-input">
							<Input
								{...defaultInput}
								type="checkbox"
								onClick={() => {
									configInputsState.set((prev) => ({
										...prev,
										BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA:
											prev.BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA === "S" ? "N" : "S",
									}));
								}}
								defaultChecked={
									configInputsState.value.BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA === "S"
										? true
										: paramsState.value.BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA === "S"
										? true
										: undefined
								}
							/>
							Bloquear agendamento
						</div>
					</div>
				</div>
			</FormTemplate>
		</StyledParamsForm>
	);
};

export default MainParameterConfigs;
