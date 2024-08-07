import StyledCustomersPage from "./styles";
import CustomersTable from "./CustomersTable";
import CustomersHeader from "./CustomersHeader";
import { Link, Outlet } from "react-router-dom";
import { ButtonType3 } from "../../../../styles/buttons.style";

const CustomersPage = () => {
    return (
        <StyledCustomersPage>
            <div>
                <h1> Cadastro de Clientes </h1>
                <CustomersHeader />
            </div>
            <div>
                <ButtonType3>
                    <Link to={`/clientes/cadastrar`}>
                        Adicionar novo cliente
                    </Link>
                </ButtonType3>
            </div>
            <CustomersTable />
            <Outlet />
        </StyledCustomersPage>
    );
}

export default CustomersPage;