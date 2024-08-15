import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Origin } from "../../../../../interfaces/Origin.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledOriginModal from "./style";

interface EditOriginModalProps {
	origin: Origin;
	update: (data: Origin) => void;
}

function EditOriginModal({ origin, update }: EditOriginModalProps) {
	const { modalState } = useContext(GlobalContext);
	const OriginNameState = useCustomState(origin.DESCRICAO);

	async function updateName() {
		useCustomRequest<{ message: string; data: Origin }, { DESCRICAO: string }>({
			endpoint: `/origins/${origin.CODIGO}`,
			requestData: { DESCRICAO: OriginNameState.value.trim() },
			method: "patch",
			service: "customers",
			onSuccess: (res) => {
				toast.success("Origem atualizada com sucesso");
				modalState.reset();
				update(res.data);
			},
		});
	}

	const disabled = !OriginNameState.value.trim() || !(OriginNameState.value.trim().length > 0);

	return (
		<Modal modalState={modalState} title="Editar Origem">
			<StyledOriginModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome da origem"
					value={OriginNameState.value}
					onChange={(e) => {
						OriginNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={updateName} disabled={disabled}>
					Confirmar
				</button>
			</StyledOriginModal>
		</Modal>
	);
}

export default EditOriginModal;
