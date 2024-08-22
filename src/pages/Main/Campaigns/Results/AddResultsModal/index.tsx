import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import { defaultInput100, defaultSelect100, defaultSelect50 } from "../../../../../components-variants/defaultInputs";
import Input from "../../../../../components/Input";
import Modal from "../../../../../components/Modal";
import Select from "../../../../../components/Select";
import { GlobalContext } from "../../../../../contexts/global";
import { Result } from "../../../../../interfaces/Result.type";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledResultModal from "./style";

function AddResultsModal() {
	const { modalState } = useContext(GlobalContext);
	const newResult = useCustomState<Partial<Result>>({});

	async function addResult() {
		useCustomRequest<{ message: string; data: Result }, Partial<Result>>({
			endpoint: "/results",
			requestData: newResult.value,
			method: "post",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Resultado adicionado com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled =
		!newResult.value ||
		!newResult.value.NOME ||
		!(newResult.value.NOME.trim().length > 0) ||
		!newResult.value.ECONTATO ||
		!newResult.value.PESQUISA_SATISFACAO ||
		!newResult.value.QTDE_FIDELIZARCOTACAO ||
		!(newResult.value.QTDE_FIDELIZARCOTACAO > 0) ||
		!newResult.value.CANCELAPROPOSTA;

	const selectOptions = [
		{ name: "Não", value: "NAO" },
		{ name: "Sim", value: "SIM" },
	];

	return (
		<Modal modalState={modalState} title="Adicionar resultado">
			<StyledResultModal>
				<Input
					{...defaultInput100}
					type="text"
					placeholder="Digite o nome"
					maxLength={50}
					onChange={(e) => newResult.set((prev) => ({ ...prev, NOME: e.target.value.trim() || undefined }))}
				/>
				<Select
					{...defaultSelect100}
					placeholder="Selecione o tipo"
					options={[
						{ name: "ATIVO", value: "ATIVO" },
						{ name: "RECEP", value: "RECEP" },
						{ name: "AMBOS", value: "AMBOS" },
					]}
					onChange={(e) => newResult.set((prev) => ({ ...prev, TIPO: e || undefined }))}
				/>

				<Select
					{...defaultSelect50}
					placeholder="Sucesso?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, ESUCESSO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Venda?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, EVENDA: e || undefined }))}
				/>
				<Input
					{...defaultInput100}
					placeholder="Nome da ação"
					maxLength={100}
					onChange={(e) => newResult.set((prev) => ({ ...prev, NOME_ACAO: e.target.value.trim() || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Contato?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, ECONTATO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Selecione a prioridade"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, PRIORIDADE: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Proposta?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, PROPOSTA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Fidelizar cotação?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, FIDELIZARCOTACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Pesquisa de satisfação?"
					options={[
						{ name: "Sim", value: "S" },
						{ name: "Não", value: "N" },
					]}
					onChange={(e) => newResult.set((prev) => ({ ...prev, PESQUISA_SATISFACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Pedido?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, EPEDIDO: e || undefined }))}
				/>

				<Input
					{...defaultInput100}
					type="number"
					min={0}
					placeholder="Quantidade de fidelização"
					onChange={(e) => newResult.set((prev) => ({ ...prev, QTDE_FIDELIZARCOTACAO: +e.target.value || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Alterar duração?"
					options={[
						{ name: "Sim", value: "S" },
						{ name: "Não", value: "N" },
					]}
					onChange={(e) => newResult.set((prev) => ({ ...prev, ALTERA_DURACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Cancelar proposta?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, CANCELAPROPOSTA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Utilizar agenda?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, UTILIZAR_AGENDA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Compra?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, ECOMPRA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Negociação?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, ENEGOCIACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Não é compra?"
					options={selectOptions}
					onChange={(e) => newResult.set((prev) => ({ ...prev, NAOECOMPRA: e || undefined }))}
				/>

				<ButtonType2 disabled={disabled} onClick={() => addResult()} type="button">
					<FaCheck />
					Adicionar resultado
				</ButtonType2>
			</StyledResultModal>
		</Modal>
	);
}

export default AddResultsModal;
