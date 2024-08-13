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

interface EditBrandModalProps {
	brand: Brand;
	update: (data: Brand) => void;
}

function EditBrandModal({ brand, update }: EditBrandModalProps) {
	const { modalState } = useContext(GlobalContext);
	const BrandNameState = useCustomState(brand.DESCRICAO);

	async function updateName() {
		useCustomRequest<{ message: string; data: Brand }, { DESCRICAO: string }>({
			endpoint: `/brands/${brand.CODIGO}`,
			requestData: { DESCRICAO: BrandNameState.value.trim() },
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
		<Modal modalState={modalState} title="Editar Marca">
			<StyledBrandModal>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome da marca"
					value={BrandNameState.value}
					onChange={(e) => {
						BrandNameState.set(e.target.value);
					}}
				/>
				<button onClick={updateName}>Confirmar</button>
			</StyledBrandModal>
		</Modal>
	);
}

export default EditBrandModal;
