import Modal from "../../../../../components/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import Input from "../../../../../components/Input";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import useCustomState from "../../../../../utils/customState.hook";
import StyledBrandModal from "./style";
import { customRequest } from "../../../../../api";
import { toast } from "react-toastify";
import { Brand } from "../../../../../interfaces/Brand.type";

interface DeleteBrandModalProps {
	brand: Brand;
	updateOnDelete: (data: Brand) => void;
}

function DeleteBrandModal({ brand, updateOnDelete }: DeleteBrandModalProps) {
	const { modalState } = useContext(GlobalContext);
	const BrandNameState = useCustomState("");
	const buttonState = useCustomState(false);

	async function deleteBrand() {
		customRequest<{ message: string; data: Brand }, { DESCRICAO: string }>({
			endpoint: `/brands/${brand.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: (res) => {
				toast.success(res.message);
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
				{(buttonState.value && (
					<button onClick={deleteBrand}>Confirmar</button>
				)) || <button disabled>Confirmar</button>}
			</StyledBrandModal>
		</Modal>
	);
}

export default DeleteBrandModal;
