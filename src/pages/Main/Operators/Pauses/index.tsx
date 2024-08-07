import { FaCalendarDays, FaClock, FaNoteSticky } from "react-icons/fa6";
import StyledOperatorsPausesPage from "./style";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";

const OperatorsPausesPage = () => {
    const pauseNameState = useCustomState<string>("");
    const isProductive = useCustomState<string>("NAO");
    const timeLimitState = useCustomState<number>(60);

    return (
        <StyledOperatorsPausesPage>
            <h2> Operadores {'->'} Pausas </h2>
            <form>
                <div style={{ width: "20rem" }}>
                    <h3> Motivo / Descrição </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 0.5]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={<FaNoteSticky />}
                        rightIcon={null}
                        onChange={(e) => pauseNameState.set(e.target.value)}
                        value={pauseNameState.value}
                        placeholder="Digite o motivo da pausa aqui..."
                    />
                </div>
                <div style={{ width: "10rem" }}>
                    <h3> Tempo Limite (seg.)</h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 0.5]}
                        $fontSize={1}
                        $width={"100%"}
                        leftIcon={<FaClock />}
                        rightIcon={null}
                        onChange={(e) => timeLimitState.set(Number(e.target.value))}
                        value={timeLimitState.value}
                        type="number"
                    />
                </div>
                <div style={{ width: "10rem" }}>
                    <h3> Produtiva </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[5]}
                        $padding={[0.5, 0.5]}
                        $fontSize={1}
                        $width={"100%"}
                        onChange={(v) => isProductive.set(v || "NAO")}
                        options={[{ name: "Sim", value: "SIM" }, { name: "Não", value: "NAO" }]}
                        defaultValue={{ name: "Não", value: "NAO" }}
                    />
                </div>
                <ButtonType2 style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}>
                    <FaCalendarDays />
                    Adicionar Pausa
                </ButtonType2>

            </form>
            <ul>
            </ul>
        </StyledOperatorsPausesPage >
    );
}

export default OperatorsPausesPage;