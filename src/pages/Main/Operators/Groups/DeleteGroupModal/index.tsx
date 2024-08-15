import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { CustomerGroup } from "../../../../../interfaces/CustomerGroup.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGroupModal from "./style";

interface DeleteGroupModalProps {
	group: CustomerGroup;
	updateOnDelete: (data: CustomerGroup) => void;
}

function DeleteGroupModal({ group, updateOnDelete }: DeleteGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupNameState = useCustomState("");

	async function deleteGroup() {
		useCustomRequest<{ message: string; data: CustomerGroup }, { DESCRICAO: string }>({
			endpoint: `/user-groups/${group.CODIGO}`,
			method: "delete",
			service: "users",
			onSuccess: () => {
				toast.success("Grupo deletado com sucesso");
				modalState.reset();
				updateOnDelete(group);
			},
		});
	}

	const disabled = !groupNameState.value.trim() || !(groupNameState.value.trim() === group.DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover Grupo">
			<StyledGroupModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${group.DESCRICAO}' para confirmar`}
					value={groupNameState.value}
					onChange={(e) => {
						groupNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteGroup} disabled={disabled}>
					Confirmar
				</button>
			</StyledGroupModal>
		</Modal>
	);
}

export default DeleteGroupModal;
