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

interface EditGroupModalProps {
	group: CustomerGroup;
	update: (data: CustomerGroup) => void;
}

function EditGroupModal({ group, update }: EditGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupNameState = useCustomState(group.DESCRICAO);

	async function updateName() {
		useCustomRequest<{ message: string; data: CustomerGroup }, { DESCRICAO: string }>({
			endpoint: `/customer-groups/${group.CODIGO}`,
			requestData: { DESCRICAO: groupNameState.value.trim() },
			method: "patch",
			service: "customers",
			onSuccess: (res) => {
				toast.success("Grupo atualizado com sucesso");
				modalState.reset();
				update(res.data);
			},
		});
	}

	return (
		<Modal modalState={modalState} title="Editar Grupo">
			<StyledGroupModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome do grupo"
					value={groupNameState.value}
					onChange={(e) => {
						groupNameState.set(e.target.value);
					}}
				/>
				<button onClick={updateName}>Confirmar</button>
			</StyledGroupModal>
		</Modal>
	);
}

export default EditGroupModal;
