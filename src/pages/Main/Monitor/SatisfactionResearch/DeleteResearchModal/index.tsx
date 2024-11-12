import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Goal } from "../../../../../interfaces/Goal.type";
import { SatisfactionResearch } from "../../../../../interfaces/SatisfactionResearch.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGoalModal from "./style";

interface DeleteGoalModalProps {
	research: SatisfactionResearch;
}

function DeleteGoalModal({ research }: DeleteGoalModalProps) {
	const { modalState } = useContext(GlobalContext);
	const ResearchDescriptionState = useCustomState("");

	async function deleteGoal() {
		useCustomRequest<{ message: string; data: Goal }, undefined>({
			endpoint: `/satisfactionResearchs/${research.PESQSAT_CODIGO}`,
			method: "delete",
			service: "monitoring",
			onSuccess: () => {
				toast.success("Pesquisa deletada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled =
		!ResearchDescriptionState.value.trim() || !(ResearchDescriptionState.value.trim() === research.PESQ_DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover pesquisa de satisfação">
			<StyledGoalModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${research.PESQ_DESCRICAO}' para confirmar`}
					onChange={(e) => {
						ResearchDescriptionState.set(e.target.value);
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
