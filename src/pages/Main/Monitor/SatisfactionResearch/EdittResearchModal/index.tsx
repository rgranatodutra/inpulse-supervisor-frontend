import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { SatisfactionResearch } from "../../../../../interfaces/SatisfactionResearch.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGoalModal from "./style";

interface EditGoalModalProps {
	research: SatisfactionResearch;
}

function EditGoalModal({ research }: EditGoalModalProps) {
	const { modalState } = useContext(GlobalContext);
	const editedResearchState = useCustomState(research);

	async function updateName() {
		useCustomRequest<{ message: string; data: SatisfactionResearch }, Partial<SatisfactionResearch>>({
			endpoint: `/satisfactionResearchs/${research.PESQSAT_CODIGO}`,
			requestData: {
				PESQ_DESCRICAO: editedResearchState.value.PESQ_DESCRICAO,
			},
			method: "patch",
			service: "monitoring",
			onSuccess: () => {
				toast.success("Pesquisa atualizada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !editedResearchState.value.PESQ_DESCRICAO || !editedResearchState.value.PESQ_DESCRICAO.trim();

	return (
		<Modal modalState={modalState} title="Editar pesquisa de satisfação">
			<StyledGoalModal>
				<Input
					{...defaultInput100}
					type="text"
					defaultValue={research.PESQ_DESCRICAO}
					onChange={(e) => editedResearchState.set((prev) => ({ ...prev, PESQ_DESCRICAO: e.target.value }))}
				/>

				<button onClick={updateName} disabled={disabled}>
					Confirmar
				</button>
			</StyledGoalModal>
		</Modal>
	);
}

export default EditGoalModal;
