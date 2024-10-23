import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../configsStyle";

const lastCallFields = [
	{ type: "number", text: "Últimas ligações a serem vizualizadas ", field: "QTDE_ULTIMAS_LIGACOES" },
];

const fidelizeTimesFields = [
	{ type: "time", text: "Horário matutino", field: "hora_matutino" },
	{ type: "time", text: "Horário vespertino", field: "hora_vespertino" },
	{ type: "time", text: "Horário noturno", field: "hora_noturno" },
	{ type: "text", text: "IP do servidor", field: "IP_SERVIDOR" },
];

type otherConfigsType = {
	QTDE_ULTIMAS_LIGACOES?: string | null;
	hora_matutino?: string | null;
	hora_vespertino?: string | null;
	hora_noturno?: string | null;
	IP_SERVIDOR?: string | null;
};

const OtherConfigs = () => {
	const configInputsState = useCustomState<otherConfigsType>({});
	const otherParamsState = useCustomState<Partial<otherConfigsType>>({});

	useEffect(() => {
		useCustomRequest<
			{
				message: String;
				data: otherConfigsType[];
			},
			undefined
		>({
			endpoint: "/parameterss",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				otherParamsState.set(responseData.data[0]);
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

	console.log(configInputsState.value);

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
			<FormTemplate buttonText="Salvar" disabled={true} submitForm={() => {}} noButton title="Outras configurações">
				<div className="sub-form">
					<div className="sub-title"> Configurar quantidade de últimas ligações</div>
					<div className="sub-inputs">
						{lastCallFields.map((field) => {
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
											placeholder={otherParamsState.value[field.field] ?? "Não cadastrado"}
										/>
									</div>
								);
							}
						})}
					</div>
				</div>
				<div className="sub-form">
					<div className="sub-title"> Horários de execução de fidelização de clientes</div>
					<div className="sub-inputs">
						{fidelizeTimesFields.map((field) => {
							if (field.type === "time") {
								return (
									<div className="number-input">
										<Input
											{...defaultInput}
											type="time"
											onChange={(e) => {
												configInputsState.set((prev) => ({
													...prev,
													[field.field]: `${e.target.value}:00`,
												}));
											}}
											label={field.text}
											value={configInputsState.value[field.field] ?? otherParamsState.value[field.field]}
										/>
									</div>
								);
							}
						})}
					</div>
					<div className="sub-inputs">
						{fidelizeTimesFields.map((field) => {
							if (field.type === "text") {
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
											placeholder={otherParamsState.value[field.field] ?? field.text}
										/>
									</div>
								);
							}
						})}
					</div>
				</div>
			</FormTemplate>
		</StyledParamsForm>
	);
};

export default OtherConfigs;
