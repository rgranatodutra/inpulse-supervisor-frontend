import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Shift } from "../../../../../interfaces/Shift.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledShiftModal from "./style";

interface DeleteShiftModalProps {
	shift: Shift;
	updateOnDelete: (data: Shift) => void;
}

function DeleteShiftModal({ shift, updateOnDelete }: DeleteShiftModalProps) {
	const { modalState } = useContext(GlobalContext);
	const ShiftNameState = useCustomState("");

	async function deleteShift() {
		useCustomRequest<{ message: string; data: Shift }, { NOME: string }>({
			endpoint: `/Shifts/${shift.CODIGO}`,
			method: "delete",
			service: "users",
			onSuccess: () => {
				toast.success("Turno deletado com sucesso");
				modalState.reset();
				updateOnDelete(shift);
			},
		});
	}

	const disabled = !ShiftNameState.value.trim() || !(ShiftNameState.value.trim() === shift.DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover Turno">
			<StyledShiftModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${shift.DESCRICAO}' para confirmar`}
					onChange={(e) => {
						ShiftNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteShift} disabled={disabled}>
					Confirmar
				</button>
			</StyledShiftModal>
		</Modal>
	);
}

export default DeleteShiftModal;
