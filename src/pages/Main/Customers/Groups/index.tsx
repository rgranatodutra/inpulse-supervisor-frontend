import { FaUsersLine } from "react-icons/fa6";
import GroupCard from "./GroupCard";
import StyledCustomerGroupsPage from "./style";
import Input from "../../../../components/Input";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const CustomerGroupsPage = () => {
    const groupNameState = useCustomState<string>("");

    return (
        <StyledCustomerGroupsPage>
            <h2> Clientes {'->'} Grupos </h2>
            <form>
                <div style={{ width: "20rem" }}>
                    <h3> Nome do Grupo </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => groupNameState.set(e.target.value)}
                        value={groupNameState.value}
                        placeholder="Digite o nome do grupo aqui..."
                    />
                </div>
                <ButtonType2 style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}>
                    <FaUsersLine />
                    Adicionar Grupo
                </ButtonType2>
            </form>
            <ul>
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
            </ul>
        </StyledCustomerGroupsPage >
    );
}

export default CustomerGroupsPage;