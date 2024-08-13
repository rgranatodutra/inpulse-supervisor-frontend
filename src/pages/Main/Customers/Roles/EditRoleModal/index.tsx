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

interface EditRoleModalProps {
	role: Position;
	update: (data: Position) => void;
}

function EditRoleModal({ role, update }: EditRoleModalProps) {
	const { modalState } = useContext(GlobalContext);
	const RoleNameState = useCustomState(role.DESCRICAO);

	async function updateName() {
		useCustomRequest<{ message: string; data: Position }, { DESCRICAO: string }>({
			endpoint: `/positions/${role.CODIGO}`,
			requestData: { DESCRICAO: RoleNameState.value.trim() },
			method: "patch",
			service: "customers",
			onSuccess: (res) => {
				toast.success("Cargo atualizado com sucesso");
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
