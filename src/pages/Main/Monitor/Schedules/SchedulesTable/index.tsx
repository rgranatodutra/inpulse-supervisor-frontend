import Table from "../../../../../components/Table";
import { Schedule } from "../../../../../interfaces/Schedule.type";
import schedulesColumns from "./columns";

type SchedulesTableProps = {
    title: string;
}
const SchedulesTable = ({ title }: SchedulesTableProps) => {
    return (
        <Table<Schedule>
            $tableHeight="100%"
            $tableWidth="100%"
            $fontSize={0.75}
            columns={schedulesColumns}
            tableName={title}
            $modalFiltersWidth={40}
            requestEndpoint="/schedules"
            service="monitoring"
        />
    );
}

export default SchedulesTable;