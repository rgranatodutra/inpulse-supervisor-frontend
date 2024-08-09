import Modal from "../../../../../components/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import Input from "../../../../../components/Input";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import useCustomState from "../../../../../utils/customState.hook";
import StyledOriginModal from "./style";
import { customRequest } from "../../../../../api";
import { toast } from "react-toastify";
import { Origin } from "../../../../../interfaces/Origin.type";

interface EditOriginModalProps {
	origin: Origin;
	update: (data: Origin) => void;
}

function EditOriginModal({ origin, update }: EditOriginModalProps) {
	const { modalState } = useContext(GlobalContext);
	const OriginNameState = useCustomState(origin.DESCRICAO);

	async function updateName() {
		customRequest<{ message: string; data: Origin }, { DESCRICAO: string }>({
			endpoint: `/origins/${origin.CODIGO}`,
			requestData: { DESCRICAO: OriginNameState.value.trim() },
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
		<Modal modalState={modalState} title="Editar Origem">
			<StyledOriginModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome da origem"
					value={OriginNameState.value}
					onChange={(e) => {
						OriginNameState.set(e.target.value);
					}}
				/>
				<button onClick={updateName}>Confirmar</button>
			</StyledOriginModal>
		</Modal>
	);
}

export default EditOriginModal;
