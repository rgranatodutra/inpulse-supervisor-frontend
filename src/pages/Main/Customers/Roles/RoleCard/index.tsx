import { FaTag } from "react-icons/fa6";
import StyledRoleCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";

const RoleCard = () => {
    return (
        <StyledRoleCard>
            <div>
                <span>
                    <FaTag />
                    1
                </span>
                <h2> Diretor </h2>
            </div>
            <div>
                <ButtonType3>
                    <a> Editar </a>
                </ButtonType3>
                <ButtonType3>
                    <a> Remover </a>
                </ButtonType3>
                <ButtonType3>
                    <a> Visualizar Clientes </a>
                </ButtonType3>
            </div>
        </StyledRoleCard>
    );
}

export default RoleCard;