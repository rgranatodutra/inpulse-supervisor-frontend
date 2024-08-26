import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../../api";
import { defaultInput100 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import Modal from "../../../../../../components/Modal";
import { GlobalContext } from "../../../../../../contexts/global";
import { SegmentException } from "../../../../../../interfaces/SegmentException.type";
import useCustomState from "../../../../../../utils/customState.hook";
import StyledDealModal from "./style";

interface DeleteSegmentExceptionModal {
	segment: SegmentException;
}

function DeleteSegmentExceptionModal({ segment }: DeleteSegmentExceptionModal) {
	const { modalState } = useContext(GlobalContext);
	const segmentName = useCustomState(0);

	async function deleteException() {
		useCustomRequest({
			endpoint: `/segment-exceptions/${segment.CODIGO}`,
			method: "delete",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Excessão deletada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !segmentName.value || !(segmentName.value === segment.SEGMENTO);

	return (
		<Modal modalState={modalState} title="Remover Excessão">
			<StyledDealModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${segment.SEGMENTO}' para confirmar`}
					onChange={(e) => {
						segmentName.set(+e.target.value);
					}}
				/>
				<button onClick={deleteException} disabled={disabled}>
					Confirmar
				</button>
			</StyledDealModal>
		</Modal>
	);
}

export default DeleteSegmentExceptionModal;
