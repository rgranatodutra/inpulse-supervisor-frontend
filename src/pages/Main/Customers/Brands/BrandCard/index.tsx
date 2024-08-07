import { FaTag } from "react-icons/fa6";
import StyledBrandCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";

const BrandCard = () => {
    return (
        <StyledBrandCard>
            <div>
                <span>
                    <FaTag />
                    1
                </span>
                <h2> Marca A </h2>
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
        </StyledBrandCard>
    );
}

export default BrandCard;