import { useContext } from "react";
import { FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { SegmentException } from "../../../../../interfaces/SegmentException.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteSegmentExceptionModal from "./DeleteSegmentExceptionsModal";

const ExceptionsSegmentsTable = () => {
	const { modalState } = useContext(GlobalContext);

	const exceptionClientsColumns: Array<TableColumn<SegmentException>> = [
		{
			key: "CODIGO",
			header: "Código",
			primarykey: true,
			width: 7,
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
		{
			key: "SEGMENTO",
			header: "Código do segmento",
			width: 12,
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
		{
			key: "NOME",
			header: "Nome do segmento",
			width: 24,
			filter: {
				type: "input",
				width: "20rem",
			},
		},
	];

	return (
		<Table<SegmentException>
			className="display-table"
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={exceptionClientsColumns}
			tableName="Excessões de segmentos"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteSegmentExceptionModal segment={row} />);
					}}
				>
					<FaTrash />
				</ButtonType3>,
			]}
			requestEndpoint="/segment-exceptions"
			service="campaigns"
		/>
	);
};

export default ExceptionsSegmentsTable;
