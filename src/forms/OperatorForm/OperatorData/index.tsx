import Input from "../../../components/Input";
import Select from "../../../components/Select";
import cssVars from "../../../utils/cssVariables.vars";
import { onChangeInput, onChangeSelect } from "../../CustomerForm/functions";
import { useContext } from "react";
import { OperatorContext } from "../context";

const OperatorData = () => {
    const { operatorDataState } = useContext(OperatorContext);

    const officeHourSelectOptions = [
        { name: "Manhã", value: 1 },
        { name: "Tarde", value: 2 },
        { name: "Integral", value: 3 },
    ];

    const levelSelectOptions = [
        { name: "Ativo", value: "ATIVO" },
        { name: "Receptivo", value: "RECEP" },
        { name: "Ambos", value: "AMBOS" },
        { name: "Supervisor", value: "ADMIN" }
    ];

    const ptBRBooleanOptions = [
        { name: "Sim", value: "SIM" },
        { name: "Não", value: "NAO" },
    ];

    const officeHourDefaultOption = officeHourSelectOptions.find(o => o.value === operatorDataState.value.HORARIO);
    const levelDefaultOption = levelSelectOptions.find(o => o.value === operatorDataState.value.NIVEL);
    const editContactsDefaultOption = ptBRBooleanOptions.find(o => o.value === operatorDataState.value.EDITA_CONTATOS) || { name: "Não", value: "NAO" };
    const viewPurchasesDefaultOption = ptBRBooleanOptions.find(o => o.value === operatorDataState.value.VISUALIZA_COMPRAS) || { name: "Não", value: "NAO" };
    const activeDefaultOption = ptBRBooleanOptions.find(o => o.value === operatorDataState.value.ATIVO) || { name: "Não", value: "NAO" };
    const callAgentDefaultOption = ptBRBooleanOptions.find(o => o.value === operatorDataState.value.LIGA_REPRESENTANTE) || { name: "Não", value: "NAO" };

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
                    onChange={onChangeInput("CODIGO_ERP", operatorDataState)}
                    placeholder={"Ex: 0000000"}
                    value={operatorDataState.value.CODIGO_ERP}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Código Telefonia </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("CODTELEFONIA", operatorDataState)}
                    placeholder={"Ex: 0000000"}
                    value={operatorDataState.value.CODTELEFONIA}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Nome </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("NOME", operatorDataState)}
                    placeholder={"Ex: 0000000"}
                    value={operatorDataState.value.NOME}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Nome de Exibição </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("NOME_EXIBICAO", operatorDataState)}
                    placeholder={"Ex: 0000000"}
                    value={operatorDataState.value.NOME_EXIBICAO || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Login </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("LOGIN", operatorDataState)}
                    placeholder={"Ex: 0000000"}
                    value={operatorDataState.value.LOGIN || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Senha </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("SENHA", operatorDataState)}
                    placeholder={"Ex: 0000000"}
                    value={operatorDataState.value.SENHA || ""}
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Horário </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("HORARIO", operatorDataState)}
                    defaultValue={officeHourDefaultOption}
                    options={officeHourSelectOptions}
                    placeholder="Horário de Trabalho"
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Nível </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("HORARIO", operatorDataState)}
                    defaultValue={levelDefaultOption}
                    options={levelSelectOptions}
                    placeholder="Nível de usuário"
                />
            </div>
            <div style={{ width: "calc(33.33% - 0.666rem)" }}>
                <h3> Edita Contatos ? </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("EDITA_CONTATOS", operatorDataState)}
                    defaultValue={editContactsDefaultOption}
                    options={ptBRBooleanOptions}
                />
            </div>
            <div style={{ width: "calc(33.34% - 0.667rem)" }}>
                <h3> Visualiza Compras ? </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("VISUALIZA_COMPRAS", operatorDataState)}
                    defaultValue={viewPurchasesDefaultOption}
                    options={ptBRBooleanOptions}
                />
            </div>
            <div style={{ width: "calc(33.33% - 0.666rem)" }}>
                <h3> Ativo ? </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("ATIVO", operatorDataState)}
                    defaultValue={activeDefaultOption}
                    options={ptBRBooleanOptions}
                />
            </div>
            <div style={{ width: "calc(33.33% - 0.666rem)" }}>
                <h3> Módulo Manual ? </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("ATIVO", operatorDataState)}
                    defaultValue={activeDefaultOption}
                    options={ptBRBooleanOptions}
                />
            </div>
            <div style={{ width: "calc(33.34% - 0.667rem)" }}>
                <h3> Liga p/ Representante ? </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeSelect("LIGA_REPRESENTANTE", operatorDataState)}
                    defaultValue={callAgentDefaultOption}
                    options={ptBRBooleanOptions}
                />
            </div>
            <div style={{ width: "calc(33.33% - 0.666rem)" }}>
                <h3> Liga p/ Representante Dias </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("LIGA_REPRESENTANTE_DIAS", operatorDataState)}
                    value={operatorDataState.value.LIGA_REPRESENTANTE_DIAS || 0}

                    type="number"
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Limite Diário Agendamento </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("LIMITE_DIARIO_AGENDAMENTO", operatorDataState)}
                    value={operatorDataState.value.LIMITE_DIARIO_AGENDAMENTO || 0}
                    type="number"
                />
            </div>
            <div style={{ width: "calc(50% - 0.5rem)" }}>
                <h3> Omni </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[4]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    leftIcon={null}
                    rightIcon={null}
                    onChange={onChangeInput("OMNI", operatorDataState)}
                    value={operatorDataState.value.OMNI || 0}
                    type="number"
                />
            </div>
        </>
    );
}

export default OperatorData;