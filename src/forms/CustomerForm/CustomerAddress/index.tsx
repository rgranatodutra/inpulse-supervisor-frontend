import { useContext } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import cssVars from "../../../utils/cssVariables.vars";
import { CustomerContext } from "../context";
import { onChangeInput, onChangeSelect } from "../functions";


const CustomerAddress = () => {
    const { customerDataState, citiesState, loadingState } = useContext(CustomerContext);

    const states = Array.from(new Set(citiesState.value.map(c => c.UF)));
    const stateOptions = states.map(s => ({ name: s, value: s }));
    const stateCities = citiesState.value.filter(c => c.UF === customerDataState.value.ESTADO);

    const cityOptions = stateCities.map(c => ({ name: c.NOME, value: c.NOME })).sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    const defaultState = stateOptions.find(o => o.name === customerDataState.value.ESTADO);
    const defaultCity = cityOptions.find(o => o.name === customerDataState.value.CIDADE);

    return (
        <>
            {
                !loadingState.value && citiesState.value.length &&
                <section>
                    <div style={{ width: "calc(25% - 0.5rem)" }}>
                        <h3> Estado </h3>
                        <Select
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[5]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            onChange={onChangeSelect("ESTADO", customerDataState)}
                            placeholder="Estado"
                            options={stateOptions}
                            defaultValue={defaultState}
                        />
                    </div>
                    <div style={{ width: "calc(75% - 0.5rem)" }}>
                        <h3> Município </h3>
                        <Select
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[5]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            onChange={onChangeSelect("CIDADE", customerDataState)}
                            placeholder="Município"
                            options={cityOptions}
                            defaultValue={defaultCity}
                        />
                    </div>
                    <div style={{ width: "calc(50% - 0.5rem)" }}>
                        <h3> CEP </h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[5]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            leftIcon={null}
                            rightIcon={null}
                            onChange={onChangeInput("CEP", customerDataState)}
                            placeholder={"Ex: 92120-131"}
                            value={customerDataState.value.CEP}
                        />
                    </div>
                    <div style={{ width: "calc(50% - 0.5rem)" }}>
                        <h3> Bairro </h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[5]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            leftIcon={null}
                            rightIcon={null}
                            onChange={onChangeInput("BAIRRO", customerDataState)}
                            placeholder={"Ex: Tiradentes"}
                            value={customerDataState.value.BAIRRO}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <h3> Rua / Avenida </h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[5]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            leftIcon={null}
                            rightIcon={null}
                            onChange={onChangeInput("END_RUA", customerDataState)}
                            placeholder={"Ex: Rua Londres, 727"}
                            value={customerDataState.value.END_RUA}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <h3> Complemento </h3>
                        <Input
                            $color={cssVars.colorGrey[3]}
                            $focusColor={cssVars.colorGrey[0]}
                            $borderColor={cssVars.colorGrey[5]}
                            $padding={[0.375, 0.375]}
                            $fontSize={0.875}
                            $width={"100%"}
                            leftIcon={null}
                            rightIcon={null}
                            onChange={onChangeInput("COMPLEMENTO", customerDataState)}
                            placeholder={"Ex: Sala 001"}
                            value={customerDataState.value.COMPLEMENTO}
                        />
                    </div>
                </section>
            }
        </>
    );
}

export default CustomerAddress;