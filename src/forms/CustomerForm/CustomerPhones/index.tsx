import { useContext } from "react";
import cssVars from "../../../utils/cssVariables.vars";
import { onChangeInput, onChangeSelect } from "../functions";
import { CustomerContext } from "../context";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

const CustomerPhones = () => {
    const { customerDataState } = useContext(CustomerContext);

    const DDDOptions = Array.from({ length: 89 }, (_, index) => ({
        name: `${index + 11}`,
        value: (index + 11),
    }));

    return (
        <section>
            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Área 1 </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    options={DDDOptions}
                    onChange={onChangeSelect("AREA1", customerDataState)}
                    defaultValue={DDDOptions.find(o => o.value === customerDataState.value.AREA1)}
                    placeholder="Área"
                    $maxULHeigth={10}
                />
            </div>
            <div style={{ width: "calc(50% - 1rem)" }}>
                <h3> Fone 1 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeInput("FONE1", customerDataState)}
                    value={customerDataState.value.FONE1 || ""}
                    placeholder="987654321"
                />
            </div>
            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Descrição Fone 1 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    maxLength={30}
                    onChange={onChangeInput("DESC_FONE1", customerDataState)}
                    value={customerDataState.value.DESC_FONE1 || ""}
                    placeholder="Descrição do telefone..."
                />
            </div>

            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Área 2 </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    options={DDDOptions}
                    onChange={onChangeSelect("AREA2", customerDataState)}
                    defaultValue={DDDOptions.find(o => o.value === customerDataState.value.AREA2)}
                    placeholder="Área"
                    $maxULHeigth={10}
                />
            </div>
            <div style={{ width: "calc(50% - 1rem)" }}>
                <h3> Fone 2 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeInput("FONE2", customerDataState)}
                    value={customerDataState.value.FONE2 || ""}
                    placeholder="987654321"
                />
            </div>
            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Descrição Fone 2 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    maxLength={30}
                    onChange={onChangeInput("DESC_FONE2", customerDataState)}
                    value={customerDataState.value.DESC_FONE2 || ""}
                    placeholder="Descrição do telefone..."
                />
            </div>

            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Área 3 </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    options={DDDOptions}
                    onChange={onChangeSelect("AREA3", customerDataState)}
                    defaultValue={DDDOptions.find(o => o.value === customerDataState.value.AREA3)}
                    placeholder="Área"
                    $maxULHeigth={10}
                />
            </div>
            <div style={{ width: "calc(50% - 1rem)" }}>
                <h3> Fone 3 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeInput("FONE3", customerDataState)}
                    value={customerDataState.value.FONE3 || ""}
                    placeholder="987654321"
                />
            </div>
            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Descrição Fone 3 </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    maxLength={30}
                    onChange={onChangeInput("DESC_FONE3", customerDataState)}
                    value={customerDataState.value.DESC_FONE3 || ""}
                    placeholder="Descrição do telefone..."
                />
            </div>

            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Área FAX </h3>
                <Select
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    options={DDDOptions}
                    onChange={onChangeSelect("AREAFAX", customerDataState)}
                    defaultValue={DDDOptions.find(o => o.value === customerDataState.value.AREAFAX)}
                    placeholder="Área"
                    $maxULHeigth={10}
                />
            </div>
            <div style={{ width: "calc(50% - 1rem)" }}>
                <h3> FAX </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    onChange={onChangeInput("FAX", customerDataState)}
                    value={customerDataState.value.FAX || ""}
                    placeholder="987654321"
                />
            </div>
            <div style={{ width: "calc(25% - 0.5rem)" }}>
                <h3> Descrição FAX </h3>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $borderColor={cssVars.colorGrey[5]}
                    $padding={[0.375, 0.375]}
                    $fontSize={0.875}
                    $width={"100%"}
                    maxLength={30}
                    onChange={onChangeInput("DESCFAX", customerDataState)}
                    value={customerDataState.value.DESCFAX || ""}
                    placeholder="Descrição do FAX..."
                />
            </div>
        </section>
    );
}

export default CustomerPhones;