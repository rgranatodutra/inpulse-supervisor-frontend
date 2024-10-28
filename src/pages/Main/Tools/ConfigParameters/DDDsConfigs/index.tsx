import { useContext, useEffect } from "react";
import { FaTag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { ButtonType2, ButtonType3 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../configsStyle";
import AlteratedDDDModal from "./alteratedDDDModal";

const importFields = [
	{ type: "number", text: "DDD local", field: "DDD_LOCAL" },
	{ type: "number", text: "Operadora local", field: "OPERADORA_LOCAL" },
];

const cityDDDsColumns: Array<TableColumn<cityDDD>> = [
	{
		key: "CODIGO",
		header: "Código",
		width: 7,
		primarykey: true,
		alignContent: "start",
		filter: {
			type: "input",
			width: "20rem",
			icon: <FaTag />,
		},
	},
	{
		key: "CIDADE",
		header: "Cidade",
		width: 24,
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "DDD",
		header: "DDD",
		width: 8,
		filter: {
			type: "input",
			width: "20rem",
		},
	},
	{
		key: "USAR",
		header: "Usa DDD",
		width: 8,
		format: (r) => {
			return r.USAR === "SIM" ? "Sim" : "Não";
		},
		filter: {
			type: "input",
			width: "20rem",
		},
	},
];

type DDDsParamsType = {
	DDD_LOCAL?: number | null;
	OPERADORA_LOCAL?: number | null;
};

type cityDDD = {
	CODIGO: number;
	CIDADE?: string;
	DDD?: string;
	USAR?: string;
};

const DDDsConfigs = () => {
	const configInputsState = useCustomState<DDDsParamsType>({});
	const paramsState = useCustomState<DDDsParamsType>({});
	const cityDDDsState = useCustomState<cityDDD[]>([]);
	const { modalState } = useContext(GlobalContext);

	useEffect(() => {
		useCustomRequest<
			{
				message: String;
				data: DDDsParamsType[];
			},
			undefined
		>({
			endpoint: "/parameterss",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				paramsState.set(responseData.data[0]);
			},
		});
		useCustomRequest<
			{
				message: String;
				data: cityDDD[];
			},
			undefined
		>({
			endpoint: "/cityDDDs?perPage=9999",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				cityDDDsState.set(responseData.data);
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

	const placeholderFields = {
		DDD_LOCAL: paramsState.value.DDD_LOCAL,
		OPERADORA_LOCAL: paramsState.value.OPERADORA_LOCAL,
	};

	return (
		<StyledParamsForm>
			<FormTemplate
				buttonText="Salvar"
				disabled={true}
				submitForm={() => {}}
				noButton
				title="Configurações de telefonia"
				selfPadding="0"
			>
				<div className="inputs">
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
										placeholder={placeholderFields[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
				</div>
			</FormTemplate>
			<Table<cityDDD>
				className="display-table"
				$tableHeight="100%"
				$tableWidth="100%"
				$fontSize={0.75}
				columns={cityDDDsColumns}
				actions={(row) => [
					<ButtonType3
						onClick={() => {
							modalState.set(<AlteratedDDDModal cityDDD={row} />);
						}}
					>
						Alterar
					</ButtonType3>,
				]}
				tableName="Excessões de cliente"
				$modalFiltersWidth={41}
				requestEndpoint="/cityDDDs"
				service="campaigns"
			/>
			<div className="save-button">
				<ButtonType2 onClick={updateParams}> Salvar </ButtonType2>
			</div>
		</StyledParamsForm>
	);
};

export default DDDsConfigs;
