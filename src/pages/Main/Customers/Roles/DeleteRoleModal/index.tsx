import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Position } from "../../../../../interfaces/Position.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledRoleModal from "./style";

interface DeleteRoleModalProps {
	role: Position;
	updateOnDelete: (data: Position) => void;
}

function DeleteRoleModal({ role, updateOnDelete }: DeleteRoleModalProps) {
	const { modalState } = useContext(GlobalContext);
	const RoleNameState = useCustomState("");

	async function deleteRole() {
		useCustomRequest<{ message: string; data: Position }, { DESCRICAO: string }>({
			endpoint: `/positions/${role.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: () => {
				toast.success("Cargo deletado com sucesso");
				modalState.reset();
				updateOnDelete(role);
			},
		});
	}

	const disabled = !RoleNameState.value.trim() || !(RoleNameState.value.trim() === role.DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover Cargo">
			<StyledRoleModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${role.DESCRICAO}' para confirmar`}
					value={RoleNameState.value}
					onChange={(e) => {
						RoleNameState.set(e.target.value);
					}}
				/>
				<button onClick={deleteRole} disabled={disabled}>
					Confirmar
				</button>
				)
			</StyledRoleModal>
		</Modal>
	);
}

export default DeleteRoleModal;
