import { CSSProperties } from "react";
import cssVars from "../../../utils/cssVariables.vars";
import { CustomState } from "../../../utils/customState.hook";
import { TableColumn } from "../types";
import PhoneInput from "react-phone-input-2";

function filterPhone<T>(
    column: TableColumn<T>,
    filterState: CustomState<Record<keyof T, any>>,
    searchParams: URLSearchParams
) {
    const defaultValue = searchParams.get(String(column.key));

    const onChange = (v: string) => {
        filterState.set(prev => {
            if (v) {
                prev[column.key] = v;
            } else {
                delete prev[column.key]
            }

            return prev;
        })
    }

    const containerStyle: CSSProperties = {
        borderColor: cssVars.colorGrey[2],
        width: column.filter!.width,
        borderRadius: "0.5rem"
    }

    const inputStyle: CSSProperties = {
        fontSize: "1rem",
        color: cssVars.colorGrey[3],
        backgroundColor: cssVars.colorGrey[8],
        borderColor: cssVars.colorGrey[2],
        width: "100%",
        borderRadius: "0.5rem"
    }

    const buttonStyle: CSSProperties = {
        backgroundColor: cssVars.colorGrey[7],
        borderColor: cssVars.colorGrey[2],
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem"
    }

    const dropdownStyle: CSSProperties = {
        backgroundColor: cssVars.colorGrey[7],
    }

    return (
        <PhoneInput
            country="br"
            containerClass="phone_input_container"
            dropdownClass="phone_input_dropdown"
            buttonClass="phone_input_button"
            value={defaultValue}
            onChange={onChange}
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            buttonStyle={buttonStyle}
            dropdownStyle={dropdownStyle}
        />
    );
}

export default filterPhone;