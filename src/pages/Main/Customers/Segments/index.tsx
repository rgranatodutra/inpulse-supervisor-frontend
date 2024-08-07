import { FaUsersLine } from "react-icons/fa6";
import SegmentCard from "./SegmentCard";
import StyledCustomerSegmentPage from "./style";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const CustomerSegmentPage = () => {
    const segmentNameState = useCustomState<string>("");

    return (
        <StyledCustomerSegmentPage>
            <h2> Clientes {'->'} Segmentos </h2>
            <form>
                <div style={{ width: "20rem" }}>
                    <h3> Nome do Segmento </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => segmentNameState.set(e.target.value)}
                        value={segmentNameState.value}
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
                    Adicionar Segmento
                </ButtonType2>
            </form>
            <ul>
                <SegmentCard />
                <SegmentCard />
                <SegmentCard />
                <SegmentCard />
            </ul>
        </StyledCustomerSegmentPage >
    );
}

export default CustomerSegmentPage;