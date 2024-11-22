import { useContext } from "react";
import { FaPencil, FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { City } from "../../../../../interfaces/City.type";
import DeleteCityModal from "../DeleteCityModal";
import EditCityModal from "../EditCityModal";

const CityTable = () => {
	const { modalState } = useContext(GlobalContext);

	const cityColumns: Array<TableColumn<City>> = [
		{
			key: "CODIGO",
			width: 7,
			header: "Código",
			primarykey: true,
			alignContent: "start",
			filter: {
				type: "input",
				width: "19.5rem",
				icon: <FaTag />,
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
			key: "UF",
			header: "Unidade federativa",
			width: 12,
			filter: {
				type: "input",
				width: "19.5rem",
			},
		},
	];

	return (
		<Table<City>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={cityColumns}
			tableName="Cidades"
			actions={(row) => [
				<FaPencil onClick={() => modalState.set(<EditCityModal city={row} />)} />,
				<FaTrash onClick={() => modalState.set(<DeleteCityModal city={row} />)} />,
			]}
			$modalFiltersWidth={40}
			requestEndpoint="/cities"
			service="campaigns"
		/>
	);
};

export default CityTable;
