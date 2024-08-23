import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../../api";
import { defaultInput100 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import Modal from "../../../../../../components/Modal";
import { GlobalContext } from "../../../../../../contexts/global";
import { StateException } from "../../../../../../interfaces/StateException.type";
import useCustomState from "../../../../../../utils/customState.hook";
import StyledDealModal from "./style";

interface DeleteStateExceptionModal {
	state: StateException;
}

function DeleteStateExceptionModal({ state }: DeleteStateExceptionModal) {
	const { modalState } = useContext(GlobalContext);
	const stateName = useCustomState("");

	async function deleteException() {
		useCustomRequest({
			endpoint: `/state-exceptions/${state.ESTADO}`,
			method: "delete",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Excessão deletada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !stateName.value.trim() || !(stateName.value === state.ESTADO);

	return (
		<Modal modalState={modalState} title="Remover Excessão">
			<StyledDealModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${state.ESTADO}' para confirmar`}
					onChange={(e) => {
						stateName.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteException} disabled={disabled}>
					Confirmar
				</button>
			</StyledDealModal>
		</Modal>
	);
}

export default DeleteStateExceptionModal;
