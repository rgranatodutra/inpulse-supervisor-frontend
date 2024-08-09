import Modal from "../../../../../components/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import Input from "../../../../../components/Input";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGroupModal from "./style";
import { customRequest } from "../../../../../api";
import { toast } from "react-toastify";
import { OperatorGroup } from "../../../../../interfaces/OperatorGroup.type";

interface EditGroupModalProps {
	group: OperatorGroup;
	update: (data: OperatorGroup) => void;
}

function EditGroupModal({ group, update }: EditGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupNameState = useCustomState(group.DESCRICAO);
	const addGroupButtonDisabled = useCustomState(false);

	const inputChangeFn = (e) => {
		groupNameState.set(e.target.value);
		if (e.target.value.trim().length >= 3 && addGroupButtonDisabled.value) {
			addGroupButtonDisabled.set(false);
		} else if (
			e.target.value.trim().length < 3 &&
			!addGroupButtonDisabled.value
		) {
			addGroupButtonDisabled.set(true);
		}
	};

	async function updateName() {
		if (groupNameState.value.trim().length < 3) {
			toast.error("Minimo de 3 caracteres no nome do grupo");
		} else {
			customRequest<
				{ message: string; data: OperatorGroup },
				{ DESCRICAO: string }
			>({
				endpoint: `/user-groups/${group.CODIGO}`,
				requestData: { DESCRICAO: groupNameState.value },
				method: "patch",
				service: "users",
				onSuccess: (res) => {
					toast.success(res.message);
					modalState.reset();
					update(res.data);
				},
			});
		}
	}

	return (
		<Modal modalState={modalState} title="Editar Grupo">
			<StyledGroupModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome do grupo"
					value={groupNameState.value}
					onChange={(e) => {
						inputChangeFn(e);
					}}
				/>

				{(addGroupButtonDisabled.value && (
					<button disabled>Confirmar</button>
				)) || <button onClick={updateName}>Confirmar</button>}
			</StyledGroupModal>
		</Modal>
	);
}

export default EditGroupModal;
