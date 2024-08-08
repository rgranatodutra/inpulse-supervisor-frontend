import Modal from "../../../../../components/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import Input from "../../../../../components/Input";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import useCustomState from "../../../../../utils/customState.hook";
import StyledRoleModal from "./style";
import { customRequest } from "../../../../../api";
import { toast } from "react-toastify";
import { Position } from "../../../../../interfaces/Position.type";

interface DeleteRoleModalProps {
	role: Position;
	updateOnDelete: (data: Position) => void;
}

function DeleteRoleModal({ role, updateOnDelete }: DeleteRoleModalProps) {
	const { modalState } = useContext(GlobalContext);
	const RoleNameState = useCustomState("");
	const buttonState = useCustomState(false);

	async function deleteRole() {
		customRequest<{ message: string; data: Position }, { DESCRICAO: string }>({
			endpoint: `/positions/${role.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: (res) => {
				toast.success(res.message);
				modalState.reset();
				updateOnDelete(role);
			},
		});
	}

	return (
		<Modal modalState={modalState} title="Remover Cargo">
			<StyledRoleModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${role.DESCRICAO}' para confirmar`}
					value={RoleNameState.value}
					onChange={(e) => {
						RoleNameState.set(e.target.value);
						if (e.target.value === role.DESCRICAO) {
							buttonState.set(true);
						} else if (buttonState.value != false) {
							buttonState.set(false);
						}
					}}
				/>
				{(buttonState.value && (
					<button onClick={deleteRole}>Confirmar</button>
				)) || <button disabled>Confirmar</button>}
			</StyledRoleModal>
		</Modal>
	);
}

export default DeleteRoleModal;
