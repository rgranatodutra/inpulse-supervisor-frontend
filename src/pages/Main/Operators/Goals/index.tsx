import { FaCheck } from "react-icons/fa6";
import StyledOperatorsGoalsPage from "./style"
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const OperatorsGoalsPage = () => {
    const operatorState = useCustomState<number>(0);
    const monthState = useCustomState<string>("");
    const yearState = useCustomState<number>(new Date().getFullYear());
    const goalState = useCustomState<number>(0);

    return (
        <StyledOperatorsGoalsPage>
            <h2> Operadores {'->'} Metas </h2>
            <form>
                <div style={{ width: "20rem" }}>
                    <h3> Operador </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 0.5]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        onChange={(v) => operatorState.set(v || 0)}
                        options={[{ name: "Teste", value: 1 }]}
                        defaultValue={{ name: "Teste", value: 1 }}
                    />
                </div>
                <div style={{ width: "20rem" }}>
                    <h3> Mês / Ano </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 0.5]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => {
                            yearState.set(+e.target.value.slice(0, 4));
                            monthState.set(e.target.value.slice(5));
                        }}
                        value={monthState.value}
                        type="month"
                    />
                </div>
                <div style={{ width: "10rem" }}>
                    <h3> Meta </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 0.5]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={<span> R$ </span>}
                        rightIcon={null}
                        value={goalState.value}
                        type="number"
                        onChange={(e) => goalState.set(+e.target.value)}
                    />
                </div>
                <ButtonType2 style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}>
                    <FaCheck />
                    Adicionar Meta
                </ButtonType2>

            </form>
            <ul>
            </ul>
        </StyledOperatorsGoalsPage >
    );
}

export default OperatorsGoalsPage;