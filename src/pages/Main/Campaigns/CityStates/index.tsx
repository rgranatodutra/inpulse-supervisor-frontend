import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../api";
import { defaultInput } from "../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../components/Input";
import { CityState } from "../../../../interfaces/CityState.type";
import useCustomState from "../../../../utils/customState.hook";
import CityStateTable from "./CityStateTable";
import StyledCustomersCitysPage from "./style";

const CityStatesPage = () => {
	const newCityState = useCustomState<Partial<CityState>>({});

	function addCityState() {
		useCustomRequest<{ message: String; data: CityState }, Partial<CityState>>({
			endpoint: "/ufStates",
			method: "post",
			service: "campaigns",
			requestData: newCityState.value,
			onSuccess: () => {
				toast.success("Estado adicionado com sucesso");
			},
		});
	}

	const disabled =
		!newCityState.value.NOME?.trim() ||
		!(newCityState.value.NOME?.trim().length > 0) ||
		!newCityState.value.UF ||
		!(newCityState.value.UF.length === 2) ||
		!(newCityState.value.FUSOHORARIO || newCityState.value.FUSOHORARIO === 0) ||
		!(newCityState.value.FUSOHORARIO < 15) ||
		!(newCityState.value.FUSOHORARIO > -15);

	return (
		<StyledCustomersCitysPage>
			<h2> Campanhas {"->"} Estados </h2>
			<FormTemplate buttonText="Adicionar Estado" disabled={disabled} submitForm={addCityState}>
				<Input
					{...defaultInput}
					type="input"
					placeholder="Digite o nome do estado"
					label="Nome do estado"
					onChange={(e) => newCityState.set((prev) => ({ ...prev, NOME: e.target.value.trim() }))}
				/>
				<Input
					{...defaultInput}
					type="input"
					placeholder="Digite a sigla"
					label="Unidade federativa"
					onChange={(e) => newCityState.set((prev) => ({ ...prev, UF: e.target.value.trim() }))}
				/>
				<Input
					{...defaultInput}
					type="number"
					max={14}
					min={-14}
					placeholder="GMT -5"
					label="Fuso horário"
					onChange={(e) => newCityState.set((prev) => ({ ...prev, FUSOHORARIO: +e.target.value }))}
				/>
			</FormTemplate>
			<CityStateTable />
		</StyledCustomersCitysPage>
	);
};

export default CityStatesPage;
