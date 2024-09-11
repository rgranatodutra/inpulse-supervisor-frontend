import { FaBrush, FaFilter } from "react-icons/fa6";
import useCustomState, { CustomState } from "../../../utils/customState.hook";
import Modal from "../../Modal";
import { TableColumn } from "../types";
import { ButtonType2 } from "../../../styles/buttons.style";
import StyledFiltersModal from "./style";
import { SetURLSearchParams } from "react-router-dom";
import filterSelect from "./filterSelect";
import filterInput from "./filterInput";
import filterMultiSelect from "./filterMultiSelect";
import filterPhone from "./filterPhone";
import { ReactNode } from "react";
import filterDateRange from "./filterDateRange";

type FiltersModalProps<T> = {
    tableName: string;
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
    filtersModalState: CustomState<ReactNode>;
    $modalFiltersWidth: number;
    columns: Array<TableColumn<T>>;
    rowsState: CustomState<Array<T>>;
}

function FiltersModal<T>({ tableName, filtersModalState, setSearchParams, searchParams, $modalFiltersWidth, columns, rowsState }: FiltersModalProps<T>) {
    const filterSections = Array.from(new Set(columns.filter(c => c.filter).map(c => c.filter!.section)));
    const filterState = useCustomState<Record<keyof T, any>>({} as Record<keyof T, any>);

    return (
        <Modal title={`Filtrar ${tableName.toLowerCase()}`} modalState={filtersModalState}>
            <StyledFiltersModal $modalFiltersWidth={$modalFiltersWidth}>
                <div>
                    {
                        filterSections.map(s => (
                            <div>
                                {s && <h3> {s} </h3>}
                                <div>
                                    {
                                        columns.filter(c => c.filter && c.filter.section === s).map(c =>
                                            c.filter!.type === "input" ? filterInput(c, filterState, searchParams) :
                                                c.filter!.type === "select" ? filterSelect<T>(c, rowsState, filterState, searchParams) :
                                                    c.filter!.type === "multi-select" ? filterMultiSelect(c, /* rowsState, */ filterState, searchParams) :
                                                        c.filter!.type === "phone" ? filterPhone(c, filterState, searchParams) :
                                                            c.filter!.type === "date-range" && filterDateRange(c, filterState, searchParams))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <ButtonType2 onClick={() => {
                        filterState.reset();
                        setSearchParams({});
                        filtersModalState.reset();
                    }}>
                        <FaBrush /> Limpar filtros
                    </ButtonType2>
                    <ButtonType2 onClick={() => {
                        setSearchParams(filterState.value);
                        filtersModalState.reset();
                    }}>
                        <FaFilter /> Filtrar
                    </ButtonType2>
                </div>
            </StyledFiltersModal>
        </Modal>
    );
}

export default FiltersModal;