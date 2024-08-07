import Table from "../../../../../components/Table"
import { Unit } from "../../../../../interfaces/Unit.type"
import unitsColumns from "./columns"

const UnitsTable = () => {
    return (
        <Table<Unit>
            $tableHeight="100%"
            $tableWidth="100%"
            $fontSize={0.75}
            columns={unitsColumns}
            tableName="Unidades"
            $modalFiltersWidth={41}
            actions={() => []}
            requestEndpoint="/units"
            service="customers"
        />
    );
}

export default UnitsTable;