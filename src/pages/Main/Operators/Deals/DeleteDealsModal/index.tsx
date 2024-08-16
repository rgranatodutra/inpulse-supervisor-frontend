import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Purchase } from "../../../../../interfaces/Purchase.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledDealModal from "./style";

interface DeleteDealModalProps {
	deal: Purchase;
}

function DeleteDealModal({ deal }: DeleteDealModalProps) {
	const { modalState } = useContext(GlobalContext);
	const DealNameState = useCustomState("");

	async function deleteDeal() {
		useCustomRequest<{ message: string; data: Purchase }, undefined>({
			endpoint: `/purchases/${deal.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: () => {
				toast.success("Compra deletada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !DealNameState.value.trim() || !(DealNameState.value === deal.DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover Meta">
			<StyledDealModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${deal.DESCRICAO}' para confirmar`}
					value={DealNameState.value}
					onChange={(e) => {
						DealNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteDeal} disabled={disabled}>
					Confirmar
				</button>
			</StyledDealModal>
		</Modal>
	);
}

export default DeleteDealModal;
