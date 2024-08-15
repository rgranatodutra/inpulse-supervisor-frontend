import { ReactNode, useEffect, useRef } from "react";
import { FaAngleDown, FaAngleUp, FaXmark } from "react-icons/fa6";
import useCustomState from "../../utils/customState.hook";
import removeAccents from "../../utils/removeAccents.util";
import StyledSelect, { StyledSelectProps } from "./styles";

export type Option<T> = {
	name: string;
	value: T | null;
};

type SelectOptions<T> = {
	options: Array<Option<T>>;
	defaultValue?: Option<T>;
	onChange?: (value: T | null) => unknown;
	placeholder?: string;
	disabled?: boolean;
	disableClearButton?: boolean;
	disableInput?: boolean;
	leftIcon?: ReactNode;
};

type SelectProps<T> = SelectOptions<T> & Omit<StyledSelectProps, "$icons">;

function Select<T>({
	$padding,
	$width,
	$fontSize,
	$fontWeight,
	$color,
	$borderColor,
	$focusColor,
	$maxULHeigth,
	$disableBorder,
	options,
	onChange,
	placeholder,
	defaultValue,
	disabled,
	disableClearButton,
	disableInput,
	leftIcon,
}: SelectProps<T>) {
	const optionState = useCustomState<Option<T> | null>(defaultValue || null);
	const displayMenuState = useCustomState<boolean>(false);
	const inputValue = useCustomState<string>("");
	const filteredOptions =
		optionState.value?.name === inputValue.value
			? options
			: options.filter((o) =>
					removeAccents(o.name?.toLowerCase()).includes(removeAccents(inputValue.value?.toLowerCase()))
			  );

	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (optionState.value !== null) {
			onChange && onChange(optionState.value.value);
			inputValue.set(optionState.value.name);
		} else {
			onChange && onChange(null);
			inputValue.set("");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [optionState.value]);

	useEffect(() => {
		if (defaultValue) {
			optionState.set(defaultValue);
			inputValue.set(defaultValue?.name);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (option: Option<T>) => {
		return () => {
			optionState.set(option);
			displayMenuState.reset();
		};
	};

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		inputValue.set(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Tab") {
			e.preventDefault();
			const matchingOption =
				options.find((o) =>
					removeAccents(o.name.toLowerCase()).startsWith(removeAccents(inputValue.value.toLowerCase()))
				) ||
				options.find((o) =>
					removeAccents(o.name.toLowerCase()).includes(removeAccents(inputValue.value.toLowerCase()))
				);

			if (matchingOption) {
				optionState.set(matchingOption);
				inputValue.set(matchingOption.name);
			}
		}

		if (e.key === "Enter") {
			e.preventDefault();
			const matchingOption =
				options.find((o) =>
					removeAccents(o.name.toLowerCase()).startsWith(removeAccents(inputValue.value.toLowerCase()))
				) ||
				options.find((o) =>
					removeAccents(o.name.toLowerCase()).includes(removeAccents(inputValue.value.toLowerCase()))
				);

			if (matchingOption) {
				optionState.set(matchingOption);
				inputValue.set(matchingOption.name);
				inputRef.current?.blur();
			}
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleInputFocus = (_: React.FocusEvent<HTMLInputElement, Element>) => {
		displayMenuState.set(true);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleInputBlur = (_: React.FocusEvent<HTMLInputElement, Element>) => {
		setTimeout(() => {
			displayMenuState.set(false);
		}, 200);
	};

	return (
		<StyledSelect
			{...{
				$padding,
				$width,
				$fontSize,
				$fontWeight,
				$color,
				$borderColor,
				$focusColor,
				$maxULHeigth,
				$disableBorder,
				$disabled: disabled,
				$leftIcon: !!leftIcon,
			}}
		>
			<div>
				{leftIcon}
				<input
					placeholder={placeholder}
					value={inputValue.value as string}
					onChange={handleChangeInput}
					onKeyDown={handleKeyDown}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					ref={inputRef}
					disabled={disabled || disableInput}
				/>
				{!disabled && (
					<div className="icons">
						{!disableClearButton && optionState.value && <FaXmark onClick={() => optionState.set(null)} />}
						{displayMenuState.value ? (
							<FaAngleUp onClick={() => inputRef.current?.blur()} />
						) : (
							<FaAngleDown onClick={() => inputRef.current?.focus()} />
						)}
					</div>
				)}
			</div>
			<ul className={!disabled && displayMenuState.value ? "showing" : "hidden"}>
				{filteredOptions.map((option, index) => (
					<li
						className={optionState.value === option.value ? "selected" : ""}
						onClick={handleChange(option)}
						key={`option_${index}`}
					>
						<p> {option.name} </p>
					</li>
				))}
			</ul>
		</StyledSelect>
	);
}

export default Select;
