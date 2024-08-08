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

interface DeleteGroupModalProps {
	group: CustomerGroup;
	updateOnDelete: (data: CustomerGroup) => void;
}

function DeleteGroupModal({ group, updateOnDelete }: DeleteGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupNameState = useCustomState("");
	const buttonState = useCustomState(false);

	async function deleteGroup() {
		customRequest<
			{ message: string; data: CustomerGroup },
			{ DESCRICAO: string }
		>({
			endpoint: `/customer-groups/${group.CODIGO}`,
			method: "delete",
			service: "customers",
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
				{(buttonState.value && (
					<button onClick={deleteGroup}>Confirmar</button>
				)) || <button disabled>Confirmar</button>}
			</StyledGroupModal>
		</Modal>
	);
}

export default DeleteGroupModal;
