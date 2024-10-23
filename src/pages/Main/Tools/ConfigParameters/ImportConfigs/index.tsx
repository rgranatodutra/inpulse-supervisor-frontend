import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput, defaultSelect100 } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import { User } from "../../../../../contexts/global/interfaces";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "../configsStyle";

const importFields = [
	{ type: "string", text: "Campos importação clientes", field: "CAMPOS_IMPORTACAO_CLIENTES" },
	{ type: "string", text: "Campos importação compras", field: "CAMPOS_IMPORTACAO_COMPRAS" },
	{ type: "string", text: "Campos importação régua", field: "CAMPOS_IMPORTACAO_REGUA" },
	{ type: "select", text: "Operador qualificador", field: "OPERADOR_QUALIFICADOR" },
];

type importParamsType = {
	CAMPOS_IMPORTACAO_CLIENTES?: string | null;
	CAMPOS_IMPORTACAO_COMPRAS?: string | null;
	CAMPOS_IMPORTACAO_REGUA?: string | null;
	OPERADOR_QUALIFICADOR?: number | null;
};

const ImportConfigs = () => {
	const configInputsState = useCustomState<importParamsType>({});
	const paramsState = useCustomState<importParamsType>({});
	const usersState = useCustomState<User[]>([]);

	useEffect(() => {
		useCustomRequest<{ message: String; data: User[] }, undefined>({
			endpoint: "/users?perPage=9999",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				usersState.set(responseData.data);
			},
		});
		useCustomRequest<
			{
				message: String;
				data: importParamsType[];
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

	const options = usersState.value.map((u) => ({ name: u.NOME, value: u.CODIGO }));
	const selectedUser = paramsState.value.OPERADOR_QUALIFICADOR
		? usersState.value.find((u) => u.CODIGO === paramsState.value.OPERADOR_QUALIFICADOR)
		: undefined;

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
										placeholder={paramsState.value[field.field] ?? field.text}
									/>
								</div>
							);
						}
					})}
				</div>
				<div className="inputs">
					{importFields.map((field) => {
						if (field.type === "select") {
							return (
								<div className="checkbox-input">
									<Select
										{...defaultSelect100}
										options={options}
										label={field.text}
										defaultValue={
											selectedUser?.NOME ? { name: selectedUser.NOME, value: selectedUser.CODIGO } : undefined
										}
										placeholder={selectedUser?.NOME ? selectedUser.NOME : undefined}
										onChange={(e) => {
											configInputsState.set((prev) => ({ ...prev, OPERADOR_QUALIFICADOR: e }));
										}}
										disableInitOncChange
									/>
								</div>
							);
						}
					})}
				</div>
			</FormTemplate>
		</StyledParamsForm>
	);
};

export default ImportConfigs;
