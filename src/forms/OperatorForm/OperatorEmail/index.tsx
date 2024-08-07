import { useContext } from "react"
import { OperatorContext } from "../context"
import Input from "../../../components/Input";
import cssVars from "../../../utils/cssVariables.vars";
import { onChangeInput } from "../../CustomerForm/functions";

const OperatorEmail = () => {
    const { operatorDataState } = useContext(OperatorContext);

    return (
        <section>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> E-mail </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("EMAIL", operatorDataState)}
                    value={operatorDataState.value.EMAIL || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> E-mail para Exibiçào </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("EMAIL", operatorDataState)}
                    value={operatorDataState.value.EMAIL || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Senha (E-mail) </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("SENHAEMAILOPERADOR", operatorDataState)}
                    value={operatorDataState.value.SENHAEMAILOPERADOR || ""}
                />
            </div>
        </section>
    );
}

export default OperatorEmail;