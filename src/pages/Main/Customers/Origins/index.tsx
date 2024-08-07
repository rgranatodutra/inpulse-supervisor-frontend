import { FaUsersLine } from "react-icons/fa6";
import OriginCard from "./OriginCard";
import StyledCustomersOriginsPage from "./style";
import Input from "../../../../components/Input";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const CustomersOriginsPage = () => {
    const originNameState = useCustomState<string>("");

    return (
        <StyledCustomersOriginsPage>
            <h2> Clientes {'->'} Origens </h2>
            <form>
                <div style={{ width: "20rem" }}>
                    <h3> Nome da Origem </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => originNameState.set(e.target.value)}
                        value={originNameState.value}
                        placeholder="Digite o nome da origem aqui..."
                    />
                </div>
                <ButtonType2 style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}>
                    <FaUsersLine />
                    Adicionar Origem
                </ButtonType2>
            </form>
            <ul>
                <OriginCard />
                <OriginCard />
                <OriginCard />
                <OriginCard />
            </ul>
        </StyledCustomersOriginsPage >
    );
}

export default CustomersOriginsPage;