import { useContext } from "react";
import { FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { StateException } from "../../../../../interfaces/StateException.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteStateExceptionModal from "./DeleteStateExceptionsModal";

const ExceptionsStatesTable = () => {
	const { modalState } = useContext(GlobalContext);

	const exceptionClientsColumns: Array<TableColumn<StateException>> = [
		{
			key: "ESTADO",
			header: "Estado",
			width: 24,
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
	];

	return (
		<Table<StateException>
			className="display-table"
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={exceptionClientsColumns}
			tableName="Excessões de estados"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteStateExceptionModal state={row} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			requestEndpoint="/state-exceptions"
			service="campaigns"
		/>
	);
};

export default ExceptionsStatesTable;
