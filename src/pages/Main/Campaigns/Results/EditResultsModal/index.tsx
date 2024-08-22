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

interface EditResultsModalProps {
	result: Result;
}

function EditResultsModal({ result }: EditResultsModalProps) {
	const { modalState } = useContext(GlobalContext);
	const alteredResult = useCustomState<Partial<Result>>(result);

	async function editResult() {
		useCustomRequest<{ message: string; data: Result }, Partial<Result>>({
			endpoint: `/results/${result.CODIGO}`,
			requestData: alteredResult.value,
			method: "patch",
			service: "campaigns",
			onSuccess: () => {
				toast.success("Resultado atualizada com sucesso");
				modalState.reset();
			},
		});
	}

	const disabled =
		!alteredResult.value ||
		!alteredResult.value.NOME ||
		!(alteredResult.value.NOME.trim().length > 0) ||
		!alteredResult.value.ECONTATO ||
		!alteredResult.value.PESQUISA_SATISFACAO ||
		!alteredResult.value.QTDE_FIDELIZARCOTACAO ||
		!(alteredResult.value.QTDE_FIDELIZARCOTACAO > 0) ||
		!alteredResult.value.CANCELAPROPOSTA;

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
					defaultValue={alteredResult.value.NOME}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, NOME: e.target.value.trim() || undefined }))}
				/>
				<Select
					{...defaultSelect100}
					placeholder="Selecione o tipo"
					defaultValue={{
						name: alteredResult.value.TIPO ? alteredResult.value.TIPO : "Não cadrastrado",
						value: alteredResult.value.TIPO,
					}}
					options={[
						{ name: "ATIVO", value: "ATIVO" },
						{ name: "RECEP", value: "RECEP" },
						{ name: "AMBOS", value: "AMBOS" },
					]}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, TIPO: e || undefined }))}
				/>

				<Select
					{...defaultSelect50}
					placeholder="Sucesso?"
					options={selectOptions}
					defaultValue={{
						name: alteredResult.value.ESUCESSO ? alteredResult.value.ESUCESSO : "Não cadrastrado",
						value: alteredResult.value.ESUCESSO,
					}}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, ESUCESSO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Venda?"
					defaultValue={{
						name: alteredResult.value.EVENDA ? alteredResult.value.EVENDA : "Não cadrastrado",
						value: alteredResult.value.EVENDA,
					}}
					options={selectOptions}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, EVENDA: e || undefined }))}
				/>
				<Input
					{...defaultInput100}
					placeholder="Nome da ação"
					maxLength={100}
					defaultValue={alteredResult.value.NOME_ACAO}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, NOME_ACAO: e.target.value.trim() || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Contato?"
					defaultValue={{
						name: alteredResult.value.ECONTATO ? alteredResult.value.ECONTATO : "Não cadrastrado",
						value: alteredResult.value.ECONTATO,
					}}
					options={selectOptions}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, ECONTATO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Selecione a prioridade"
					options={selectOptions}
					defaultValue={{
						name: alteredResult.value.PRIORIDADE ? alteredResult.value.PRIORIDADE : "Não cadrastrado",
						value: alteredResult.value.PRIORIDADE,
					}}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, PRIORIDADE: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Proposta?"
					options={selectOptions}
					defaultValue={{
						name: alteredResult.value.PROPOSTA ? alteredResult.value.PROPOSTA : "Não cadrastrado",
						value: alteredResult.value.PROPOSTA,
					}}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, PROPOSTA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Fidelizar cotação?"
					options={selectOptions}
					defaultValue={{
						name: alteredResult.value.FIDELIZARCOTACAO ? alteredResult.value.FIDELIZARCOTACAO : "Não cadrastrado",
						value: alteredResult.value.FIDELIZARCOTACAO,
					}}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, FIDELIZARCOTACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Pesquisa de satisfação?"
					defaultValue={{
						name: alteredResult.value.PESQUISA_SATISFACAO ? alteredResult.value.PESQUISA_SATISFACAO : "Não cadrastrado",
						value: alteredResult.value.PESQUISA_SATISFACAO,
					}}
					options={[
						{ name: "Sim", value: "s" },
						{ name: "Não", value: "n" },
					]}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, PESQUISA_SATISFACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Pedido?"
					options={selectOptions}
					defaultValue={{
						name: alteredResult.value.EPEDIDO ? alteredResult.value.EPEDIDO : "Não cadrastrado",
						value: alteredResult.value.EPEDIDO,
					}}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, EPEDIDO: e || undefined }))}
				/>

				<Input
					{...defaultInput100}
					type="number"
					min={0}
					placeholder="Quantidade de fidelização"
					defaultValue={alteredResult.value.QTDE_FIDELIZARCOTACAO}
					onChange={(e) =>
						alteredResult.set((prev) => ({ ...prev, QTDE_FIDELIZARCOTACAO: +e.target.value || undefined }))
					}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Alterar duração?"
					defaultValue={{
						name: alteredResult.value.ALTERA_DURACAO ? alteredResult.value.ALTERA_DURACAO : "Não cadrastrado",
						value: alteredResult.value.ALTERA_DURACAO,
					}}
					options={[
						{ name: "Sim", value: "S" },
						{ name: "Não", value: "N" },
					]}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, ALTERA_DURACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Cancelar proposta?"
					defaultValue={{
						name: alteredResult.value.CANCELAPROPOSTA ? alteredResult.value.CANCELAPROPOSTA : "Não cadrastrado",
						value: alteredResult.value.CANCELAPROPOSTA,
					}}
					options={selectOptions}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, CANCELAPROPOSTA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Utilizar agenda?"
					defaultValue={{
						name: alteredResult.value.UTILIZAR_AGENDA ? alteredResult.value.UTILIZAR_AGENDA : "Não cadrastrado",
						value: alteredResult.value.UTILIZAR_AGENDA,
					}}
					options={selectOptions}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, UTILIZAR_AGENDA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Compra?"
					defaultValue={{
						name: alteredResult.value.ECOMPRA ? alteredResult.value.ECOMPRA : "Não cadrastrado",
						value: alteredResult.value.ECOMPRA,
					}}
					options={selectOptions}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, ECOMPRA: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Negociação?"
					defaultValue={{
						name: alteredResult.value.ENEGOCIACAO ? alteredResult.value.ENEGOCIACAO : "Não cadrastrado",
						value: alteredResult.value.ENEGOCIACAO,
					}}
					options={selectOptions}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, ENEGOCIACAO: e || undefined }))}
				/>
				<Select
					{...defaultSelect50}
					placeholder="Não é compra?"
					defaultValue={{
						name: alteredResult.value.NAOECOMPRA ? alteredResult.value.NAOECOMPRA : "Não cadrastrado",
						value: alteredResult.value.NAOECOMPRA,
					}}
					options={selectOptions}
					onChange={(e) => alteredResult.set((prev) => ({ ...prev, NAOECOMPRA: e || undefined }))}
				/>

				<ButtonType2 disabled={disabled} onClick={() => editResult()} type="button">
					<FaCheck />
					Alterar resultado
				</ButtonType2>
			</StyledResultModal>
		</Modal>
	);
}

export default EditResultsModal;
