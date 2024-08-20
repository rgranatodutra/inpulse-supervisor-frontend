import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { GlobalContext } from "../../../../contexts/global";
import { ButtonType2 } from "../../../../styles/buttons.style";
import AddResultsModal from "./AddResultsModal";
import ResultsTable from "./ResultsTable";
import StyledCampaignsResultsPage from "./style";

const ResultsPage = () => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledCampaignsResultsPage>
			<ButtonType2
				style={{ fontSize: "1rem", height: "1rem", boxSizing: "content-box" }}
				onClick={() => modalState.set(<AddResultsModal />)}
			>
				<FaCheck />
				Adicionar Resultado
			</ButtonType2>

			<ResultsTable />
		</StyledCampaignsResultsPage>
	);
};

export default ResultsPage;
