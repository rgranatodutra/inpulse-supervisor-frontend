import { PropsWithChildren } from "react";
import { FaCheck } from "react-icons/fa6";
import { ButtonType2 } from "../../styles/buttons.style";
import StyledCustomForm from "./style";

type FormTemplate = PropsWithChildren<{
	disabled: boolean;
	buttonText: string;
	submitForm: () => void;
	widthRem?: string;
	title?: string;
}>;

const FormTemplate = ({ disabled, children, submitForm, buttonText, title, widthRem }: FormTemplate) => {
	return (
		<StyledCustomForm style={{ width: widthRem ?? "100%" }}>
			{title && <h2> {title} </h2>}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submitForm();
				}}
			>
				{children}
				<ButtonType2 disabled={disabled}>
					<FaCheck />
					{buttonText}
				</ButtonType2>
			</form>
		</StyledCustomForm>
	);
};

export default FormTemplate;
