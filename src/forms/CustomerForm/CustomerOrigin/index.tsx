import { useContext } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import cssVars from "../../../utils/cssVariables.vars";
import { CustomerContext } from "../context";
import { onChangeInput, onChangeSelect } from "../functions";

const CustomerOrigins = () => {
    const { customerDataState, segmentsState, mediasState, operatorsState, originsState, groupsState } = useContext(CustomerContext);

    const mediaOptions = mediasState.value.map(m => ({ name: m.NOME, value: m.CODIGO }));
    const segmentOptions = segmentsState.value.map(s => ({ name: s.NOME, value: s.CODIGO }));
    const operatorOptions = operatorsState.value.map(o => ({ name: o.NOME, value: o.CODIGO }));
    const originOptions = originsState.value.map(o => ({ name: o.DESCRICAO, value: o.CODIGO }));
    const groupOptions = groupsState.value.map(g => ({ name: g.DESCRICAO, value: g.CODIGO }));

    const defaultMediaOption = mediaOptions.find(o => o.value === customerDataState.value.COD_MIDIA);
    const defaultSegmentOption = segmentOptions.find(o => o.value === customerDataState.value.SEGMENTO);
    const defaultOperatorOption = operatorOptions.find(o => o.value === customerDataState.value.OPERADOR);
    const defaultOriginOption = originOptions.find(o => o.value === customerDataState.value.ORIGEM);
    const defaultGroupOption = groupOptions.find(o => o.value === customerDataState.value.GRUPO);

    return (
        <section>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Grupo </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("GRUPO", customerDataState)}
                    placeholder="Grupo"
                    options={groupOptions}
                    defaultValue={defaultGroupOption}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Origem </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("ORIGEM", customerDataState)}
                    placeholder="Origem"
                    options={originOptions}
                    defaultValue={defaultOriginOption}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Mídia </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("COD_MIDIA", customerDataState)}
                    placeholder="Mídia"
                    options={mediaOptions}
                    defaultValue={defaultMediaOption}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Segmento </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("SEGMENTO", customerDataState)}
                    placeholder="Segmento"
                    options={segmentOptions}
                    defaultValue={defaultSegmentOption}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> E-mail 1 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("EMAIL", customerDataState)}
                    placeholder={"Ex: rafael@empresa.com"}
                    value={customerDataState.value.EMAIL || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> E-mail 2 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("EMAIL2", customerDataState)}
                    placeholder={"Ex: jaqueline@empresa.com"}
                    value={customerDataState.value.EMAIL2 || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Contato E-mail </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("CONTATO_MAIL", customerDataState)}
                    placeholder={"Ex: Rafael Souza"}
                    value={customerDataState.value.CONTATO_MAIL || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Operador </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("OPERADOR", customerDataState)}
                    placeholder="Operador"
                    options={operatorOptions}
                    defaultValue={defaultOperatorOption}
                />
            </div>
        </section>
    );
}

export default CustomerOrigins;