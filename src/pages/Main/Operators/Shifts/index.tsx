import { FaCalendarDays } from "react-icons/fa6";
import StyledOperatorsShiftsPage from "./style"
import Input from "../../../../components/Input";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const OperatorsShiftsPage = () => {
    const shiftNameState = useCustomState<string>("");
    const startShiftState = useCustomState<string>("");
    const endShiftState = useCustomState<string>("");

    return (
        <StyledOperatorsShiftsPage>
            <h2> Operadores {'->'} Turnos </h2>
            <form>
                <div style={{ width: "14rem" }}>
                    <h3> Início do Expediente </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => startShiftState.set(e.target.value)}
                        value={startShiftState.value}
                        type="time"
                        style={{ height: "2.375rem" }}
                    />
                </div>
                <div style={{ width: "14rem" }}>
                    <h3> Fim do Expediente </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => endShiftState.set(e.target.value)}
                        value={endShiftState.value}
                        type="time"
                        style={{ height: "2.375rem" }}
                    />
                </div>
                <div style={{ width: "20rem" }}>
                    <h3> Nome do Turno </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 1]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={(e) => shiftNameState.set(e.target.value)}
                        value={shiftNameState.value}
                        placeholder="Digite o nome do turno aqui..."
                        style={{ height: "2.375rem" }}
                    />
                </div>
                <ButtonType2 style={{ fontSize: "1rem", height: "1.5rem", boxSizing: "content-box" }}>
                    <FaCalendarDays /> Adicionar Turno
                </ButtonType2>
            </form>
            <ul>
            </ul>
        </StyledOperatorsShiftsPage >
    );
}

export default OperatorsShiftsPage;