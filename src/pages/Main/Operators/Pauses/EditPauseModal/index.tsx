import { useContext } from "react";
import { FaClock } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import Select from "../../../../../components/Select";
import { GlobalContext } from "../../../../../contexts/global";
import { PauseReason } from "../../../../../interfaces/PauseReason.type";
import cssVars from "../../../../../utils/cssVariables.vars";
import useCustomState from "../../../../../utils/customState.hook";
import StyledPauseModal from "./style";

interface EditPauseModalProps {
	pause: PauseReason;
	update: (data: PauseReason) => void;
}

function EditPauseModal({ pause, update }: EditPauseModalProps) {
	const { modalState } = useContext(GlobalContext);
	const PauseState = useCustomState(pause);

	async function updatePause() {
		useCustomRequest<{ message: string; data: PauseReason }, { DESCRICAO: string }>({
			endpoint: `/pauses/${pause.CODIGO}`,
			requestData: PauseState.value,
			method: "patch",
			service: "users",
			onSuccess: (res) => {
				toast.success("Pausa atualizada com sucesso");
				modalState.reset();
				update(res.data);
			},
		});
	}

	const disabled =
		!PauseState.value.DESCRICAO ||
		!((PauseState.value.DESCRICAO.length || 0) < 25) ||
		!PauseState.value.PRODUTIVIDADE.trim() ||
		!PauseState.value.TEMPO_MAX_SEG ||
		!(PauseState.value.TEMPO_MAX_SEG > 0);

	return (
		<Modal modalState={modalState} title="Editar Pausa">
			<StyledPauseModal>
				<h2>Nome</h2>
				<Input
					{...defaultInput100}
					placeholder="Digite o nome da pausa"
					value={PauseState.value.DESCRICAO}
					onChange={(e) => {
						PauseState.set((prev) => ({ ...prev, DESCRICAO: e.target.value.trim() }));
					}}
				/>
				<h2>Tempo limite (seg.)</h2>
				<Input
					$color={cssVars.colorGrey[3]}
					$focusColor={cssVars.colorGrey[0]}
					$borderColor={cssVars.colorGrey[5]}
					$padding={[0.5, 0.5]}
					$fontSize={1}
					$width={"100%"}
					leftIcon={<FaClock />}
					rightIcon={null}
					defaultValue={pause.TEMPO_MAX_SEG}
					onChange={(e) => PauseState.set((prev) => ({ ...prev, TEMPO_MAX_SEG: +e.target.value }))}
					min={1}
					type="number"
				/>
				<h3> Produtividade </h3>
				<Select
					$color={cssVars.colorGrey[3]}
					$focusColor={cssVars.colorGrey[0]}
					$borderColor={cssVars.colorGrey[5]}
					$padding={[0.5, 0.5]}
					$fontSize={1}
					$width={"100%"}
					onChange={(e) => PauseState.set((prev) => ({ ...prev, PRODUTIVIDADE: e || "" }))}
					options={[
						{ name: "Sim", value: "SIM" },
						{ name: "Não", value: "NAO" },
					]}
					defaultValue={{ name: pause.PRODUTIVIDADE, value: pause.PRODUTIVIDADE }}
				/>
				<button onClick={updatePause} disabled={disabled}>
					Confirmar
				</button>
			</StyledPauseModal>
		</Modal>
	);
}

export default EditPauseModal;
