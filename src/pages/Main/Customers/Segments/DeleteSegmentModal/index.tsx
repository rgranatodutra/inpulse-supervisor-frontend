import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Segment } from "../../../../../interfaces/Segment.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledsegmentModal from "./style";

interface DeletesegmentModalProps {
	segment: Segment;
	updateOnDelete: (data: Segment) => void;
}

function DeleteSegmentModal({ segment, updateOnDelete }: DeletesegmentModalProps) {
	const { modalState } = useContext(GlobalContext);
	const segmentNameState = useCustomState("");

	async function deletesegment() {
		useCustomRequest<{ message: string; data: Segment }, { NOME: string }>({
			endpoint: `/segments/${segment.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: () => {
				toast.success("Segmento deletado com sucesso");
				modalState.reset();
				updateOnDelete(segment);
			},
		});
	}

	const disabled = !segmentNameState.value.trim() || !(segmentNameState.value.trim() === segment.NOME);

	return (
		<Modal modalState={modalState} title="Remover Segmento">
			<StyledsegmentModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${segment.NOME}' para confirmar`}
					onChange={(e) => {
						segmentNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deletesegment} disabled={disabled}>
					Confirmar
				</button>
			</StyledsegmentModal>
		</Modal>
	);
}

export default DeleteSegmentModal;
