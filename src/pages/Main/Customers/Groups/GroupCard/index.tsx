import { FaTag } from "react-icons/fa6";
import StyledGroupCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";

const GroupCard = () => {
    return (
        <StyledGroupCard>
            <div>
                <span>
                    <FaTag />
                    1
                </span>
                <h2> Clientes do Renan </h2>
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
        </StyledGroupCard>
    );
}

export default GroupCard;