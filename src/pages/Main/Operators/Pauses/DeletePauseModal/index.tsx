import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { PauseReason } from "../../../../../interfaces/PauseReason.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledPauseModal from "./style";

interface DeletePauseModalProps {
	pause: PauseReason;
	updateOnDelete: (data: PauseReason) => void;
}

function DeletePauseModal({ pause, updateOnDelete }: DeletePauseModalProps) {
	const { modalState } = useContext(GlobalContext);
	const PauseNameState = useCustomState("");

	async function deletePause() {
		useCustomRequest<{ message: string; data: PauseReason }, { DESCRICAO: string }>({
			endpoint: `/pauses/${pause.CODIGO}`,
			method: "delete",
			service: "users",
			onSuccess: () => {
				toast.success("Pausa deletada com sucesso");
				modalState.reset();
				updateOnDelete(pause);
			},
		});
	}

	const disabled = !PauseNameState.value.trim() || !(PauseNameState.value.trim() === pause.DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover Pausa">
			<StyledPauseModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${pause.DESCRICAO}' para confirmar`}
					onChange={(e) => {
						PauseNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deletePause} disabled={disabled}>
					Confirmar
				</button>
			</StyledPauseModal>
		</Modal>
	);
}

export default DeletePauseModal;
