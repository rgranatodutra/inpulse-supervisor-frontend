import styled, { css } from "styled-components";

export type StyledTextAreaProps = {
    $padding: [number, number];
    $fontSize?: number;
    $fontWeight?: number;
    $width: string;
    $color: string;
    $borderColor?: string;
    $focusColor?: string;
}


const StyledTextArea = styled.div<StyledTextAreaProps>`
    ${p => css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: max-content;
        width: ${p.$width};
        max-width: 100%;

        &:has(.error) {
            >div:nth-child(1) {
                border-color: rgb(255, 100, 100);
                >input {
                    color: rgb(255, 100, 100);
                }

                >svg {
                    color: rgb(255, 100, 100)
                }
            }
        }

        >div:nth-child(1) {
            box-sizing: border-box;
            width: ${p.$width};
            max-width: 100%;
            display: flex;
            align-items: center;
            border: 2px solid ${p.$borderColor || p.$color};
            border-radius: 0.5rem;

            >svg {
                font-size: ${p.$fontSize ? (p.$fontSize * 1.125) + "rem" : "1rem"};
                width: ${p.$fontSize ? (p.$fontSize * 1.125) + "rem" : "1rem"};
                color: ${p.$color};
                opacity: 0.8;
                padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};

                @media (max-width: 50rem) {
                    font-size: ${p.$fontSize ? (p.$fontSize * 1.125 * 0.85) + "rem" : "0.75rem"};
                    width: ${p.$fontSize ? (p.$fontSize * 1.125 * 0.85) + "rem" : "0.75rem"};
                }

                &:nth-child(1) {
                    margin-right: ${((p.$fontSize || 0.875) / 2) + "rem"};
                }

                &:nth-last-child(1) {
                    margin-left: ${((p.$fontSize || 0.875) / 2) + "rem"};
                }
            }

            >textarea {
                box-sizing: border-box;
                font-size: ${p.$fontSize ? p.$fontSize + "rem" : "0.875rem"};
                font-weight: ${p.$fontWeight ? p.$fontWeight : "400"};
                color: ${p.$color};
                width: 100%;
                padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
                resize: vertical;

                &[type="date"]::-webkit-calendar-picker-indicator {
                    background-color: white;
                    background-blend-mode: multiply;
                    border-radius: 0.25rem;
                }

                @media (max-width: 50rem) {
                    font-size: ${p.$fontSize ? (p.$fontSize * 0.85) + "rem" : "0.75rem"};
                }

                &::placeholder {
                    color: ${p.$color};
                    opacity: 0.8;
                }
                
                &:focus {
                    color: ${p.$focusColor};

                    &::placeholder {
                        color: ${p.$focusColor};
                        opacity: 0.8;
                    }
                }
            }

            &:focus-within {
                border: 1px solid ${p.$focusColor || p.$color};

                >svg {
                    color: ${p.$focusColor};
                }
            }
        }

        >span.error {
            font-size: ${p.$fontSize ? `${p.$fontSize * 0.75}rem` : "0.75rem"};
            color: rgb(255, 75, 75);
            padding-left: 0.25rem;
        }
    `}
`;

export default StyledTextArea;