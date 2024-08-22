import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
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

	async function updateCampaign() {
		useCustomRequest<{ message: string; data: Campaign }, Partial<Campaign>>({
			endpoint: `/campaigns/${campaign.CODIGO}`,
			requestData: editedCampaignState.value,
			method: "patch",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Campanha atualizada com sucesso");
				modalState.reset();
			},
		});
	}

	return (
		<Modal modalState={modalState} title="Editar Campanha">
			<StyledUnitModal>
				<Input {...defaultInput100} disabled type="text" defaultValue={campaign.NOME} label="Nome" />
				<Input
					{...defaultInput100}
					type="datetime-local"
					defaultValue={campaign.DATA_INI?.slice(0, 19)}
					label="Data"
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, DATA_INI: e.target.value || undefined }))}
				/>
				<Input {...defaultInput50} type="number" defaultValue={campaign.PRIORIDADE} disabled label="Prioridade" />
				<Input {...defaultInput50} disabled type="text" defaultValue={campaign.TIPO} label="Tipo" />

				<Input
					{...defaultInput100}
					type="number"
					placeholder="Digite o tempo máximo da chamada (segundos)"
					label="Tempo máximo"
					defaultValue={editedCampaignState.value.MAX_RESPOSTA}
					onChange={(e) => editedCampaignState.set((prev) => ({ ...prev, MAX_RESPOSTA: +e.target.value || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Pausada?"
					label="Pausada?"
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
					label="Pausar ligações"
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
				<ButtonType2 onClick={() => updateCampaign()} type="button">
					<FaCheck />
					Salvar alterações
				</ButtonType2>
			</StyledUnitModal>
		</Modal>
	);
}

export default EditCampaignModal;
