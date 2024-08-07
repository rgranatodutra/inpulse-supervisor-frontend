import React from "react";
import { FaHourglassEnd, FaHourglassStart } from "react-icons/fa6";
import Input from "../Input";
import StyledInputDateRange from "./style";
import useCustomState from "../../utils/customState.hook";
import { useEffect } from "react";
import { RangeDate } from "../../interfaces/generics.types";

type InputRangeDateProps = {
    title: string;
    $padding: [number, number];
    $fontSize?: number;
    $fontWeight?: number;
    $width: string;
    $color: string;
    $borderColor?: string;
    $focusColor: string;
    onChange?: (v: RangeDate) => void;
    defaultValue?: RangeDate;
};

const InputDateRange = ({
    title,
    onChange,
    defaultValue,
    ...inputStyleProps
}: InputRangeDateProps) => {
    const dateRangeState = useCustomState<{
        min: Date | null;
        max: Date | null;
    }>(
        {
            min: defaultValue?.min || null,
            max: defaultValue?.max || null
        }
    );

    useEffect(() => {
        if (onChange) {
            onChange(dateRangeState.value);
        }
    }, [dateRangeState.value]);

    const handleMinChange = ({ target: { valueAsDate } }: React.ChangeEvent<HTMLInputElement>) => {
        if (dateRangeState.value.max && valueAsDate && valueAsDate > dateRangeState.value.max) {
            dateRangeState.set((prev) => ({ min: prev.max, max: valueAsDate }));
        } else {
            dateRangeState.set((prev) => ({ ...prev, min: valueAsDate }));
        }
    };

    const handleMaxChange = ({ target: { valueAsDate } }: React.ChangeEvent<HTMLInputElement>) => {
        if (dateRangeState.value.min && valueAsDate && valueAsDate < dateRangeState.value.min) {
            dateRangeState.set((prev) => ({ min: valueAsDate, max: prev.min }));
        } else {
            dateRangeState.set((prev) => ({ ...prev, max: valueAsDate }));
        }
    };

    return (
        <StyledInputDateRange>
            <h3 style={{ width: "100%" }}> {title} </h3>
            <Input
                {...inputStyleProps}
                leftIcon={<FaHourglassStart />}
                rightIcon={null}
                type="date"
                onChange={handleMinChange}
                value={dateRangeState.value.min ? dateRangeState.value.min.toISOString().split('T')[0] : ""}
            />
            <Input
                {...inputStyleProps}
                leftIcon={<FaHourglassEnd />}
                rightIcon={null}
                type="date"
                onChange={handleMaxChange}
                value={dateRangeState.value.max ? dateRangeState.value.max.toISOString().split('T')[0] : ""}
            />
        </StyledInputDateRange>
    );
};

export default InputDateRange;
