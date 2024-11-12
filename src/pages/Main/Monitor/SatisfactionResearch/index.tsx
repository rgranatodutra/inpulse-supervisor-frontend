import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import { SatisfactionResearch } from "../../../../interfaces/SatisfactionResearch.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import GoalsTable from "./ResearchTable/table";
import StyledOperatorsGoalsPage from "./style";

const SatisfactionResearchPage = () => {
	const research = useCustomState<Partial<SatisfactionResearch>>({});

	const addResearch = () => {
		useCustomRequest<{ message: String; data: SatisfactionResearch }, Partial<SatisfactionResearch>>({
			endpoint: "/satisfactionResearchs",
			method: "post",
			service: "monitoring",
			requestData: research.value,
			onSuccess: () => {
				toast.success("Nova pesquisa adicionada");
			},
		});
	};

	const disabled = !research.value.PESQ_DESCRICAO || !research.value.PESQ_DESCRICAO.trim();

	return (
		<StyledOperatorsGoalsPage>
			<h2> Monitor {"->"} Pesquisa de satisfação </h2>
			<form>
				<div style={{ width: "10rem" }}>
					<h3> Descrição da pesquisa</h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 0.5]}
						$fontSize={1}
						$width={"100%"}
						type="text"
						placeholder="Descrição..."
						onChange={(e) => research.set((prev) => ({ ...prev, PESQ_DESCRICAO: e.target.value.trim() }))}
					/>
				</div>
				<ButtonType2
					style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}
					disabled={disabled}
					type="button"
					onClick={() => addResearch()}
				>
					<FaCheck />
					Adicionar
				</ButtonType2>
			</form>

			<GoalsTable />
		</StyledOperatorsGoalsPage>
	);
};

export default SatisfactionResearchPage;
