import StyledTextArea, { StyledTextAreaProps } from "./styles";

type InputProps =
    React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & StyledTextAreaProps;

const TextArea = ({
    $padding,
    $width,
    $fontSize,
    $fontWeight,
    $color,
    $focusColor,
    $borderColor,
    ...inputProps
}: InputProps) => {
    return (
        <StyledTextArea {...{ $padding, $width, $fontSize, $fontWeight, $color, $focusColor, $borderColor }}>
            <div>
                <textarea {...inputProps} />
            </div>
        </StyledTextArea>
    );
}

export default TextArea;