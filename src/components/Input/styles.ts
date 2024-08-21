import styled, { css } from "styled-components";

export type StyledInputProps = {
	$padding: [number, number];
	$fontSize?: number;
	$fontWeight?: number;
	$width: string;
	$color: string;
	$borderColor?: string;
	$focusColor: string;
	$disableBorder?: boolean;
};

const StyledInput = styled.div<StyledInputProps>`
	${(p) => css`
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		height: max-content;
		width: ${p.$width};
		max-width: 100%;
		transition: 0.2s ease-in-out;

		&:has(.error) {
			> div:nth-child(1) {
				border-color: rgb(255, 100, 100);
				${p.$disableBorder &&
				css`
					border-color: transparent;
				`}
				>input {
					color: rgb(255, 100, 100);
				}

				> svg {
					color: rgb(255, 100, 100);
				}
			}
		}

		&:hover {
			background-color: rgba(100, 110, 135, 0.15);
		}

		&:focus-within {
			border-color: ${p.$focusColor};
			background-color: rgba(240, 245, 255, 0.15);
			${p.$disableBorder &&
			css`
				border-color: transparent;
			`}
		}

		> div.input-wrapper {
			box-sizing: border-box;
			width: 100%;
			max-width: 100%;
			display: flex;
			align-items: center;
			border: 1px solid ${p.$borderColor || p.$color};
			border-radius: 0.25rem;
			${p.$disableBorder &&
			css`
				border-color: transparent;
			`}

			>svg {
				font-size: ${p.$fontSize ? p.$fontSize * 1.125 + "rem" : "1rem"};
				width: ${p.$fontSize ? p.$fontSize * 1.125 + "rem" : "1rem"};
				color: ${p.$color};
				opacity: 0.8;
				padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};
				transition: 0.2s ease-in-out;

				:hover {
					background-color: rgba(70, 80, 95, 0.25);
				}

				@media (max-width: 50rem) {
					font-size: ${p.$fontSize ? p.$fontSize * 1.125 * 0.85 + "rem" : "0.75rem"};
					width: ${p.$fontSize ? p.$fontSize * 1.125 * 0.85 + "rem" : "0.75rem"};
				}
			}

			> span {
				font-size: ${p.$fontSize};
				color: ${p.$color};
				padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};
			}

			> svg + input {
				padding-left: 0;
			}

			> input + svg {
				padding-left: 0;
			}

			> input,
			textarea {
				box-sizing: border-box;
				font-size: ${p.$fontSize ? p.$fontSize + "rem" : "0.875rem"};
				font-weight: ${p.$fontWeight ? p.$fontWeight : "400"};
				color: ${p.$color};
				width: 100%;
				padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};
				border-top-left-radius: 0.25rem;
				border-bottom-left-radius: 0.2rem;

				@media (max-width: 50rem) {
					font-size: ${p.$fontSize ? p.$fontSize * 0.85 + "rem" : "0.75rem"};
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
				border-color: ${p.$focusColor};
				background-color: rgba(240, 245, 255, 0.15);
				${p.$disableBorder &&
				css`
					border-color: transparent;
				`}

				>svg {
					color: ${p.$focusColor};
				}
			}
		}

		> span.error {
			font-size: ${p.$fontSize ? `${p.$fontSize * 0.75}rem` : "0.75rem"};
			color: rgb(255, 75, 75);
			padding-left: 0.25rem;
		}
	`}
`;

export default StyledInput;
