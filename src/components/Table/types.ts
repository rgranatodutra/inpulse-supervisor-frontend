import { ReactNode } from "react";
import { Option } from "../Select";
import { ServiceName } from "../../api";

export type FilterType = "input" | "select" | "multi-select" | "none" | "date-range" | "phone";

export type TableColumn<T> = {
    key: keyof T;
    header?: string;
    format?: (row: T) => ReactNode;
    width?: number;
    headerFontWeight?: number;
    rowFontWeight?: number;
    primarykey?: boolean;
    alignContent?: "start" | "end" | "center";
    filter?: {
        type: FilterType;
        width: string;
        icon?: ReactNode;
        placeholder?: string;
        section?: string;
        options?: Array<Option<any>>;
    }
}

export type TableProps<T> = | {
    tableName: string;
    columns: Array<TableColumn<T>>;
    $fontSize: number;
    $tableWidth: string;
    $tableHeight: string;
    $modalFiltersWidth: number;
    actions?: (row: T) => Array<ReactNode>;
    requestEndpoint: `/${string}`;
    enableAutoUpdate?: boolean;
    service: ServiceName;
}

export type StyledTableProps = {
    $columns: Array<TableColumn<any>>;
    $tableWidth: string;
    $tableHeight: string;
    $fontSize: number;
    $isMaximized: boolean;
    $haveActions: boolean;
}

export type FilterRows<T> = {
    key: keyof T;
    value: string | Array<string>;
    exact?: boolean;
}