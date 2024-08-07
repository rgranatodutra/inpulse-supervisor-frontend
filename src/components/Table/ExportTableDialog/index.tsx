import { useDownloadExcel } from 'react-export-table-to-excel';
import Input from '../../Input';
import useCustomState, { CustomState } from '../../../utils/customState.hook';
import cssVars from '../../../utils/cssVariables.vars';
import { FaDownload } from 'react-icons/fa6';
import Modal from '../../Modal';
import { MutableRefObject, ReactNode } from 'react';
import StyledExportTableDialog from './styles';
import { ButtonType2 } from '../../../styles/buttons.style';

type ExportTableDialogProps = {
    tableName: string;
    modalState: CustomState<ReactNode>;
    tableRef: MutableRefObject<null | HTMLTableElement>;
}

const ExportTableDialog = ({ tableName, modalState, tableRef }: ExportTableDialogProps) => {
    const filenameState = useCustomState<string>(`${new Date().toLocaleDateString().replace(/([/])+/g, "-")}_${tableName}`);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: filenameState.value,
        sheet: tableName
    })

    return (
        <Modal modalState={modalState} title={`Exportar ${tableName}`}>
            <StyledExportTableDialog>
                <Input
                    $color={cssVars.colorGrey[3]}
                    $focusColor={cssVars.colorGrey[0]}
                    $padding={[0.5, 0.5]}
                    $fontSize={1}
                    $width="20rem"
                    leftIcon={null}
                    rightIcon={<p>.xls</p>}
                    placeholder='Digite o nome do arquivo'
                    value={filenameState.value}
                    onChange={(e) => filenameState.set(e.target.value)}
                />

                <ButtonType2 onClick={onDownload}>
                    <FaDownload /> Salvar
                </ButtonType2>
            </StyledExportTableDialog>
        </Modal>
    )
}

export default ExportTableDialog;