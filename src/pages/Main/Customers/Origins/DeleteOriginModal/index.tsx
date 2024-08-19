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

interface DeleteOriginModalProps {
	origin: Origin;
	updateOnDelete: (data: Origin) => void;
}

function DeleteOriginModal({ origin, updateOnDelete }: DeleteOriginModalProps) {
	const { modalState } = useContext(GlobalContext);
	const OriginNameState = useCustomState("");

	async function deleteOrigin() {
		useCustomRequest<{ message: string; data: Origin }, { DESCRICAO: string }>({
			endpoint: `/origins/${origin.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: () => {
				toast.success("Origem deletada com sucesso");
				modalState.reset();
				updateOnDelete(origin);
			},
		});
	}

	const disabled = !OriginNameState.value.trim() || !(OriginNameState.value.trim() === origin.DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover Origem">
			<StyledOriginModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${origin.DESCRICAO}' para confirmar`}
					onChange={(e) => {
						OriginNameState.set(e.target.value);
					}}
				/>
				<button onClick={deleteOrigin} disabled={disabled}>
					Confirmar
				</button>
			</StyledOriginModal>
		</Modal>
	);
}

export default DeleteOriginModal;
