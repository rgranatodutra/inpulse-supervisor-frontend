import { FaTag } from "react-icons/fa6";
import StyledOriginCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";

const OriginCard = () => {
    return (
        <StyledOriginCard>
            <div>
                <span>
                    <FaTag />
                    1
                </span>
                <h2> Importação PipeRun </h2>
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
        </StyledOriginCard>
    );
}

export default OriginCard;