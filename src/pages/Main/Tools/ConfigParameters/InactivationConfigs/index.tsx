import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput, defaultSelect100 } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import { Unit } from "../../../../../interfaces/Unit.type";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../configsStyle";
import TableCard from "./TableCard";

const importFields = [
	{ type: "select", text: "Campanha", field: "UNIDADE" },
	{ type: "number", text: "Dias", field: "DIAS" },
];

type inactivationCampaignsType = {
	CODIGO?: number;
	UNIDADE?: number | null;
	DIAS?: number | null;
};

const InactivationConfigs = () => {
	const configInputsState = useCustomState<inactivationCampaignsType>({});
	const inactiveCampaignsState = useCustomState<inactivationCampaignsType[]>([]);
	const unitsState = useCustomState<Unit[]>([]);

	useEffect(() => {
		useCustomRequest<
			{
				message: String;
				data: inactivationCampaignsType[];
			},
			undefined
		>({
			endpoint: "/inactive-campaigns",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				inactiveCampaignsState.set(responseData.data);
			},
		});
		useCustomRequest<
			{
				message: String;
				data: Unit[];
			},
			undefined
		>({
			endpoint: "/units",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				unitsState.set(responseData.data);
			},
		});
	}, []);

	function updateParams() {
		if (configInputsState.value.UNIDADE) {
			useCustomRequest({
				endpoint: `/inactive-campaigns/${configInputsState.value.UNIDADE}`,
				requestData: { DIAS: configInputsState.value.DIAS },
				method: "patch",
				service: "campaigns",
				onSuccess: () => {
					toast.success("Parametros atualizados com sucesso");
				},
			});
		} else {
			toast.error("Campanha não selecionada");
		}
	}

	const options = unitsState.value.map((u) => ({
		name: u.DESCRICAO,
		value: inactiveCampaignsState.value.find((ic) => ic.UNIDADE === u.CODIGO)?.CODIGO,
	}));
	const selectedDay = configInputsState.value.UNIDADE
		? inactiveCampaignsState.value.find((ic) => configInputsState.value.UNIDADE === ic.CODIGO)?.DIAS?.toLocaleString()
		: null;

	return (
		<StyledParamsForm>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
			<FormTemplate
				buttonText="Salvar"
				disabled={true}
				submitForm={() => {}}
				noButton
				title="Configurações de SIP"
				selfPadding="0"
			>
				<div className="inputs">
					{importFields.map((field) => {
						if (field.type === "select") {
							return (
								<div className="checkbox-input">
									<Select
										{...defaultSelect100}
										options={options}
										label={field.text}
										placeholder={field.text}
										onChange={(e) => {
											configInputsState.set((prev) => ({ ...prev, UNIDADE: e }));
										}}
										disableInitOncChange
									/>
								</div>
							);
						}
					})}
					{importFields.map((field) => {
						if (field.type === "number") {
							return (
								<div className="number-input">
									<Input
										{...defaultInput}
										type="number"
										min={1}
										onChange={(e) => {
											configInputsState.set((prev) => ({
												...prev,
												[field.field]: e.target.value != "" ? +e.target.value : null,
											}));
										}}
										label={field.text}
										placeholder={selectedDay ?? field.text}
									/>
								</div>
							);
						}
					})}
				</div>
			</FormTemplate>
			<ul>
				{inactiveCampaignsState.value.map((ic) => {
					const name = unitsState.value.find((u) => u.CODIGO === ic.UNIDADE)?.DESCRICAO;
					return <TableCard inactiveDays={ic.DIAS ?? "Não encontrado"} unitName={name ?? "Não encontrado"} />;
				})}
			</ul>
		</StyledParamsForm>
	);
};

export default InactivationConfigs;
