import { FaUsersLine } from "react-icons/fa6";
import StyledCustomersRolesPage from "./style";
import RoleCard from "./RoleCard";
import Input from "../../../../components/Input";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const CustomersRolesPage = () => {
    const roleNameState = useCustomState<string>("");

    return (
        <StyledCustomersRolesPage>
            <h2> Clientes {'->'} Cargos </h2>
            <form>
                <div style={{ width: "20rem" }}>
                    <h3> Nome do Cargo </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => roleNameState.set(e.target.value)}
                        value={roleNameState.value}
                        placeholder="Digite o nome do cargo aqui..."
                    />
                </div>
                <ButtonType2 style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}>
                    <FaUsersLine />
                    Adicionar Cargo
                </ButtonType2>
            </form>
            <ul>
                <RoleCard />
                <RoleCard />
                <RoleCard />
                <RoleCard />
            </ul>
        </StyledCustomersRolesPage >
    );
}

export default CustomersRolesPage;