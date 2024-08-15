import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Goal } from "../../../../../interfaces/Goal.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGoalModal from "./style";

interface DeleteGoalModalProps {
	goal: Goal;
}

function DeleteGoalModal({ goal }: DeleteGoalModalProps) {
	const { modalState } = useContext(GlobalContext);
	const GoalNameState = useCustomState("");

	async function deleteGoal() {
		useCustomRequest<{ message: string; data: Goal }, undefined>({
			endpoint: `/goals/${goal.CODIGO}`,
			method: "delete",
			service: "users",
			onSuccess: () => {
				toast.success("Meta deletada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !GoalNameState.value.trim() || !(GoalNameState.value.trim() === goal.NOME);

	return (
		<Modal modalState={modalState} title="Remover Meta">
			<StyledGoalModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${goal.NOME}' para confirmar`}
					value={GoalNameState.value}
					onChange={(e) => {
						GoalNameState.set(e.target.value);
					}}
				/>
				<button onClick={deleteGoal} disabled={disabled}>
					Confirmar
				</button>
			</StyledGoalModal>
		</Modal>
	);
}

export default DeleteGoalModal;
