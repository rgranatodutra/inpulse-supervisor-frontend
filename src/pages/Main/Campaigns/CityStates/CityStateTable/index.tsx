import { useContext } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { CityState } from "../../../../../interfaces/CityState.type";
import DeleteCityStateModal from "../DeleteCityStateModal";
import EditCityStateModal from "../EditCityStateModal";

const CityStateTable = () => {
	const { modalState } = useContext(GlobalContext);

	const cityColumns: Array<TableColumn<CityState>> = [
		{
			key: "UF",
			width: 7,
			header: "Unidade federativa",
			primarykey: true,
			alignContent: "start",
			filter: {
				type: "input",
				width: "19.5rem",
			},
		},
		{
			key: "NOME",
			header: "Nome",
			width: 12,
			filter: {
				type: "input",
				width: "19.5rem",
			},
		},
		{
			key: "ORDEM",
			header: "Ordem",
			width: 6,
			filter: {
				type: "input",
				width: "19.5rem",
			},
		},
		{
			key: "FUSOHORARIO",
			header: "Fuso horario",
			width: 8,
			filter: {
				type: "input",
				width: "19.5rem",
			},
		},
	];

	return (
		<Table<CityState>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={cityColumns}
			tableName="Estados"
			actions={(row) => [
				<FaPencil onClick={() => modalState.set(<EditCityStateModal cityState={row} />)} />,
				<FaTrash onClick={() => modalState.set(<DeleteCityStateModal cityState={row} />)} />,
			]}
			$modalFiltersWidth={40}
			requestEndpoint="/ufStates?perPage=27"
			service="campaigns"
		/>
	);
};

export default CityStateTable;
