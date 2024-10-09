import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import useCustomState from "../../../../../utils/customState.hook";

function AddException() {
	const newException = useCustomState({});
	const disabledState = useCustomState(true);
	const inputFields = useCustomState<number | string>("");
	const endpoint = useCustomState<string>("");

	const location = useLocation();

	function addException() {
		useCustomRequest({
			endpoint: `/${endpoint.value}`,
			method: "post",
			service: "campaigns",
			requestData: newException.value,
			onSuccess: () => {
				toast.success("Excessão adicionada");
				resetInputs();
			},
		});
	}

	function resetInputs() {
		inputFields.reset();
		newException.reset();
		disabledState.reset();
	}

	useEffect(() => {
		resetInputs();
	}, [location.pathname]);

	if (location.pathname === "customer-exceptions") {
		return (
			<FormTemplate
				buttonText="Adicionar excessão"
				disabled={disabledState.value}
				submitForm={addException}
				title="Adicionar excessão de cliente"
				widthRem="30rem"
			>
				<Input
					{...defaultInput}
					label="Código ERP"
					placeholder="Digite o código ERP"
					type="number"
					min={0}
					value={inputFields.value}
					onChange={(e) => {
						inputFields.set(+e.target.value);
						newException.set({ COD_ERP: +e.target.value });
						disabledState.set(!(+e.target.value > 0));
					}}
				/>
			</FormTemplate>
		);
	} else if (location.pathname === "city-exceptions") {
		return (
			<FormTemplate
				buttonText="Adicionar excessão"
				disabled={disabledState.value}
				submitForm={addException}
				title="Adicionar excessão de cidade"
				widthRem="30rem"
			>
				<Input
					{...defaultInput}
					label="Cidade"
					placeholder="Digite a cidade"
					value={inputFields.value}
					type="input"
					min={0}
					onChange={(e) => {
						inputFields.set(e.target.value);
						newException.set({ CIDADE: e.target.value.trim() });
						disabledState.set(!(e.target.value.trim().length > 0));
					}}
				/>
			</FormTemplate>
		);
	} else if (location.pathname.includes("agenda")) {
		return (
			<FormTemplate
				buttonText="Adicionar excessão"
				disabled={disabledState.value}
				submitForm={addException}
				title="Adicionar excessão de estado"
				widthRem="30rem"
			>
				<Input
					{...defaultInput}
					label="Estado"
					placeholder="Digite o estado"
					type="input"
					min={0}
					value={inputFields.value}
					onChange={(e) => {
						inputFields.set(e.target.value);
						newException.set({ ESTADO: e.target.value.trim() });
						disabledState.set(!(e.target.value.trim().length > 0));
					}}
				/>
			</FormTemplate>
		);
	} else if (location.pathname === "segment-exceptions") {
		return (
			<FormTemplate
				buttonText="Adicionar excessão"
				disabled={disabledState.value}
				submitForm={addException}
				title="Adicionar excessão de segmento"
				widthRem="30rem"
			>
				<Input
					{...defaultInput}
					label="Segmento"
					placeholder="Digite o segmento"
					type="number"
					value={inputFields.value}
					min={0}
					onChange={(e) => {
						inputFields.set(+e.target.value);
						newException.set({ SEGMENTO: +e.target.value });
						disabledState.set(!(+e.target.value > 0));
					}}
				/>
			</FormTemplate>
		);
	}
}

export default AddException;
