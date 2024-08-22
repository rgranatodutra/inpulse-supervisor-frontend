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

interface DeleteResultModalProps {
	result: Result;
}

function DeleteResultModal({ result }: DeleteResultModalProps) {
	const { modalState } = useContext(GlobalContext);
	const ResultNameState = useCustomState("");

	async function deleteResult() {
		useCustomRequest<{ message: string; data: Result }, undefined>({
			endpoint: `/results/${result.CODIGO}`,
			method: "delete",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Resultado deletado com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !ResultNameState.value.trim() || !(ResultNameState.value === result.NOME);

	return (
		<Modal modalState={modalState} title="Remover Unidade">
			<StyledResultModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${result.NOME}' para confirmar`}
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

export default DeleteResultModal;
