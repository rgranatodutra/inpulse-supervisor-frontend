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

interface EditBrandModalProps {
	brand: Brand;
	update: (data: Brand) => void;
}

function EditBrandModal({ brand, update }: EditBrandModalProps) {
	const { modalState } = useContext(GlobalContext);
	const BrandNameState = useCustomState(brand.DESCRICAO);

	async function updateName() {
		customRequest<{ message: string; data: Brand }, { DESCRICAO: string }>({
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
