import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Result } from "../../../../../interfaces/Result.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledResultModal from "./style";

interface DeactivateCustomersModalProps {
	id: number;
	name: string;
}

function DeactivateCustomersModal({ id, name }: DeactivateCustomersModalProps) {
	const { modalState } = useContext(GlobalContext);
	const ResultNameState = useCustomState("");

	async function deleteResult() {
		useCustomRequest<{ message: string; data: Result }, { id: number[] }>({
			endpoint: `/deactivate-customers-without-action/`,
			method: "post",
			requestData: { id: [id] },
			service: "tools",
			onSuccess: () => {
				toast.success("Cliente desativado com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !ResultNameState.value.trim() || !(ResultNameState.value === name);

	return (
		<Modal modalState={modalState} title="Remover Unidade">
			<StyledResultModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${name}' para confirmar`}
					onChange={(e) => {
						ResultNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteResult} disabled={disabled}>
					Confirmar
				</button>
			</StyledResultModal>
		</Modal>
	);
}

export default DeactivateCustomersModal;
