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

interface EditRoleModalProps {
	role: Position;
	update: (data: Position) => void;
}

function EditRoleModal({ role, update }: EditRoleModalProps) {
	const { modalState } = useContext(GlobalContext);
	const RoleNameState = useCustomState(role.DESCRICAO);

	async function updateName() {
		customRequest<{ message: string; data: Position }, { DESCRICAO: string }>({
			endpoint: `/positions/${role.CODIGO}`,
			requestData: { DESCRICAO: RoleNameState.value },
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
		<Modal modalState={modalState} title="Editar Cargo">
			<StyledRoleModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome do cargo"
					value={RoleNameState.value}
					onChange={(e) => {
						RoleNameState.set(e.target.value);
					}}
				/>
				<button onClick={updateName}>Confirmar</button>
			</StyledRoleModal>
		</Modal>
	);
}

export default EditRoleModal;
