import customerColumns from "./columns";
import { Customer } from "../../../../../interfaces/Customer.type";
import Table from "../../../../../components/Table";
import CustomerEditButton from "./CustomerEditButton";

const CustomersTable = () => {
    return (
        <Table<Customer>
            $tableHeight="100%"
            $tableWidth="100%"
            $fontSize={0.75}
            columns={customerColumns}
            tableName="Clientes"
            $modalFiltersWidth={41}
            actions={(row) => ([
                <CustomerEditButton customerId={row.CODIGO} key={`actions_${row.CODIGO}`} />,
            ])}
            requestEndpoint="/customers"
            service="customers"
        />
    );
}

export default CustomersTable;