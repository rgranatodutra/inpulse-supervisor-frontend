import Table from "../../../../../components/Table"
import { Pause } from "../../../../../interfaces/Pause.type"
import breaksColumns from "./columns"

const BreaksTable = () => {
    return (
        <Table<Pause>
            $tableHeight="100%"
            $tableWidth="100%"
            $fontSize={0.75}
            columns={breaksColumns}
            tableName="Pausas realizadas"
            $modalFiltersWidth={40}
            requestEndpoint="/breaks"
            service="monitoring"
            enableAutoUpdate
        />
    );
}

export default BreaksTable;