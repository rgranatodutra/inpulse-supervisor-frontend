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

interface EditSegmentModalProps {
	segment: Segment;
	update: (data: Segment) => void;
}

function EditSegmentModal({ segment, update }: EditSegmentModalProps) {
	const { modalState } = useContext(GlobalContext);
	const segmentNameState = useCustomState(segment.NOME);

	async function updateName() {
		customRequest<{ message: string; data: Segment }, { NOME: string }>({
			endpoint: `/segments/${segment.CODIGO}`,
			requestData: { NOME: segmentNameState.value },
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
