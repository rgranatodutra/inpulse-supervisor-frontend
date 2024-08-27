import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import Select from "../../../../../components/Select";
import { GlobalContext } from "../../../../../contexts/global";
import { City } from "../../../../../interfaces/City.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledRoleModal from "./style";

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

interface EditCityModalProps {
	city: City;
	update: (data: City) => void;
}

function EditCityModal({ city, update }: EditCityModalProps) {
	const { modalState } = useContext(GlobalContext);
	const EditedCityState = useCustomState<Partial<City>>(city);

	async function updateCity() {
		useCustomRequest<{ message: string; data: City }, Partial<City>>({
			endpoint: `/cities/${city.CODIGO}`,
			requestData: EditedCityState.value,
			method: "patch",
			service: "campaigns",
			onSuccess: (res) => {
				toast.success("Cidade atualizada com sucesso");
				modalState.reset();
				update(res.data);
			},
		});
	}

	const disabled =
		!EditedCityState.value.NOME ||
		!EditedCityState.value.NOME.trim() ||
		!(EditedCityState.value.NOME.trim().length > 0) ||
		!EditedCityState.value.UF ||
		!(EditedCityState.value.UF.length === 2);

	return (
		<Modal modalState={modalState} title="Editar Cidade">
			<StyledRoleModal>
				<Input
					{...defaultInput}
					label="Nome da cidade"
					placeholder="Digite o nome da cidade"
					defaultValue={city.NOME}
					onChange={(e) => {
						EditedCityState.set((prev) => ({ ...prev, NOME: e.target.value }));
					}}
				/>
				<Select
					{...defaultInput}
					options={selectOptions}
					label="UF da cidade"
					placeholder="Seleciona a UF"
					defaultValue={{ name: city.UF, value: city.UF }}
					onChange={(e) => EditedCityState.set((prev) => ({ ...prev, UF: e ?? undefined }))}
				/>
				<button onClick={updateCity} disabled={disabled}>
					Confirmar
				</button>
			</StyledRoleModal>
		</Modal>
	);
}

export default EditCityModal;
