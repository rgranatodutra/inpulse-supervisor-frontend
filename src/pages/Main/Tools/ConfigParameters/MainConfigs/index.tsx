import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../../../configsStyle";

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

const MainParameterConfigs = () => {
	const configInputsState = useCustomState<{
		AGENDA_PRIORIDADE_SUPERVISOR?: boolean | null;
		AGENDA_SABADO?: boolean | null;
		ALTERAR_RAZAO_SOCIAL?: boolean | null;
		AVISO_RECOMPRA_OPERADOR?: boolean | null;
		AVISO_RECOMPRA_SUPERVISOR?: boolean | null;
		BAIRRO?: boolean | null;
		BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA?: boolean | null;
		BLOQUEAR_GRUPO?: boolean | null;
		BLOQUEAR_MIDIA?: boolean | null;
		BLOQUEAR_ORIGEM?: boolean | null;
		CARGO_CONTATO?: boolean | null;
		CEP?: boolean | null;
		CIDADE?: boolean | null;
		CNPJ?: boolean | null;
		CONTATO?: boolean | null;
		DESLIGA_COMPUTADOR?: boolean | null;
		EMAIL?: boolean | null;
		EMAIL_CONTATO?: boolean | null;
		ENDERECO?: boolean | null;
		ESTADO?: boolean | null;
		EXIBE_ALERTA_ATUALIZACAO_CLIENTES?: boolean | null;
		EXIBIR_ALERTA_API_CEP?: boolean | null;
		EXIBIR_FASE_CONTATO?: boolean | null;
		EXIBIR_PEDIDOS_FECHADOS?: boolean | null;
		EXIBIR_PRODUTIVIDADE?: boolean | null;
		EXPIRAR_TRANSFERENCIA_CLIENTES?: boolean | null;
		EXIGIR_FASE_CONTATO?: boolean | null;
		FANTASIA?: boolean | null;
		GRAVAR_LIGACAO?: boolean | null;
		GRAVARLOG?: boolean | null;
		HABILITAR_CADASTRO_MARCAS?: boolean | null;
		HABILITAR_SUSPENDER_SISTEMA?: boolean | null;
		IMP_OPERADOR?: boolean | null;
		INCLUI_CLIENTE_CAMP_PRINC_IMP?: boolean | null;
		MOSTRAR_REPRESENTANTE_LIG?: boolean | null;
		OCULTAR_ALTA_PRIORIDADE?: boolean | null;
		OCULTAR_OPERADORES_CHAT?: boolean | null;
		OPERADOR_QUALIFICADOR?: boolean | null;
		PESQUISAR_CLIENTES_NO_ATIVO?: boolean | null;
		PERMITIR_USO_API_CEP?: boolean | null;
		RAZAO?: boolean | null;
		SOBREPOR_CHAT?: boolean | null;
		UTILIZA_REGUA?: boolean | null;
		UTILIZAR_QTDCLIENTEBASE?: boolean | null;
		VALIDA_CPF_CNPJ?: boolean | null;
		PAUSARRAMAL?: boolean | null;
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

	const gravacoesDisabled = !configInputsState.value.GRAVAR_LIGACAO;
	const expirarTransfDisabled = !configInputsState.value.EXPIRAR_TRANSFERENCIA_CLIENTES;
	const baseCliDisabled = !configInputsState.value.UTILIZAR_QTDCLIENTEBASE;
	const ramalDisabled = !configInputsState.value.PAUSARRAMAL;

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Agendamentos">
				<div className="inputs">
					{agendamentosFields.map((field) => {
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
										placeholder={field.text}
									/>
								</div>
							);
						}
					})}
					<div className="sub-form">
						<div className="sub-title"> Atendimento</div>
						<div className="sub-inputs">
							{atendimentoFields.map((field) => {
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
										placeholder={field.text}
									/>
								</div>
							);
						}
					})}
					{importacaoClientesComprasFields.map((field) => {
						if (field.type === "checkbox-number") {
							return (
								<div className="checkbox-number">
									<Input
										{...defaultInput}
										type="checkbox"
										onChange={(e) => {
											configInputsState.set((prev) => ({ ...prev, [field.field]: e.target.checked }));
										}}
									/>
									<Input
										{...defaultInput}
										min={1}
										type="number"
										disabled={expirarTransfDisabled}
										label={field.text}
										placeholder="Quantidade de dias"
										onChange={(e) => {
											configInputsState.set((prev) => ({
												...prev,
												DIAS_EXPIRAR_TRANSFERENCIA_CLIENTES: e.target.value != "" ? +e.target.value : null,
											}));
										}}
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
			</FormTemplate>

			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Aitvo">
				<div className="inputs">
					{ativoFields.map((field) => {
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
										placeholder={field.text}
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
										placeholder={field.text}
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
								return (
									<>
										<Input
											{...defaultInput}
											type="checkbox"
											onChange={(e) => {
												configInputsState.set((prev) => ({ ...prev, [field.field]: e.target.checked }));
											}}
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
										placeholder={field.text}
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
									onChange={(e) => {
										configInputsState.set((prev) => ({ ...prev, UTILIZAR_QTDCLIENTEBASE: e.target.checked }));
									}}
								/>
								<Input
									{...defaultInput}
									min={1}
									type="number"
									disabled={baseCliDisabled}
									label="Quantidade de clientes base"
									placeholder="Quantidade base"
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
										placeholder="Fila"
										onChange={(e) => {
											configInputsState.set((prev) => ({
												...prev,
												FILA: e.target.value.trim() != "" ? e.target.value.trim() : null,
											}));
										}}
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
									onChange={(e) => {
										configInputsState.set((prev) => ({ ...prev, GRAVARLOG: e.target.checked }));
									}}
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
									placeholder="Versão"
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
										configInputsState.set((prev) => ({ ...prev, PAUSARRAMAL: e.target.checked }));
									}}
								/>
								<Input
									{...defaultInput}
									min={1}
									type="number"
									label="Ramal pausa"
									placeholder="Minutos para pausa"
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
									placeholder="Minutos para despausa"
									disabled={ramalDisabled}
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
									onChange={(e) => {
										configInputsState.set((prev) => ({ ...prev, OCULTAR_OPERADORES_CHAT: e.target.checked }));
									}}
								/>
								Ocultar operadores chat
							</div>
							<div className="checkbox-input">
								<Input
									{...defaultInput}
									type="checkbox"
									onChange={(e) => {
										configInputsState.set((prev) => ({ ...prev, SOBREPOR_CHAT: e.target.checked }));
									}}
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
								onChange={(e) => {
									configInputsState.set((prev) => ({ ...prev, AVISO_RECOMPRA_SUPERVISOR: e.target.checked }));
								}}
							/>
							Avisar supervisor
						</div>
						<div className="checkbox-input">
							<Input
								{...defaultInput}
								type="checkbox"
								onChange={(e) => {
									configInputsState.set((prev) => ({ ...prev, AVISO_RECOMPRA_OPERADOR: e.target.checked }));
								}}
							/>
							Avisar operador
						</div>
						<div className="checkbox-input">
							<Input
								{...defaultInput}
								type="checkbox"
								onChange={(e) => {
									configInputsState.set((prev) => ({
										...prev,
										BLOQUEAR_AGENDAMENTO_FORA_PERIODO_RECOMPRA: e.target.checked,
									}));
								}}
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
