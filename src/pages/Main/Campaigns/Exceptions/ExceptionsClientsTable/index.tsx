import { useContext } from "react";
import { FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import CustomerException from "../../../../../interfaces/CustomerException.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteClientExceptionModal from "./DeleteClientsExceptionsModal";

const ExceptionsClientsTable = () => {
	const { modalState } = useContext(GlobalContext);

	const exceptionClientsColumns: Array<TableColumn<CustomerException>> = [
		{
			key: "COD_ERP",
			header: "Código ERP",
			width: 7,
			primarykey: true,
			alignContent: "start",
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
		{
			key: "RAZAO",
			header: "Razão social",
			width: 24,
			format: (row) => {
				return row.RAZAO ? row.RAZAO : "Não encontrado";
			},
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
	];

	return (
		<Table<CustomerException>
			className="display-table"
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={exceptionClientsColumns}
			tableName="Excessões de cliente"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteClientExceptionModal client={row} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			requestEndpoint="/customer-exceptions"
			service="campaigns"
		/>
	);
};

export default ExceptionsClientsTable;
