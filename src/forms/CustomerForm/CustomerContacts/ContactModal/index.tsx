import { useContext } from "react";
import Input from "../../../../components/Input"
import cssVars from "../../../../utils/cssVariables.vars"
import { onChangeInput, onChangeSelect } from "../../functions"
import { CustomerContext } from "../../context";
import Select from "../../../../components/Select";
import { FaFloppyDisk, FaXmark } from "react-icons/fa6";
import StyledContactModal from "./styles";
import Modal from "../../../../components/Modal";
import { CustomState } from "../../../../utils/customState.hook";
import { ButtonType2 } from "../../../../styles/buttons.style";

type ContactModalProps = {
    modalState: CustomState<boolean>;
}

const ContactModal = ({ modalState }: ContactModalProps) => {
    const { selectedContactState, onClickAddContact, onClickCancelEditContact, positionsState } = useContext(CustomerContext);

    const DDDOptions = Array.from({ length: 89 }, (_, index) => ({
        name: `${index + 11}`,
        value: `${index + 11}`,
    }));

    const positionOptions = positionsState.value.map(p => ({
        name: p.DESCRICAO,
        value: p.CODIGO
    }));

    const mode = selectedContactState.value.CODIGO ? "edit" : "create";
    const modalTitle = mode === "edit" ? "Editando Contato" : "Adicionando novo contato";

    return (
        <Modal
            modalState={modalState}
            title={modalTitle}
        >
            <StyledContactModal>
                <div style={{ width: "calc(66% - 0.5rem)" }}>
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
                        onChange={onChangeInput("NOME", selectedContactState)}
                        placeholder={"Ex: Marcio Araújo"}
                        value={selectedContactState.value?.NOME || ""}
                    />
                </div>
                <div style={{ width: "calc(34% - 0.5rem)" }}>
                    <h3> Cargo </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        options={positionOptions}
                        onChange={onChangeSelect("CARGO", selectedContactState)}
                        defaultValue={positionOptions.find(o => o.value === selectedContactState.value.CARGO)}
                        placeholder="Cargo"
                        $maxULHeigth={10}
                    />
                </div>
                <div style={{ width: "calc(66% - 0.5rem)" }}>
                    <h3> Apelido / Tratamento </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("TRATAMENTO", selectedContactState)}
                        placeholder={"Ex: Marcinho"}
                        value={selectedContactState.value?.TRATAMENTO || ""}
                    />
                </div>
                <div style={{ width: "calc(34% - 0.5rem)" }}>
                    <h3> Sexo </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        options={[{ name: "Masculino", value: "M" }, { name: "Feminino", value: "F" }]}
                        onChange={onChangeSelect("SEXO", selectedContactState)}
                        placeholder={"Sexo"}
                    />
                </div>
                <div style={{ width: "calc(50% - 0.5rem)" }}>
                    <h3> E-mail </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("EMAIL", selectedContactState)}
                        placeholder={"Ex: exemplo@mail.com"}
                        value={selectedContactState.value?.EMAIL || ""}
                        type="email"
                    />
                </div>
                <div style={{ width: "calc(50% - 0.5rem)" }}>
                    <h3> Aniversário </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("ANIVERSARIO", selectedContactState)}
                        value={selectedContactState.value?.ANIVERSARIO || ""}
                        type="date"
                    />
                </div>
                <div style={{ width: "calc(75% - 0.5rem)" }}>
                    <h3> Time de Futebol </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("TIME_FUTEBOL", selectedContactState)}
                        value={selectedContactState.value?.TIME_FUTEBOL || ""}
                        placeholder="Ex: Grêmio"
                    />
                </div>
                <div style={{ width: "calc(25% - 0.5rem)" }}>
                    <h3> Filhos </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("FILHOS", selectedContactState)}
                        value={selectedContactState.value?.FILHOS || 0}
                        type="number"
                    />
                </div>
                <div style={{ width: "calc(25% - 0.5rem)" }}>
                    <h3> Área Direto </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        options={DDDOptions}
                        onChange={onChangeSelect("AREA_DIRETO", selectedContactState)}
                        defaultValue={DDDOptions.find(o => o.value === selectedContactState.value.AREA_DIRETO)}
                        placeholder="Área"
                        $maxULHeigth={10}
                    />
                </div>
                <div style={{ width: "calc(75% - 0.5rem)" }}>
                    <h3> Fone Direto </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("FONE_DIRETO", selectedContactState)}
                        value={selectedContactState.value?.FONE_DIRETO || ""}
                        placeholder="987654321"
                    />
                </div>
                <div style={{ width: "calc(25% - 0.5rem)" }}>
                    <h3> Área Celular </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        options={DDDOptions}
                        onChange={onChangeSelect("AREA_CEL", selectedContactState)}
                        defaultValue={DDDOptions.find(o => o.value === selectedContactState.value.AREA_CEL)}
                        placeholder="Área"
                        $maxULHeigth={10}
                    />
                </div>
                <div style={{ width: "calc(75% - 0.5rem)" }}>
                    <h3> Fone Celular </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("CELULAR", selectedContactState)}
                        value={selectedContactState.value?.CELULAR || ""}
                        placeholder="987654321"
                    />
                </div>
                <div style={{ width: "calc(25% - 0.5rem)" }}>
                    <h3> Área Res. </h3>
                    <Select
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        options={DDDOptions}
                        onChange={onChangeSelect("AREA_RESI", selectedContactState)}
                        defaultValue={DDDOptions.find(o => o.value === selectedContactState.value.AREA_RESI)}
                        placeholder="Área"
                        $maxULHeigth={10}
                    />
                </div>
                <div style={{ width: "calc(75% - 0.5rem)" }}>
                    <h3> Fone Residencial </h3>
                    <Input
                        $color={cssVars.colorGrey[3]}
                        $focusColor={cssVars.colorGrey[0]}
                        $borderColor={cssVars.colorGrey[4]}
                        $padding={[0.375, 0.375]}
                        $fontSize={0.875}
                        $width={"100%"}
                        leftIcon={null}
                        rightIcon={null}
                        onChange={onChangeInput("FONE_RESIDENCIAL", selectedContactState)}
                        value={selectedContactState.value?.FONE_RESIDENCIAL || ""}
                        placeholder="33334444"
                    />
                </div>
                <div style={{ width: "100%" }} className="buttons">
                    {
                        mode === "edit" && (
                            <ButtonType2 onClick={onClickCancelEditContact} type="button">
                                <FaXmark />
                                Cancelar Edição
                            </ButtonType2>
                        )
                    }
                    <ButtonType2 onClick={onClickAddContact} type="button">
                        <FaFloppyDisk />
                        {mode === "edit" ? "Salvar Contato" : "Adicionar Contato"}
                    </ButtonType2>
                </div>
            </StyledContactModal>

        </Modal>
    )
}

export default ContactModal;