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

interface DeleteOriginModalProps {
	origin: Origin;
	updateOnDelete: (data: Origin) => void;
}

function DeleteOriginModal({ origin, updateOnDelete }: DeleteOriginModalProps) {
	const { modalState } = useContext(GlobalContext);
	const OriginNameState = useCustomState("");
	const buttonState = useCustomState(false);

	async function deleteOrigin() {
		customRequest<{ message: string; data: Origin }, { DESCRICAO: string }>({
			endpoint: `/origins/${origin.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: (res) => {
				toast.success(res.message);
				modalState.reset();
				updateOnDelete(origin);
			},
		});
	}

	return (
		<Modal modalState={modalState} title="Remover Origem">
			<StyledOriginModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${origin.DESCRICAO}' para confirmar`}
					value={OriginNameState.value}
					onChange={(e) => {
						OriginNameState.set(e.target.value);
						if (e.target.value === origin.DESCRICAO) {
							buttonState.set(true);
						} else if (buttonState.value != false) {
							buttonState.set(false);
						}
					}}
				/>
				{(buttonState.value && (
					<button onClick={deleteOrigin}>Confirmar</button>
				)) || <button disabled>Confirmar</button>}
			</StyledOriginModal>
		</Modal>
	);
}

export default DeleteOriginModal;
