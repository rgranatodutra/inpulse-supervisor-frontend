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
	const buttonState = useCustomState(false);

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

	return (
		<Modal modalState={modalState} title="Remover Turno">
			<StyledShiftModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${shift.DESCRICAO}' para confirmar`}
					value={ShiftNameState.value}
					onChange={(e) => {
						ShiftNameState.set(e.target.value);
						if (e.target.value === shift.DESCRICAO) {
							buttonState.set(true);
						} else if (buttonState.value != false) {
							buttonState.set(false);
						}
					}}
				/>
				{(buttonState.value && <button onClick={deleteShift}>Confirmar</button>) || <button disabled>Confirmar</button>}
			</StyledShiftModal>
		</Modal>
	);
}

export default DeleteShiftModal;
