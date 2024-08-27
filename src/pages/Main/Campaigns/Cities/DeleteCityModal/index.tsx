import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { City } from "../../../../../interfaces/City.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledRoleModal from "./style";

interface DeleteCityModalProps {
	city: City;
	updateOnDelete: (data: City) => void;
}

function DeleteCityModal({ city, updateOnDelete }: DeleteCityModalProps) {
	const { modalState } = useContext(GlobalContext);
	const CityNameState = useCustomState("");

	async function deleteCity() {
		useCustomRequest({
			endpoint: `/cities/${city.CODIGO}`,
			method: "delete",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Cidade deletada com sucesso");
				modalState.reset();
				updateOnDelete(city);
			},
		});
	}

	const disabled = !CityNameState.value.trim() || !(CityNameState.value.trim() === city.NOME);

	return (
		<Modal modalState={modalState} title="Remover Cidade">
			<StyledRoleModal>
				<Input
					{...defaultInput}
					placeholder={`Digite '${city.NOME}' para confirmar`}
					onChange={(e) => {
						CityNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteCity} disabled={disabled}>
					Confirmar
				</button>
			</StyledRoleModal>
		</Modal>
	);
}

export default DeleteCityModal;
