import { useContext } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import cssVars from "../../../utils/cssVariables.vars";
import { CustomerContext } from "../context";
import { onChangeInput, onChangeSelect } from "../functions";

const CustomerData = () => {
    const { customerDataState } = useContext(CustomerContext);
    const personSelectOptions = [
        { name: "Física", value: "FIS" },
        { name: "Jurídica", value: "JUR" },
    ];

    const personDefaultOption = personSelectOptions.find(o => o.value === customerDataState.value.PESSOA);

    return (
        <>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Código ERP </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("COD_ERP", customerDataState)}
                    placeholder={"Ex: 0000000"}
                    value={customerDataState.value.COD_ERP}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Pessoa * </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("PESSOA", customerDataState)}
                    placeholder="Pessoa"
                    options={personSelectOptions}
                    defaultValue={personDefaultOption}
                />
            </div>
            <div style={{ width: "100%" }}>
                <h3> Razão social *</h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeInput("RAZAO", customerDataState)}
                    placeholder={"Ex: COMERCIO DE TINTAS LTDA"}
                    value={customerDataState.value.RAZAO}
                />
            </div>
            <div style={{ width: "100%" }}>
                <h3> Nome Fantasia </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeInput("FANTASIA", customerDataState)}
                    placeholder="Ex: COMTINTAS"
                    value={customerDataState.value.FANTASIA}
                />
            </div>
            {
                customerDataState.value.PESSOA === "FIS" &&
                <>
                    <div style={{ width: "calc(50% - 0.5rem)" }}>
                        <h3> CPF *</h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[4]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            onChange={onChangeInput("CPF_CNPJ", customerDataState)}
                            placeholder={"000.000.000-00"}
                            value={customerDataState.value.CPF_CNPJ}
                        />
                    </div>
                    <div style={{ width: "calc(50% - 0.5rem)" }}>
                        <h3> Registro Geral </h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[4]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            onChange={onChangeInput("CIDADE", customerDataState)}
                            placeholder={"0000000000"}
                            value={customerDataState.value.CIDADE}
                        />
                    </div>
                </>
            }
            {
                customerDataState.value.PESSOA === "JUR" &&
                <>
                    <div style={{ width: "calc(50% - 0.5rem)" }}>
                        <h3> CNPJ *</h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[4]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            onChange={onChangeInput("CPF_CNPJ", customerDataState)}
                            placeholder={"00.000.000/0000-00"}
                            value={customerDataState.value.CPF_CNPJ}
                        />
                    </div>
                    <div style={{ width: "calc(50% - 0.5rem)" }}>
                        <h3> Inscrição Estadual </h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[4]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            onChange={onChangeInput("IE_RG", customerDataState)}
                            placeholder={"000.000.000.000"}
                            value={customerDataState.value.IE_RG}
                        />
                    </div>
                </>
            }

        </>
    );
}

export default CustomerData;