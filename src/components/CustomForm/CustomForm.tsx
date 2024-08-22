import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { defaultInput100, defaultInput50 } from "../../components-variants/defaultInputs";
import { ButtonType2 } from "../../styles/buttons.style";
import Input from "../Input";
import Select from "../Select";
import StyledCustomForm from "./style";

type ClientFormProps = {
	disabled: boolean;
	buttonText: string;
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void;
	onSelectChange?: (e: string | number | undefined) => void;
	submitForm: () => void;
	formContent: {
		label?: string;
		type: "select" | "input";
		defaultStyleSize: "50" | "100";
		rightIcon?: ReactNode;
		leftIcon?: ReactNode;
		inputType?: string;
		selectOptions?: [{ name: string; value: any }];
		placeholder?: string;
		inputWidth: string;
	}[];
	widthRem: number;

	title?: string;
};

const CustomForm = ({
	disabled,
	onInputChange,
	onSelectChange,
	submitForm,
	buttonText,
	formContent,
	title,
	widthRem,
}: ClientFormProps) => {
	return (
		<StyledCustomForm style={{ width: `${widthRem}rem` }}>
			{title ? <h2> {title} </h2> : null}
			<form>
				{formContent.map((form) => {
					if (form.type === "input" && onInputChange) {
						return (
							<Input
								{...(form.defaultStyleSize === "100" ? defaultInput100 : defaultInput50)}
								$width={form.inputWidth}
								type={form.inputType ? form.inputType : "input"}
								rightIcon={form.rightIcon}
								leftIcon={form.leftIcon}
								label={form.label ? form.label : undefined}
								onChange={(e) => onInputChange(e)}
								placeholder={form.placeholder}
							/>
						);
					}
					if (form.type === "select" && form.selectOptions && onSelectChange) {
						return (
							<Select
								{...(form.defaultStyleSize === "100" ? defaultInput100 : defaultInput50)}
								leftIcon={form.leftIcon}
								label={form.label ? form.label : undefined}
								options={form.selectOptions}
								onChange={(e) => onSelectChange(e)}
								placeholder={form.placeholder}
							/>
						);
					}
				})}
				<ButtonType2 disabled={disabled} onClick={() => submitForm()}>
					<FaCheck />
					{buttonText}
				</ButtonType2>
			</form>
		</StyledCustomForm>
	);
};

export default CustomForm;
