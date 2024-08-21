import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import StyledInput, { StyledInputProps } from "./styles";

type InputOptions =
	| ({
			rightIcon?: ReactNode;
			leftIcon?: ReactNode;
			error?: string;
			isTextArea?: false;
			label?: string;
	  } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>)
	| ({
			rightIcon?: ReactNode;
			leftIcon?: ReactNode;
			error?: string;
			isTextArea: true;
			label?: string;
	  } & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>);

type InputProps = InputOptions & Omit<StyledInputProps, "$icons">;

const Input = ({
	$padding,
	$width,
	$fontSize,
	$fontWeight,
	$color,
	$borderColor,
	$focusColor,
	$disableBorder,
	leftIcon,
	rightIcon,
	error,
	label,
	isTextArea,
	...inputProps
}: InputProps) => {
	return (
		<StyledInput
			{...{
				$padding,
				$width,
				$fontSize,
				$fontWeight,
				$color,
				$borderColor,
				$focusColor,
				$disableBorder,
			}}
		>
			{isTextArea ? (
				<>
					{label ? <label>{label}</label> : ""}
					<div className="input-wrapper">
						{leftIcon || ""}
						<textarea
							{...(inputProps as DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>)}
						/>
						{rightIcon || ""}
					</div>
				</>
			) : (
				<>
					{label ? <label>{label}</label> : ""}
					<div className="input-wrapper">
						{leftIcon || ""}
						<input {...(inputProps as DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>)} />
						{rightIcon || ""}
					</div>
				</>
			)}
			{error && <span className="error"> {error} </span>}
		</StyledInput>
	);
};

export default Input;
