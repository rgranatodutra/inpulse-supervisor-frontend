import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../../api";
import { defaultInput100 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import Modal from "../../../../../../components/Modal";
import { GlobalContext } from "../../../../../../contexts/global";
import CustomerException from "../../../../../../interfaces/CustomerException.type";
import useCustomState from "../../../../../../utils/customState.hook";
import StyledDealModal from "./style";

interface DeleteClientExceptionModal {
	client: CustomerException;
}

function DeleteClientExceptionModal({ client }: DeleteClientExceptionModal) {
	const { modalState } = useContext(GlobalContext);
	const cod_erp = useCustomState("");

	async function deleteException() {
		useCustomRequest({
			endpoint: `/customer-exceptions/${client.COD_ERP}`,
			method: "delete",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Excessão deletada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !cod_erp.value.trim() || !(cod_erp.value === client.COD_ERP.toLocaleString());

	return (
		<Modal modalState={modalState} title="Remover Excessão">
			<StyledDealModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${client.COD_ERP}' para confirmar`}
					onChange={(e) => {
						cod_erp.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteException} disabled={disabled}>
					Confirmar
				</button>
			</StyledDealModal>
		</Modal>
	);
}

export default DeleteClientExceptionModal;
