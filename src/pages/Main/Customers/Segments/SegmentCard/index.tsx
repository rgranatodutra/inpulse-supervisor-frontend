import { FaTag } from "react-icons/fa6";
import StyledSegmentCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";

const SegmentCard = () => {
    return (
        <StyledSegmentCard>
            <div>
                <span>
                    <FaTag />
                    1
                </span>
                <h2> Segmento A </h2>
                <h3> (Unidade B) </h3>
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
        </StyledSegmentCard>
    );
}

export default SegmentCard;