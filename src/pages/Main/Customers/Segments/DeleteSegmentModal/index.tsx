import Modal from "../../../../../components/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import Input from "../../../../../components/Input";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import useCustomState from "../../../../../utils/customState.hook";
import StyledsegmentModal from "./style";
import { customRequest } from "../../../../../api";
import { toast } from "react-toastify";
import { Segment } from "../../../../../interfaces/Segment.type";

interface DeletesegmentModalProps {
	segment: Segment;
	updateOnDelete: (data: Segment) => void;
}

function DeleteSegmentModal({
	segment,
	updateOnDelete,
}: DeletesegmentModalProps) {
	const { modalState } = useContext(GlobalContext);
	const segmentNameState = useCustomState("");
	const buttonState = useCustomState(false);

	async function deletesegment() {
		customRequest<{ message: string; data: Segment }, { NOME: string }>({
			endpoint: `/segments/${segment.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: (res) => {
				toast.success(res.message);
				modalState.reset();
				updateOnDelete(segment);
			},
		});
	}

	return (
		<Modal modalState={modalState} title="Remover Segmento">
			<StyledsegmentModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${segment.NOME}' para confirmar`}
					value={segmentNameState.value}
					onChange={(e) => {
						segmentNameState.set(e.target.value);
						if (e.target.value === segment.NOME) {
							buttonState.set(true);
						} else if (buttonState.value != false) {
							buttonState.set(false);
						}
					}}
				/>
				{(buttonState.value && (
					<button onClick={deletesegment}>Confirmar</button>
				)) || <button disabled>Confirmar</button>}
			</StyledsegmentModal>
		</Modal>
	);
}

export default DeleteSegmentModal;
