import { FaUsersLine } from "react-icons/fa6";
import StyledCustomersBrandsPage from "./style";
import BrandCard from "./BrandCard";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const CustomersBrandsPage = () => {
    const brandNameState = useCustomState<string>("");

    return (
        <StyledCustomersBrandsPage>
            <h2> Clientes {'->'} Marcas </h2>
            <form>
                <div style={{ width: "20rem" }}>
                    <h3> Nome da Marca </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => brandNameState.set(e.target.value)}
                        value={brandNameState.value}
                        placeholder="Digite o nome do segmento aqui..."
                    />
                </div>
                <div style={{ width: "20rem" }}>
                    <h3> Unidade </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={1}
                        $width={"100%"}
                        onChange={() => null}
                        options={[]}
                        placeholder="Unidade"
                    />
                </div>
                <ButtonType2 style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}>
                    <FaUsersLine />
                    Adicionar Marca
                </ButtonType2>
            </form>
            <ul>
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
            </ul>
        </StyledCustomersBrandsPage >
    );
}

export default CustomersBrandsPage;