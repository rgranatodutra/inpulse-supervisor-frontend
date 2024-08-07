import { ReactNode, useEffect, useRef } from "react";
import useCustomState from "../../utils/customState.hook";
import StyledMultiSelect, { StyledMultiSelectProps } from "./style";
import { Option } from "../Select";


type SelectOptions<T> = {
    leftIcon: ReactNode;
    rightIcon: ReactNode;
    options: Array<Option<T>>;
    defaultValue?: Array<Option<T>>;
    onChange?: (value: Array<T | null>) => void;
    placeholder?: string;
    disabled?: boolean;
}

type SelectProps<T> = SelectOptions<T> & Omit<StyledMultiSelectProps, "$icons">;

function MultiSelect<T>({
    leftIcon,
    rightIcon,
    options,
    onChange,
    placeholder,
    disabled,
    defaultValue,
    ...styleProps
}: SelectProps<T>) {
    const icons = leftIcon ? (rightIcon ? 2 : 1) : (rightIcon ? 1 : 0);

    const optionState = useCustomState<Array<Option<T>>>(defaultValue || []);
    const displayMenuState = useCustomState<boolean>(false);

    const mainDivRef = useRef<HTMLDivElement | null>(null);
    const menuUlRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const clickedOutsideMenu = menuUlRef.current && !menuUlRef.current.contains(event.target as Node);
            const clickedOutsideSelect = mainDivRef.current && !mainDivRef.current.contains(event.target as Node);

            if (clickedOutsideMenu && clickedOutsideSelect) {
                displayMenuState.set(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [displayMenuState.value]);

    useEffect(() => {
        if (optionState.value && onChange) {
            onChange(optionState.value.map(o => o.value));
        }
    }, [optionState.value]);

    const handleChange = (option: Option<T>) => {
        return () => {
            optionState.value.some(o => o.name === option.name) ?
                optionState.set(prev => prev.filter(p => p.name !== option.name))
                :
                optionState.set(prev => [...prev, option]);
        }
    };

    return (
        <StyledMultiSelect {...styleProps} $icons={icons}>
            <div
                onClick={() => displayMenuState.set(prev => !prev)}
                ref={mainDivRef}
            >
                {leftIcon || ""}
                <p> {placeholder} {'('}{optionState.value.length}/{options.length}{')'} </p>
                {rightIcon || ""}
            </div>
            <ul
                ref={menuUlRef}
                className={displayMenuState.value ? "showing" : "hidden"}
            >
                {
                    options.map((option, index) => (
                        <li
                            className={optionState.value.some(o => o.name === option.name) ? "selected" : ""}
                            onClick={handleChange(option)}
                            key={`option_${index}`}
                        >
                            <input
                                type="checkbox"
                                checked={optionState.value.some(o => o.name === option.name)}
                                onChange={() => null}
                            />
                            <p> {option.name} </p>
                        </li>
                    ))
                }
            </ul>
        </StyledMultiSelect>
    );
}

export default MultiSelect;