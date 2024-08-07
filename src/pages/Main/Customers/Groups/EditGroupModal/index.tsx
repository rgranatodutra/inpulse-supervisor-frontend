import Modal from "../../../../../components/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import Input from "../../../../../components/Input";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import useCustomState from "../../../../../utils/customState.hook";
import { CustomerGroup } from "../../../../../interfaces/CustomerGroup.type";
import StyledGroupModal from "./style";
import { customRequest } from "../../../../../api";
import { toast } from "react-toastify";

interface EditGroupModalProps {
	group: CustomerGroup;
	update: (data: CustomerGroup) => void;
}

function EditGroupModal({ group, update }: EditGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupNameState = useCustomState(group.DESCRICAO);

	async function updateName() {
		customRequest<
			{ message: string; data: CustomerGroup },
			{ DESCRICAO: string }
		>({
			endpoint: `/customer-groups/${group.CODIGO}`,
			requestData: { DESCRICAO: groupNameState.value },
			method: "patch",
			service: "customers",
			onSuccess: (res) => {
				toast.success(res.message);
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
