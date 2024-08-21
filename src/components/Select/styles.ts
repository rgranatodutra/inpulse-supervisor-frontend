import styled, { css } from "styled-components";

export type StyledSelectProps = {
	$padding: [number, number];
	$fontSize?: number;
	$fontWeight?: number;
	$width: string;
	$color: string;
	$borderColor?: string;
	$focusColor?: string;
	$maxULHeigth?: number;
	$disableBorder?: boolean;
	$disabled?: boolean;
	$leftIcon?: boolean;
};

const StyledSelect = styled.div<StyledSelectProps>`
	${(p) => css`
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		box-sizing: border-box;
		width: ${p.$width};
		user-select: none;
		position: relative;

		> label {
			font-size: ${p.$fontSize || "0.875"}rem;
			line-height: 100%;
		}

		${p.$disableBorder &&
		css`
			border-color: transparent;
		`}
		transition: 0.2s ease-in-out;

		&:hover {
			background-color: rgba(100, 110, 125, 0.15);
		}

		&:focus-within {
			border-color: ${p.$focusColor};
			background-color: rgba(240, 245, 255, 0.15);
			${p.$disableBorder &&
			css`
				border-color: transparent;
			`}
		}

		> div {
			border: 1px solid ${p.$borderColor || p.$color};
			border-radius: 0.25rem;
			> .icons {
				width: max-content;
				padding: ${p.$padding[0] * 0.5 + "rem"} ${p.$padding[0] * 0.5 + "rem"};
				display: flex;
				align-items: center;
			}
		}

		> div > .icons > svg {
			font-size: ${p.$fontSize ? p.$fontSize * 1.125 + "rem" : "1rem"};
			width: ${p.$fontSize ? p.$fontSize * 1.125 + "rem" : "1rem"};
			color: ${p.$color};
			padding: ${p.$padding[0] * 0.5 + "rem"} ${p.$padding[0] * 0.5 + "rem"};
			border-radius: 0.25rem;
			transition: 0.2s ease-in-out;

			:hover {
				background-color: rgba(70, 80, 95, 0.25);
			}

			@media (max-width: 50rem) {
				font-size: ${p.$fontSize ? p.$fontSize * 1.125 * 0.85 + "rem" : "0.875rem"};
				width: ${p.$fontSize ? p.$fontSize * 1.125 * 0.85 + "rem" : "0.875rem"};
			}
		}

		> div.input-wrapper {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			width: 100%;

			${!p.$disabled
				? css`
						cursor: pointer;
				  `
				: ""}

			${p.$leftIcon &&
			css`
				> svg {
					padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};
					color: ${p.$color};
					font-size: ${p.$fontSize ? p.$fontSize + "rem" : "0.875rem"};
				}
			`}
            

            >input {
				font-size: ${p.$fontSize ? p.$fontSize + "rem" : "0.875rem"};
				font-weight: ${p.$fontWeight ? p.$fontWeight : "400"};
				color: ${p.$color};
				display: flex;
				align-items: center;
				gap: 0.5rem;
				width: 100%;

				@media (max-width: 50rem) {
					font-size: ${p.$fontSize ? p.$fontSize * 0.85 + "rem" : "0.75rem"};
				}

				padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};

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

			> p + *:nth-last-child(1) {
				margin-left: auto;
			}
		}

		> ul {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: ${`${p.$padding[0] * 2 + (p.$padding[0] * 2 + (p.$fontSize || 1)) / 4 + (p.$fontSize || 1)}rem`};
			transform: translateY(0.125rem);

			&.down {
				transform: translateY(1.5rem);
			}

			border-radius: 0.25rem;
			left: 0;
			background-color: var(--color-grey-8);
			width: 100%;
			max-height: calc(40vh - 2rem);
			${p.$maxULHeigth && `max-height: ${p.$maxULHeigth}rem;`}
			overflow-y: auto;
			box-shadow: 0 0 1px 1px var(--color-grey-5);
			z-index: 2;

			> li {
				${`padding: ${p.$padding[0]}rem ${p.$padding[1]}rem;`};

				&:hover {
					background-color: var(--color-grey-7);
					cursor: pointer;
				}

				&.selected {
					background-color: rgba(0, 0, 0, 10%);
				}

				&:nth-child(1) {
					border-top-left-radius: 0.25rem;
					border-top-right-radius: 0.25rem;
					padding-top: 0.125rem;
					${`padding-top: ${p.$padding[0]}rem;`}
				}

				&:nth-last-child() {
					border-bottom-left-radius: 0.25rem;
					border-bottom-right-radius: 0.25rem;
					${`padding-bottom: ${p.$padding[0]}rem;`}
				}

				> p {
					font-size: ${(p.$fontSize || 1) * 0.875 + "rem"};
					font-weight: ${p.$fontWeight ? p.$fontWeight : 400};

					display: flex;
					align-items: center;
					gap: 0.5rem;
				}

				svg {
					font-size: ${p.$fontSize ? p.$fontSize * 1.125 + "rem" : "1rem"};
					width: ${p.$fontSize ? p.$fontSize * 1.125 + "rem" : "1rem"};
					color: ${p.$color};
					opacity: 0.8;

					@media (max-width: 50rem) {
						font-size: ${p.$fontSize ? p.$fontSize * 1.125 * 0.85 + "rem" : "0.875rem"};
						width: ${p.$fontSize ? p.$fontSize * 1.125 * 0.85 + "rem" : "0.875rem"};
					}
				}
			}

			&.hidden {
				visibility: hidden;
			}

			transition-property: visibility;
		}
	`}
`;

export default StyledSelect;
