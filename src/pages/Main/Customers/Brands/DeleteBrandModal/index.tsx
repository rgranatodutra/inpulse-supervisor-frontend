import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Brand } from "../../../../../interfaces/Brand.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledBrandModal from "./style";

interface DeleteBrandModalProps {
	brand: Brand;
	updateOnDelete: (data: Brand) => void;
}

function DeleteBrandModal({ brand, updateOnDelete }: DeleteBrandModalProps) {
	const { modalState } = useContext(GlobalContext);
	const BrandNameState = useCustomState("");
	const buttonState = useCustomState(false);

	async function deleteBrand() {
		useCustomRequest<{ message: string; data: Brand }, { DESCRICAO: string }>({
			endpoint: `/brands/${brand.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: () => {
				toast.success("Marca deletada com sucesso");
				modalState.reset();
				updateOnDelete(brand);
			},
		});
	}

	return (
		<Modal modalState={modalState} title="Remover Marca">
			<StyledBrandModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${brand.DESCRICAO}' para confirmar`}
					value={BrandNameState.value}
					onChange={(e) => {
						BrandNameState.set(e.target.value);
						if (e.target.value === brand.DESCRICAO) {
							buttonState.set(true);
						} else if (buttonState.value != false) {
							buttonState.set(false);
						}
					}}
				/>
				{(buttonState.value && <button onClick={deleteBrand}>Confirmar</button>) || <button disabled>Confirmar</button>}
			</StyledBrandModal>
		</Modal>
	);
}

export default DeleteBrandModal;
