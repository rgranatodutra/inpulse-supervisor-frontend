import { FaCheck } from "react-icons/fa6";
import { defaultInput100 } from "../../../../components-variants/defaultInputs";
import Input from "../../../../components/Input";
import { Unit } from "../../../../interfaces/Unit.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import UnitsTable from "./UnitsTable";
import StyledCampaignsUnitsPage from "./style";

const UnitsPage = () => {
	const newUnit = useCustomState<Partial<Unit>>({});

	function addUnit() {
		console.log(newUnit.value);
	}

	const disabled =
		!newUnit.value ||
		!newUnit.value.DESCRICAO ||
		!(newUnit.value.DESCRICAO.trim().length > 2) ||
		!newUnit.value.INATIVOS_ANTIGOS ||
		!newUnit.value.INATIVOS_RECENTES ||
		!(newUnit.value.INATIVOS_ANTIGOS > 0) ||
		!(newUnit.value.INATIVOS_RECENTES > 0);

	return (
		<StyledCampaignsUnitsPage>
			<h1> Cadastro de Unidades </h1>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome </h3>
					<Input
						{...defaultInput100}
						type="text"
						placeholder="Digite o nome"
						onChange={(e) => newUnit.set((prev) => ({ ...prev, DESCRICAO: e.target.value.trim() || undefined }))}
					/>
				</div>
				<div style={{ width: "18rem" }}>
					<h3> E-Mail </h3>
					<Input
						{...defaultInput100}
						type="email"
						placeholder="Digite o E-Mail de contato"
						onChange={(e) => newUnit.set((prev) => ({ ...prev, EMAIL: e.target.value.trim() || undefined }))}
					/>
				</div>
				<div style={{ width: "18rem" }}>
					<h3> Contato </h3>
					<Input
						{...defaultInput100}
						type="input"
						placeholder="Digite as informações de contato"
						onChange={(e) => newUnit.set((prev) => ({ ...prev, CONTATO_MAIL: e.target.value.trim() || undefined }))}
					/>
				</div>
				<div style={{ width: "10rem" }}>
					<h3> Inativos recentes </h3>
					<Input
						{...defaultInput100}
						type="number"
						placeholder="Dias de inatividade"
						onChange={(e) => newUnit.set((prev) => ({ ...prev, INATIVOS_RECENTES: +e.target.value || undefined }))}
					/>
				</div>
				<div style={{ width: "10rem" }}>
					<h3> Inativos antigos </h3>
					<Input
						{...defaultInput100}
						type="number"
						placeholder="Dias de inatividade"
						onChange={(e) => newUnit.set((prev) => ({ ...prev, INATIVOS_ANTIGOS: +e.target.value || undefined }))}
					/>
				</div>
				<ButtonType2
					style={{ fontSize: "1rem", height: "1rem", boxSizing: "content-box" }}
					disabled={disabled}
					onClick={() => addUnit()}
					type="button"
				>
					<FaCheck />
					Adicionar Unidade
				</ButtonType2>
			</form>

			<UnitsTable />
		</StyledCampaignsUnitsPage>
	);
};

export default UnitsPage;
