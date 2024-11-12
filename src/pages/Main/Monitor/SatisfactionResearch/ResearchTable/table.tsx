import { useContext } from "react";
import { FaPencil, FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { SatisfactionResearch } from "../../../../../interfaces/SatisfactionResearch.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteGoalModal from "../DeleteResearchModal";
import EditGoalModal from "../EdittResearchModal";

function GoalsTable() {
	const { modalState } = useContext(GlobalContext);

	const goalColumns: TableColumn<SatisfactionResearch>[] = [
		{
			key: "PESQSAT_CODIGO",
			header: "Código",
			width: 6,
			primarykey: true,
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
		{
			key: "PESQ_DESCRICAO",
			header: "Descrição",
			width: 24,
			filter: {
				type: "input",
				width: "20rem",
			},
		},
	];

	return (
		<Table
			className="display-table"
			$modalFiltersWidth={41}
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={1}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<EditGoalModal research={row} />);
					}}
				>
					<FaPencil />
				</ButtonType3>,
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteGoalModal research={row} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			columns={goalColumns}
			requestEndpoint="/satisfactionResearchs"
			tableName="Metas"
			service="monitoring"
		/>
	);
}

export default GoalsTable;
