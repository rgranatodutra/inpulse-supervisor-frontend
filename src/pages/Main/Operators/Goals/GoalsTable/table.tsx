import { useContext } from "react";
import { FaCalendar, FaHeadset, FaPencil, FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { Goal } from "../../../../../interfaces/Goal.type";
import { User } from "../../../../../interfaces/User.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import months from "../../../../../utils/months.array";
import DeleteGoalModal from "../DeleteGoalsModal";
import EditGoalModal from "../EditGoalsModal";

interface GoalsTableProps {
	users: User[];
}

function GoalsTable({ users }: GoalsTableProps) {
	const { modalState } = useContext(GlobalContext);

	const goalColumns: TableColumn<Goal>[] = [
		{
			key: "CODIGO",
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
			key: "OPERADOR",
			header: "Operador",
			format: (row) => {
				return row.NOME;
			},
			width: 24,
			filter: {
				type: "multi-select",
				width: "20rem",
				icon: <FaHeadset />,
				options: users.map((u) => ({ name: u.NOME, value: u.CODIGO })),
			},
		},
		{
			key: "MES",
			header: "Data",
			format: (row) => {
				return `${months[+row.MES - 1]}/${row.ANO}`;
			},
			width: 24,
			filter: {
				type: "multi-select",
				width: "20rem",
				icon: <FaCalendar />,
				options: months.map((m, i) => ({ name: m, value: i + 1 })),
			},
		},
		{
			key: "VALOR_META",
			header: "Meta",
			width: 24,
			format: (row) => {
				return `${row.VALOR_META} R$`;
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
						modalState.set(<EditGoalModal goal={row} users={users} />);
					}}
				>
					<FaPencil />
				</ButtonType3>,
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteGoalModal goal={row} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			columns={goalColumns}
			requestEndpoint="/goals"
			tableName="Metas"
			service="users"
		/>
	);
}

export default GoalsTable;
