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

interface EditSegmentModalProps {
	segment: Segment;
	update: (data: Segment) => void;
}

function EditSegmentModal({ segment, update }: EditSegmentModalProps) {
	const { modalState } = useContext(GlobalContext);
	const segmentNameState = useCustomState(segment.NOME);

	async function updateName() {
		useCustomRequest<{ message: string; data: Segment }, { NOME: string }>({
			endpoint: `/segments/${segment.CODIGO}`,
			requestData: { NOME: segmentNameState.value.trim() },
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
		<Modal modalState={modalState} title="Editar Segmento">
			<StyledsegmentModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome do segmento"
					value={segmentNameState.value}
					onChange={(e) => {
						segmentNameState.set(e.target.value);
					}}
				/>
				<button onClick={updateName}>Confirmar</button>
			</StyledsegmentModal>
		</Modal>
	);
}

export default EditSegmentModal;
