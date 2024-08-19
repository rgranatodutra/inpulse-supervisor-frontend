import { useContext } from "react";
import { toast } from "react-toastify";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { Unit } from "../../../../../interfaces/Unit.type";
import useCustomState from "../../../../../utils/customState.hook";
import StyledUnitModal from "./style";

interface DeleteUnitModalProps {
	unit: Unit;
}

function DeleteUnitModal({ unit }: DeleteUnitModalProps) {
	const { modalState } = useContext(GlobalContext);
	const UnitNameState = useCustomState("");

	/* async function deleteUnit() {
		useCustomRequest<{ message: string; data: Unit }, undefined>({
			endpoint: `/purchases/${unit.CODIGO}`,
			method: "delete",
			service: "customers",
			onSuccess: () => {
				toast.success("Compra deletada com sucesso");
				modalState.reset();
			},
		});
	} */

	function deleteUnit() {
		console.log(UnitNameState);
		toast.success("Unidade deletada com sucesso");
	}

	const disabled = !UnitNameState.value.trim() || !(UnitNameState.value === unit.DESCRICAO);

	return (
		<Modal modalState={modalState} title="Remover Unidade">
			<StyledUnitModal>
				<Input
					{...defaultInput100}
					placeholder={`Digite '${unit.DESCRICAO}' para confirmar`}
					onChange={(e) => {
						UnitNameState.set(e.target.value.trim());
					}}
				/>
				<button onClick={deleteUnit} disabled={disabled}>
					Confirmar
				</button>
			</StyledUnitModal>
		</Modal>
	);
}

export default DeleteUnitModal;
