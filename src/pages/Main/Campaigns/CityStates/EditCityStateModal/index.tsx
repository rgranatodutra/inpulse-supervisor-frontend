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

interface EditCityStateModalProps {
	cityState: CityState;
}

function EditCityStateModal({ cityState }: EditCityStateModalProps) {
	const { modalState } = useContext(GlobalContext);
	const EditedCityState = useCustomState<Partial<CityState>>(cityState);

	async function updateCity() {
		useCustomRequest<{ message: string; data: CityState }, Partial<CityState>>({
			endpoint: `/ufStates/${cityState.ORDEM}`,
			requestData: EditedCityState.value,
			method: "patch",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Estado atualizado com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled =
		!EditedCityState.value.NOME?.trim() ||
		!(EditedCityState.value.NOME?.trim().length > 0) ||
		!EditedCityState.value.UF ||
		!(EditedCityState.value.UF.length === 2) ||
		!(EditedCityState.value.FUSOHORARIO || EditedCityState.value.FUSOHORARIO === 0) ||
		!(EditedCityState.value.FUSOHORARIO < 15) ||
		!(EditedCityState.value.FUSOHORARIO > -15);
	return (
		<Modal modalState={modalState} title="Editar Cidade">
			<StyledRoleModal>
				<Input
					{...defaultInput}
					type="input"
					defaultValue={EditedCityState.value.NOME}
					onChange={(e) => EditedCityState.set((prev) => ({ ...prev, NOME: e.target.value.trim() }))}
				/>
				<Input
					{...defaultInput}
					type="input"
					defaultValue={EditedCityState.value.UF}
					onChange={(e) => EditedCityState.set((prev) => ({ ...prev, UF: e.target.value.trim() }))}
				/>
				<Input
					{...defaultInput}
					type="number"
					max={14}
					min={-14}
					defaultValue={EditedCityState.value.FUSOHORARIO?.toLocaleString()}
					onChange={(e) => EditedCityState.set((prev) => ({ ...prev, FUSOHORARIO: +e.target.value }))}
				/>
				<button onClick={updateCity} disabled={disabled}>
					Confirmar
				</button>
			</StyledRoleModal>
		</Modal>
	);
}

export default EditCityStateModal;
