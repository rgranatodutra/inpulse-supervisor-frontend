import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Shift } from "../../../../../interfaces/Shift.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledShiftModal from "./style";

interface EditShiftModalProps {
	shift: Shift;
	update: (data: Shift) => void;
}

function EditShiftModal({ shift, update }: EditShiftModalProps) {
	const { modalState } = useContext(GlobalContext);
	const EditedShiftState = useCustomState<Partial<Shift>>(shift);

	async function updateName() {
		useCustomRequest<{ message: string; data: Shift }, { DESCRICAO: string }>({
			endpoint: `/Shifts/${shift.CODIGO}`,
			requestData: { ...EditedShiftState.value, DESCRICAO: EditedShiftState.value.DESCRICAO!.trim() },
			method: "patch",
			service: "users",
			onSuccess: (res) => {
				toast.success("Turno atualizado com sucesso");
				modalState.reset();
				update(res.data);
			},
		});
	}

	const inputChangeFn = (e, type) => {
		if (type === "name") {
			EditedShiftState.set((prev) => ({ ...prev, DESCRICAO: e.target.value.trim() }));
		} else if (type === "entry") {
			EditedShiftState.set((prev) => ({ ...prev, ENTRADA_1: e.target.value }));
		} else {
			EditedShiftState.set((prev) => ({ ...prev, SAIDA_1: e.target.value }));
		}
	};

	const disabled =
		!EditedShiftState.value ||
		!EditedShiftState.value.DESCRICAO ||
		!(EditedShiftState.value.DESCRICAO.trim().length > 0) ||
		!EditedShiftState.value.ENTRADA_1 ||
		!EditedShiftState.value.SAIDA_1;

	return (
		<Modal modalState={modalState} title="Editar turno">
			<StyledShiftModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome do turno"
					value={EditedShiftState.value.DESCRICAO}
					onChange={(e) => inputChangeFn(e, "name")}
				/>
				<Input
					{...defaultInput100}
					type="time"
					defaultValue={shift.ENTRADA_1}
					onChange={(e) => inputChangeFn(e, "entry")}
				/>
				<Input
					{...defaultInput100}
					type="time"
					defaultValue={shift.SAIDA_1}
					onChange={(e) => inputChangeFn(e, "exit")}
				/>
				<button onClick={updateName} disabled={disabled}>
					Confirmar
				</button>
			</StyledShiftModal>
		</Modal>
	);
}

export default EditShiftModal;
