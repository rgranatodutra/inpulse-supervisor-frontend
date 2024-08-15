import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { UserGroup } from "../../../../../interfaces/UserGroup.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGroupModal from "./style";

interface EditGroupModalProps {
	group: UserGroup;
	update: (data: UserGroup) => void;
}

function EditGroupModal({ group, update }: EditGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupNameState = useCustomState(group.DESCRICAO);

	async function updateName() {
		if (groupNameState.value.trim().length < 3) {
			toast.error("Minimo de 3 caracteres no nome do grupo");
		} else {
			useCustomRequest<{ message: string; data: UserGroup }, { DESCRICAO: string }>({
				endpoint: `/user-groups/${group.CODIGO}`,
				requestData: { DESCRICAO: groupNameState.value.trim() },
				method: "patch",
				service: "users",
				onSuccess: (res) => {
					toast.success("Nome atualizado com sucesso");
					modalState.reset();
					update(res.data);
				},
			});
		}
	}

	const disabled = !groupNameState.value.trim() || !(groupNameState.value.trim().length > 0);

	return (
		<Modal modalState={modalState} title="Editar Grupo">
			<StyledGroupModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome do grupo"
					value={groupNameState.value}
					onChange={(e) => {
						groupNameState.set(e.target.value.trim());
					}}
				/>

				<button onClick={updateName} disabled={disabled}>
					Confirmar
				</button>
			</StyledGroupModal>
		</Modal>
	);
}

export default EditGroupModal;
