import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Unit } from "../../../../../interfaces/Unit.type";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledUnitModal from "./style";

interface EditUnitModalProps {
	unit: Unit;
}

function EditUnitModal({ unit }: EditUnitModalProps) {
	const { modalState } = useContext(GlobalContext);
	const editedUnitState = useCustomState<Partial<Unit>>(unit);

	async function updateUnit() {
		useCustomRequest<{ message: string; data: Unit }, Partial<Unit>>({
			endpoint: `/units/${unit.CODIGO}`,
			requestData: editedUnitState.value,
			method: "patch",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Unidade atualizada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled =
		!editedUnitState.value ||
		!editedUnitState.value.DESCRICAO ||
		!(editedUnitState.value.DESCRICAO.trim().length > 2) ||
		!editedUnitState.value.INATIVOS_ANTIGOS ||
		!editedUnitState.value.INATIVOS_RECENTES ||
		!(editedUnitState.value.INATIVOS_ANTIGOS > 0) ||
		!(editedUnitState.value.INATIVOS_RECENTES > 0);

	return (
		<Modal modalState={modalState} title="Editar Unidade">
			<StyledUnitModal>
				<Input
					{...defaultInput100}
					type="text"
					placeholder="Digite o nome"
					defaultValue={editedUnitState.value.DESCRICAO}
					onChange={(e) => editedUnitState.set((prev) => ({ ...prev, DESCRICAO: e.target.value.trim() || undefined }))}
				/>

				<Input
					{...defaultInput100}
					type="email"
					placeholder="Digite o E-Mail"
					defaultValue={editedUnitState.value.EMAIL}
					onChange={(e) => editedUnitState.set((prev) => ({ ...prev, EMAIL: e.target.value.trim() || undefined }))}
				/>

				<Input
					{...defaultInput100}
					type="input"
					placeholder="Digite o contato"
					defaultValue={editedUnitState.value.CONTATO_MAIL}
					onChange={(e) =>
						editedUnitState.set((prev) => ({ ...prev, CONTATO_MAIL: e.target.value.trim() || undefined }))
					}
				/>

				<Input
					{...defaultInput100}
					type="number"
					min={1}
					placeholder="Digite os inativos recentes"
					defaultValue={editedUnitState.value.INATIVOS_RECENTES}
					onChange={(e) =>
						editedUnitState.set((prev) => ({ ...prev, INATIVOS_RECENTES: +e.target.value || undefined }))
					}
				/>

				<Input
					{...defaultInput100}
					type="number"
					min={1}
					placeholder="Digite os inativos antigos"
					defaultValue={editedUnitState.value.INATIVOS_ANTIGOS}
					onChange={(e) => editedUnitState.set((prev) => ({ ...prev, INATIVOS_ANTIGOS: +e.target.value || undefined }))}
				/>

				<ButtonType2 disabled={disabled} onClick={() => updateUnit()} type="button">
					<FaCheck />
					Salvar alterações
				</ButtonType2>
			</StyledUnitModal>
		</Modal>
	);
}

export default EditUnitModal;
