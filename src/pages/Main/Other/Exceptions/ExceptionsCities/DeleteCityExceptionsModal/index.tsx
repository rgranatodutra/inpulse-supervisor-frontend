import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../../api";
import { defaultInput100 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import Modal from "../../../../../../components/Modal";
import { GlobalContext } from "../../../../../../contexts/global";
import { CityException } from "../../../../../../interfaces/CityException.type";
import useCustomState from "../../../../../../utils/customState.hook";
import StyledDealModal from "./style";

interface DeleteCityExceptionModal {
	city: CityException;
}

function DeleteCityExceptionModal({ city }: DeleteCityExceptionModal) {
	const { modalState } = useContext(GlobalContext);
	const cityName = useCustomState("");

	async function deleteException() {
		useCustomRequest({
			endpoint: `/city-exceptions/${city.CIDADE}`,
			method: "delete",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Excessão deletada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = !cityName.value.trim() || !(cityName.value === city.CIDADE);

	return (
		<Modal modalState={modalState} title="Remover Excessão">
			<StyledDealModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${city.CIDADE}' para confirmar`}
					onChange={(e) => {
						cityName.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteException} disabled={disabled}>
					Confirmar
				</button>
			</StyledDealModal>
		</Modal>
	);
}

export default DeleteCityExceptionModal;
