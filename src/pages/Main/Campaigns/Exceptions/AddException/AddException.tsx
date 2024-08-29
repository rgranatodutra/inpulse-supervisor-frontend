import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../../components/Input";
import useCustomState from "../../../../../utils/customState.hook";

export type AddExceptionProps = {
	type: "customer-exceptions" | "city-exceptions" | "state-exceptions" | "segment-exceptions" | string;
};

function AddException({ type }: AddExceptionProps) {
	const newException = useCustomState({});
	const disabledState = useCustomState(true);
	const inputFields = useCustomState<number | string>("");

	function addException() {
		useCustomRequest({
			endpoint: `/${type}`,
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
	}, [type]);

	if (type === "customer-exceptions") {
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
	} else if (type === "city-exceptions") {
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
	} else if (type === "state-exceptions") {
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
	} else if (type === "segment-exceptions") {
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
