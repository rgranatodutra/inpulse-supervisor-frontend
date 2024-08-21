import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100, defaultInput50, defaultSelect100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import Select from "../../../../../components/Select";
import { GlobalContext } from "../../../../../contexts/global";
import { Purchase } from "../../../../../interfaces/Purchase.type";
import { User } from "../../../../../interfaces/User.type";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledDealModal from "./style";

interface EditDealModalProps {
	deal: Purchase;
	users: User[];
}

function EditDealModal({ deal, users }: EditDealModalProps) {
	const { modalState } = useContext(GlobalContext);
	const editedDealState = useCustomState<Partial<Purchase>>({ ...deal, DATA: deal.DATA.slice(0, 10) });

	async function updateDeal() {
		useCustomRequest<{ message: string; data: Purchase }, Partial<Purchase>>({
			endpoint: `/purchases/${deal.CODIGO}`,
			requestData: editedDealState.value,
			method: "patch",
			service: "customers",
			onSuccess: () => {
				toast.success("Compra atualizada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled =
		!editedDealState.value.VALOR ||
		!(editedDealState.value.VALOR > 0) ||
		!editedDealState.value.CLIENTE ||
		!editedDealState.value.DESCRICAO?.length ||
		!(editedDealState.value.DESCRICAO.trim().length > 0) ||
		!editedDealState.value.FORMA_PGTO?.length ||
		!(editedDealState.value.FORMA_PGTO.trim().length > 0);

	const options = users.map((u) => ({ name: u.NOME, value: u.CODIGO }));

	const operator = users.find((u) => u.CODIGO === deal.OPERADOR);

	return (
		<Modal modalState={modalState} title="Editar Compra">
			<StyledDealModal>
				<Select
					{...defaultSelect100}
					options={options}
					placeholder="Selecione o cliente"
					defaultValue={{ name: `${deal.CLIENTE}`, value: deal.CLIENTE }}
					onChange={(e) => editedDealState.set((prev) => ({ ...prev, CLIENTE: e || undefined }))}
				/>

				<Select
					{...defaultSelect100}
					leftIcon={null}
					options={options}
					placeholder="Selecione o operador"
					defaultValue={{ name: operator?.NOME ? `${operator.NOME}` : "Não existe", value: deal.OPERADOR }}
					onChange={(e) => editedDealState.set((prev) => ({ ...prev, OPERADOR: e || undefined }))}
				/>

				<Input
					{...defaultInput100}
					rightIcon={null}
					type="text"
					placeholder="Digite uma descrição"
					onChange={(e) => editedDealState.set((prev) => ({ ...prev, DESCRICAO: e.target.value.trim() || undefined }))}
					defaultValue={deal.DESCRICAO}
				/>

				<Input
					{...defaultInput50}
					leftIcon={null}
					rightIcon={null}
					onChange={(e) => editedDealState.set((prev) => ({ ...prev, DATA: e.target.value || "0000-00-00" }))}
					type="date"
					defaultValue={deal.DATA}
				/>

				<Input
					{...defaultInput50}
					type="number"
					min={0}
					onChange={(e) => editedDealState.set((prev) => ({ ...prev, VALOR: +e.target.value || undefined }))}
					defaultValue={deal.VALOR}
				/>

				<Input
					{...defaultInput100}
					type="text"
					placeholder="Digite a forma de pagamento"
					defaultValue={deal.FORMA_PGTO}
					onChange={(e) => editedDealState.set((prev) => ({ ...prev, FORMA_PGTO: e.target.value.trim() || undefined }))}
				/>

				<ButtonType2 disabled={disabled} onClick={() => updateDeal()} type="button">
					<FaCheck />
					Adicionar Compra
				</ButtonType2>
			</StyledDealModal>
		</Modal>
	);
}

export default EditDealModal;
