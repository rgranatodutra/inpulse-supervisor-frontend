import { Link } from "react-router-dom";
import OperatorsTable from "./Table";
import StyledOperatorsPage from "./style"
import OperatorsHeader from "./Header";
import { ButtonType3 } from "../../../../styles/buttons.style";

const OperatorsPage = () => {
    return (
        <StyledOperatorsPage>
            <div>
                <h1> Cadastro de Operadores </h1>
                <OperatorsHeader />
            </div>
            <div>
                <ButtonType3>
                    <Link to={`/operadores/cadastrar`}>
                        Adicionar novo operador
                    </Link>
                </ButtonType3>
            </div>
            <OperatorsTable />
        </StyledOperatorsPage>
    );
}

export default OperatorsPage;