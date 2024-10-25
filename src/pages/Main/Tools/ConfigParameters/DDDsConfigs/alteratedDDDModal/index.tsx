import { useContext } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../../api";
import { defaultInput100 } from "../../../../../../components-variants/defaultInputs";
import Modal from "../../../../../../components/Modal";
import Select from "../../../../../../components/Select";
import { GlobalContext } from "../../../../../../contexts/global";
import useCustomState from "../../../../../../utils/customState.hook";
import StyledDealModal from "./style";

type cityDDD = {
	CODIGO: number;
	CIDADE?: string;
	DDD?: string;
	USAR?: string;
};

interface AlteratedDDDModalProps {
	cityDDD: cityDDD;
}

function AlteratedDDDModal({ cityDDD }: AlteratedDDDModalProps) {
	const { modalState } = useContext(GlobalContext);
	const useDDD = useCustomState<string | undefined | null>(cityDDD.USAR);

	async function deleteException() {
		useCustomRequest({
			endpoint: `/cityDDDs/${cityDDD.CODIGO}`,
			method: "patch",
			requestData: { USAR: useDDD.value },
			service: "campaigns",
			onSuccess: () => {
				toast.success("Parametro atualizado com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled = useDDD.value === null || useDDD.value === undefined;

	return (
		<Modal modalState={modalState} title="Utilizar DDD">
			<StyledDealModal>
				<Select
					{...defaultInput100}
					options={[
						{ name: "Sim", value: "SIM" },
						{ name: "Não", value: "NAO" },
					]}
					onChange={(e) => {
						useDDD.set(e);
					}}
					placeholder={cityDDD.USAR === "SIM" ? "Sim" : "Não"}
				/>

				<button onClick={deleteException} disabled={disabled}>
					Confirmar
				</button>
			</StyledDealModal>
		</Modal>
	);
}

export default AlteratedDDDModal;
