import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import { defaultInput100, defaultInput50, defaultSelect50 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import Select from "../../../../../components/Select";
import { GlobalContext } from "../../../../../contexts/global";
import { Campaign } from "../../../../../interfaces/Campaign.type";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledUnitModal from "./style";

interface EditUnitModalProps {
	campaign: Campaign;
}

function EditCampaignModal({ campaign }: EditUnitModalProps) {
	const { modalState } = useContext(GlobalContext);
	const editedCampaignState = useCustomState<Partial<Campaign>>(campaign);

	/* async function updateUnit() {
		useCustomRequest<{ message: string; data: Purchase }, Partial<Purchase>>({
			endpoint: `/purchases/${unit.CODIGO}`,
			requestData: editedUnitState.value,
			method: "patch",
			service: "customers",
			onSuccess: () => {
				toast.success("Compra atualizada com sucesso");
				modalState.reset();
			},
		});
	} */

	function updateCampaign() {
		console.log(editedCampaignState.value);
		modalState.reset();
		toast.success("Campanha atualizada com sucesso");
	}

	const disabled =
		!editedCampaignState.value ||
		!editedCampaignState.value.NOME ||
		!(editedCampaignState.value.NOME.trim().length > 2);

	return (
		<Modal modalState={modalState} title="Editar Campanha">
			<StyledUnitModal>
				<Input
					{...defaultInput100}
					type="text"
					placeholder="Digite o nome"
					defaultValue={editedCampaignState.value.NOME}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, NOME: e.target.value.trim() || undefined }))}
				/>
				<Input
					{...defaultInput100}
					type="datetime-local"
					defaultValue={campaign.DATA_INI}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, DATA_INI: e.target.value || undefined }))}
				/>
				<Input
					{...defaultInput50}
					type="number"
					placeholder="Digite a prioridade"
					defaultValue={editedCampaignState.value.PRIORIDADE}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, PRIORIDADE: +e.target.value || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Selecione o tipo"
					options={[
						{ name: "ativo", value: "ATIVOS" },
						{ name: "Inat_R", value: "INAT_R" },
						{ name: "Inat_A", value: "INAT_A" },
						{ name: "Prospe", value: "PROSPE" },
					]}
					defaultValue={{
						name: editedCampaignState.value.TIPO ? editedCampaignState.value.TIPO : "Não cadastrado",
						value: editedCampaignState.value.TIPO,
					}}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, TIPO: e || undefined }))}
				/>
				<Input
					{...defaultInput100}
					type="number"
					placeholder="Digite o tempo máximo da chamada (segundos)"
					defaultValue={editedCampaignState.value.MAX_RESPOSTA}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, MAX_RESPOSTA: +e.target.value || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Pausada?"
					defaultValue={{
						name: editedCampaignState.value.PAUSADA ? editedCampaignState.value.PAUSADA : "Não cadastrado",
						value: editedCampaignState.value.PAUSADA,
					}}
					options={[
						{ name: "Não", value: "NAO" },
						{ name: "Sim", value: "SIM" },
					]}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, PAUSADA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Pausar ligações?"
					defaultValue={{
						name: editedCampaignState.value.PAUSAR_AG_PUBLICA
							? editedCampaignState.value.PAUSAR_AG_PUBLICA
							: "Não cadastrado",
						value: editedCampaignState.value.PAUSAR_AG_PUBLICA,
					}}
					options={[
						{ name: "Não", value: "NAO" },
						{ name: "Sim", value: "SIM" },
					]}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, PAUSAR_AG_PUBLICA: e || undefined }))}
				/>
				<ButtonType2 disabled={disabled} onClick={() => updateCampaign()} type="button">
					<FaCheck />
					Salvar alterações
				</ButtonType2>
			</StyledUnitModal>
		</Modal>
	);
}

export default EditCampaignModal;
