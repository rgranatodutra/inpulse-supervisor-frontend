import CustomersFilter from "./Filters/CustomersFilter";
import VariantFilter from "./Filters/VariantFilter";
import SchedulesTable from "./SchedulesTable";
import StyledMonitorSchedules from "./style"

const MonitorSchedules = () => {

    return (
        <StyledMonitorSchedules>
            <main>
                <form>
                    <VariantFilter />
                    <CustomersFilter />
                </form>
                <div>
                    <SchedulesTable title="Agendamentos" />
                </div>
            </main>
        </StyledMonitorSchedules>
    );
}

export default MonitorSchedules;