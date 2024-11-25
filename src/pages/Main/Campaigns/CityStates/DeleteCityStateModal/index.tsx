import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { CityState } from "../../../../../interfaces/CityState.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledRoleModal from "./style";

interface DeleteCityStateModalProps {
	cityState: CityState;
}

function DeleteCityStateModal({ cityState }: DeleteCityStateModalProps) {
	const { modalState } = useContext(GlobalContext);
	const cityStateNameState = useCustomState("");

	async function deleteCity() {
		useCustomRequest({
			endpoint: `/ufStates/${cityState.ORDEM}`,
			method: "delete",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Estado deletado com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !cityStateNameState.value.trim() || !(cityStateNameState.value.trim() === cityState.NOME);

	return (
		<Modal modalState={modalState} title="Remover Cidade">
			<StyledRoleModal>
				<Input
					{...defaultInput}
					placeholder={`Digite '${cityState.NOME}' para confirmar`}
					onChange={(e) => {
						cityStateNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteCity} disabled={disabled}>
					Confirmar
				</button>
			</StyledRoleModal>
		</Modal>
	);
}

export default DeleteCityStateModal;
