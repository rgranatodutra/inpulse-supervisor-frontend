import { useContext } from "react";
import { FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { CityException } from "../../../../../interfaces/CityException.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteCityExceptionModal from "./DeleteCityExceptionsModal";

const ExceptionsCitiesTable = () => {
	const { modalState } = useContext(GlobalContext);

	const exceptionClientsColumns: Array<TableColumn<CityException>> = [
		{
			key: "CIDADE",
			header: "Cidade",
			width: 24,
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
	];

	return (
		<Table<CityException>
			className="display-table"
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={exceptionClientsColumns}
			tableName="Excessões de cidade"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteCityExceptionModal city={row} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			requestEndpoint="/city-exceptions"
			service="campaigns"
		/>
	);
};

export default ExceptionsCitiesTable;
