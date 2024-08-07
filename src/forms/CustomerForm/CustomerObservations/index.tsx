import { useContext } from "react";
import TextArea from "../../../components/TextArea";
import cssVars from "../../../utils/cssVariables.vars";
import { onChangeTextArea } from "../functions";
import { CustomerContext } from "../context";

const CustomerObservations = () => {

    const { customerDataState } = useContext(CustomerContext);
    return (
        <section>
            <div style={{ width: "100%" }}>
                <h3> Observação do Supervisor </h3>
                <TextArea
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    style={{ height: "5.5rem" }}
                    onChange={onChangeTextArea("OBS_ADMIN", customerDataState)}
                    value={customerDataState.value.OBS_ADMIN || ""}
                />
            </div>
            <div style={{ width: "100%" }}>
                <h3> Observação do Operador </h3>
                <TextArea
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    style={{ height: "5.5rem" }}
                    onChange={onChangeTextArea("OBS_OPERADOR", customerDataState)}
                    value={customerDataState.value.OBS_OPERADOR || ""}
                />
            </div>
        </section>
    );
}

export default CustomerObservations;