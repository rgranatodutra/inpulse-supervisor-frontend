import { useContext } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { GlobalContext } from "../../../../../contexts/global";
import { Result } from "../../../../../interfaces/Result.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteResultModal from "../DeleteResultsModal";
import EditResultsModal from "../EditResultsModal";
import ResultsColumns from "./columns";

const ResultsTable = () => {
	const { modalState } = useContext(GlobalContext);

	return (
		<Table<Result>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={ResultsColumns}
			tableName="Unidades"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<EditResultsModal result={row} />);
					}}
				>
					<FaPencil />
				</ButtonType3>,
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteResultModal result={row} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			requestEndpoint="/mockResults"
			service="mock"
		/>
	);
};

export default ResultsTable;
