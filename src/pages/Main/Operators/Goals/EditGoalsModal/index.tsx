import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import Select from "../../../../../components/Select";
import { GlobalContext } from "../../../../../contexts/global";
import { Goal } from "../../../../../interfaces/Goal.type";
import { User } from "../../../../../interfaces/User.type";
import cssVars from "../../../../../utils/cssVariables.vars";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGoalModal from "./style";

interface EditGoalModalProps {
	goal: Goal;
	users: User[];
}

function EditGoalModal({ goal, users }: EditGoalModalProps) {
	const { modalState } = useContext(GlobalContext);
	const editedGoalState = useCustomState(goal);

	async function updateName() {
		useCustomRequest<{ message: string; data: Goal }, Partial<Goal>>({
			endpoint: `/goals/${goal.CODIGO}`,
			requestData: {
				OPERADOR: editedGoalState.value.OPERADOR,
				MES: editedGoalState.value.MES,
				ANO: editedGoalState.value.ANO,
				VALOR_META: +editedGoalState.value.VALOR_META,
			},
			method: "patch",
			service: "users",
			onSuccess: () => {
				toast.success("Meta atualizada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled =
		!editedGoalState.value.OPERADOR ||
		!(editedGoalState.value.OPERADOR >= 0) ||
		!editedGoalState.value.ANO ||
		!editedGoalState.value.MES ||
		!editedGoalState.value.VALOR_META ||
		!(+editedGoalState.value.VALOR_META > 0);

	const options = users.map((u) => ({ name: u.NOME, value: u.CODIGO }));

	return (
		<Modal modalState={modalState} title="Editar Meta">
			<StyledGoalModal>
				<div style={{ width: "18rem" }}>
					<h3> Operador </h3>
					<Select
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 0.5]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={null}
						options={options}
						placeholder="Selecione o operador"
						defaultValue={{ name: goal.NOME, value: goal.OPERADOR }}
						onChange={(e) => editedGoalState.set((prev) => ({ ...prev, OPERADOR: e || -1 }))}
					/>
				</div>
				<div style={{ width: "18rem" }}>
					<h3> Mês / Ano </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 0.5]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={null}
						rightIcon={null}
						onChange={(e) =>
							editedGoalState.set((prev) => ({
								...prev,
								MES: e.target.value.slice(5),
								ANO: +e.target.value.slice(0, 4),
							}))
						}
						defaultValue={`${goal.ANO}-${goal.MES}`}
						type="month"
					/>
				</div>
				<div style={{ width: "18rem" }}>
					<h3> Meta </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 0.5]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={<span> R$ </span>}
						rightIcon={null}
						type="number"
						defaultValue={goal.VALOR_META}
						onChange={(e) => editedGoalState.set((prev) => ({ ...prev, VALOR_META: +e.target.value }))}
					/>
				</div>
				<button onClick={updateName} disabled={disabled}>
					Confirmar
				</button>
			</StyledGoalModal>
		</Modal>
	);
}

export default EditGoalModal;
