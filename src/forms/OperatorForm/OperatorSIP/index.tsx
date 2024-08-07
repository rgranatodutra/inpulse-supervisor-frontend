import { useContext } from "react"
import { OperatorContext } from "../context"
import Input from "../../../components/Input";
import cssVars from "../../../utils/cssVariables.vars";
import { onChangeInput } from "../../CustomerForm/functions";
import MultiSelect from "../../../components/MultiSelect";
import { FaAngleDown } from "react-icons/fa6";

const OperatorSIP = () => {
    const { operatorDataState } = useContext(OperatorContext);

    const simultaedCodecOptions = [
        { name: "0 - PCMU", value: 0 },
        { name: "1 - PCMA", value: 1 },
        { name: "2 - SPEEX", value: 2 },
        { name: "3 - SPEEX_5", value: 3 },
        { name: "4 - SPEEX_15", value: 4 },
    ]

    return (
        <section>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Ramal </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("ASTERISK_RAMAL", operatorDataState)}
                    value={operatorDataState.value.ASTERISK_RAMAL || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> User ID </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("ASTERISK_USERID", operatorDataState)}
                    value={operatorDataState.value.ASTERISK_USERID || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Login </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("ASTERISK_LOGIN", operatorDataState)}
                    value={operatorDataState.value.ASTERISK_LOGIN || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Senha Ramal </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("ASTERISK_SENHA", operatorDataState)}
                    value={operatorDataState.value.ASTERISK_SENHA || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> ID Campanha WeON </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={() => null}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Codecs </h3>
                <MultiSelect
                    $color={cssVars.colorGrey[3]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={<FaAngleDown />}
                    placeholder="Codecs"
                    onChange={() => null}
                    options={simultaedCodecOptions}
                />
            </div>
        </section>
    );
}

export default OperatorSIP;