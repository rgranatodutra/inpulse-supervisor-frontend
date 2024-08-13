import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Shift } from "../../../../../interfaces/Shift.type";
import cssVars from "../../../../../utils/cssVariables.vars";
import useCustomState from "../../../../../utils/customState.hook";
import StyledShiftModal from "./style";

interface EditShiftModalProps {
	shift: Shift;
	update: (data: Shift) => void;
}

function EditShiftModal({ shift, update }: EditShiftModalProps) {
	const { modalState } = useContext(GlobalContext);
	const EditedShiftState = useCustomState<Partial<Shift>>(shift);
	const addShiftButtonDisabled = useCustomState<boolean>(false);

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
			EditedShiftState.set((prev) => ({ ...prev, DESCRICAO: e.target.value }));
		} else if (type === "entry") {
			EditedShiftState.set((prev) => ({ ...prev, ENTRADA_1: e.target.value }));
		} else {
			EditedShiftState.set((prev) => ({ ...prev, SAIDA_1: e.target.value }));
		}

		if (e.target.value.trim().length && addShiftButtonDisabled.value) {
			addShiftButtonDisabled.set(false);
		} else if (!addShiftButtonDisabled.value && !e.target.value.trim().length) {
			addShiftButtonDisabled.set(true);
		}
	};

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
					$color={cssVars.colorGrey[3]}
					$focusColor={cssVars.colorGrey[0]}
					$borderColor={cssVars.colorGrey[5]}
					$padding={[0.5, 1]}
					$fontSize={0.875}
					$width={"100%"}
					leftIcon={null}
					rightIcon={null}
					type="time"
					defaultValue={shift.ENTRADA_1}
					onChange={(e) => inputChangeFn(e, "entry")}
					style={{ height: "2.375rem" }}
				/>
				<Input
					$color={cssVars.colorGrey[3]}
					$focusColor={cssVars.colorGrey[0]}
					$borderColor={cssVars.colorGrey[5]}
					$padding={[0.5, 1]}
					$fontSize={0.875}
					$width={"100%"}
					leftIcon={null}
					rightIcon={null}
					type="time"
					defaultValue={shift.SAIDA_1}
					onChange={(e) => inputChangeFn(e, "exit")}
					style={{ height: "2.375rem" }}
				/>
				<button onClick={updateName} disabled={addShiftButtonDisabled.value}>
					Confirmar
				</button>
			</StyledShiftModal>
		</Modal>
	);
}

export default EditShiftModal;
