import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../api";
import { defaultInput } from "../../../../components-variants/defaultInputs";
import FormTemplate from "../../../../components/FormTemplate/FormTemplate";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { City } from "../../../../interfaces/City.type";
import useCustomState from "../../../../utils/customState.hook";
import CityTable from "./CityTable";
import StyledCustomersCitysPage from "./style";

const selectOptions = [
	{ name: "AC", value: "AC" },
	{ name: "AL", value: "AL" },
	{ name: "AM", value: "AM" },
	{ name: "AP", value: "AP" },
	{ name: "BA", value: "BA" },
	{ name: "CE", value: "CE" },
	{ name: "DF", value: "DF" },
	{ name: "ES", value: "ES" },
	{ name: "GO", value: "GO" },
	{ name: "MA", value: "MA" },
	{ name: "MG", value: "MG" },
	{ name: "MS", value: "MS" },
	{ name: "MT", value: "MT" },
	{ name: "PA", value: "PA" },
	{ name: "PB", value: "PB" },
	{ name: "PE", value: "PE" },
	{ name: "PI", value: "PI" },
	{ name: "PR", value: "PR" },
	{ name: "RJ", value: "RJ" },
	{ name: "RN", value: "RN" },
	{ name: "RO", value: "RO" },
	{ name: "RR", value: "RR" },
	{ name: "RS", value: "RS" },
	{ name: "SC", value: "SC" },
	{ name: "SE", value: "SE" },
	{ name: "SP", value: "SP" },
	{ name: "TO", value: "TO" },
];

const OtherCitiesPage = () => {
	const newCity = useCustomState<Partial<City>>({});

	function addCity() {
		useCustomRequest<{ message: String; data: City }, Partial<City>>({
			endpoint: "/cities",
			method: "post",
			service: "campaigns",
			requestData: newCity.value,
			onSuccess: () => {
				toast.success("Cidade adicionada com sucesso");
			},
		});
	}

	const disabled =
		!newCity.value.NOME?.trim() ||
		!(newCity.value.NOME?.trim().length > 0) ||
		!newCity.value.UF ||
		!(newCity.value.UF.length === 2);

	return (
		<StyledCustomersCitysPage>
			<h2> Campanhas {"->"} Cidades </h2>
			<FormTemplate buttonText="Adicionar Cidade" disabled={disabled} submitForm={addCity}>
				<Input
					{...defaultInput}
					type="input"
					placeholder="Digite o nome da cidade"
					label="Nome da cidade"
					onChange={(e) => newCity.set((prev) => ({ ...prev, NOME: e.target.value.trim() }))}
				/>
				<Select
					{...defaultInput}
					options={selectOptions}
					label="Seleciona a UF"
					placeholder="UF"
					$width="7.5rem"
					onChange={(e) => newCity.set((prev) => ({ ...prev, UF: e ?? undefined }))}
				/>
			</FormTemplate>
			<CityTable />
		</StyledCustomersCitysPage>
	);
};

export default OtherCitiesPage;
