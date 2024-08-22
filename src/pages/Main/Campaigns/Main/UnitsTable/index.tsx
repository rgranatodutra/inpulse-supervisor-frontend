import { useContext } from "react";
import { FaPencil } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { GlobalContext } from "../../../../../contexts/global";
import { Unit } from "../../../../../interfaces/Unit.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import EditUnitModal from "../EditUnitsModal";
import unitsColumns from "./columns";

const UnitsTable = () => {
	const { modalState } = useContext(GlobalContext);

	return (
		<Table<Unit>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={unitsColumns}
			tableName="Unidades"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<EditUnitModal unit={row} />);
					}}
				>
					<FaPencil />
				</ButtonType3>,
			]}
			requestEndpoint="/units"
			service="campaigns"
		/>
	);
};

export default UnitsTable;
