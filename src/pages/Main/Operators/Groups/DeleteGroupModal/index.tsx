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
	const buttonState = useCustomState(false);

	async function deleteGroup() {
		useCustomRequest<{ message: string; data: CustomerGroup }, { DESCRICAO: string }>({
			endpoint: `/user-groups/${group.CODIGO}`,
			method: "delete",
			service: "users",
			onSuccess: (res) => {
				toast.success(res.message);
				modalState.reset();
				updateOnDelete(group);
			},
		});
	}

	return (
		<Modal modalState={modalState} title="Remover Grupo">
			<StyledGroupModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${group.DESCRICAO}' para confirmar`}
					value={groupNameState.value}
					onChange={(e) => {
						groupNameState.set(e.target.value);
						if (e.target.value === group.DESCRICAO) {
							buttonState.set(true);
						} else if (buttonState.value != false) {
							buttonState.set(false);
						}
					}}
				/>
				{(buttonState.value && <button onClick={deleteGroup}>Confirmar</button>) || <button disabled>Confirmar</button>}
			</StyledGroupModal>
		</Modal>
	);
}

export default DeleteGroupModal;
