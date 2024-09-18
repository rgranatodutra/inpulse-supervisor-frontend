import styled, { css } from "styled-components";
import { StyledTableProps } from "./types";

const StyledTable = styled.div<StyledTableProps>`
	${(p) => css`
		display: grid;
		grid-template-areas: "options" "table";
		grid-template-rows: max-content 1fr;

		box-sizing: border-box;
		margin: 1rem;
		outline: 1px solid var(--color-grey-6);
		border-radius: 0.5rem;
		position: relative;

		@media (max-width: 50rem) {
			padding: 0.5rem;
		}

		transition: 0.3s ease-in-out;

		${p.$isMaximized &&
		css`
			@media (min-width: 50rem) {
				box-sizing: border-box;
				width: 100vw;
				height: 100vh !important;
				backdrop-filter: brightness(60%);
				position: absolute;
				top: 0;
				left: 0;
				z-index: 7;
				background-color: transparent;
				max-height: 100vh !important;
				border-radius: 0;
				margin: 0;
				padding: 1rem;
			}
		`}

		.loading_spinner {
			position: absolute !important;
			/* top: calc(50vh - 0.594rem);
        left: calc(50vw - 1.781rem); */
			top: calc(50% - 0.594rem) !important;
			left: calc(50% - 1.781rem) !important;
		}

		> table {
			background-color: var(--color-grey-8);
			overflow-x: auto;
			grid-area: table;
			display: grid;
			grid-template-areas: "thead" "tbody";
			grid-template-rows: max-content 1fr;

			& > thead {
				box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.125);
				z-index: 1;
			}

			& > thead > tr {
				grid-area: thead;
				display: flex;
				align-items: center;
				box-sizing: border-box;

				background-color: var(--color-grey-6-h);

				th {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: ${p.$fontSize + "rem"};
					color: var(--color-grey-3);
					padding: 0.75rem 1rem;

					@media (max-width: 50rem) {
						font-size: ${p.$fontSize * 0.875 + "rem"};
						padding: 0.5rem 0.75rem;
					}
				}

				${p.$haveActions &&
				css`
					th:nth-child(1) {
						width: 4rem;
						min-width: 4rem;
						display: flex;
						justify-content: center;
					}
				`}

				${p.$columns.map(
					(c, i) => css`
						th:nth-child(${p.$haveActions ? i + 2 : i + 1}) {
							width: ${c.width ? c.width + "rem" : `${100 / p.$columns.filter((c) => !c.width).length}%`};
							${c.width && `min-width: ${c.width + "rem"};`}

							@media (max-width: 50rem) {
								width: ${c.width ? c.width * 0.5 + "rem" : `${100 / p.$columns.filter((c) => !c.width).length}%`};
							}
						}
					`
				)}
			}

			& > tbody {
				grid-area: tbody;
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				overflow-y: auto;
				overflow-x: hidden;

				> tr {
					box-sizing: border-box;
					width: 100%;
					display: flex;
					align-items: center;

					&:nth-child(odd) {
						background-color: var(--color-grey-7-h);
					}

					> td {
						font-size: ${p.$fontSize + "rem"};
						color: var(--color-grey-1);
						padding: 1rem 1rem;

						display: flex;
						align-items: center;
						gap: 0.5rem;

						@media (max-width: 50rem) {
							font-size: ${p.$fontSize * 0.875 + "rem"};
							padding: 0.75rem;
						}

						> a {
							font-size: ${p.$fontSize * 1.5 + "rem"};
							color: var(--color-grey-2);
							cursor: pointer;
							width: max-content;

							&:hover {
								transform: scale(1.25);
								transition: 0.3s ease-in-out;
							}
						}
					}

					${p.$haveActions &&
					css`
						td:nth-child(1) {
							width: 4rem;
							min-width: 4rem;
							display: flex;
							justify-content: center;
						}
					`}

					${p.$columns.map(
						(c, i) => css`
							> td:nth-child(${p.$haveActions ? i + 2 : i + 1}) {
								width: ${c.width || `${100 / p.$columns.filter((c) => !c.width).length}%`};
								width: ${c.width ? c.width + "rem" : `${100 / p.$columns.filter((c) => !c.width).length}%`};
								${c.width && `min-width: ${c.width + "rem"};`}
								${c.primarykey && `font-weight: 600;`}
                    ${c.alignContent && `text-align: ${c.alignContent};`}

                    @media (max-width: 50rem) {
									width: ${c.width ? c.width * 0.5 + "rem" : `${100 / p.$columns.filter((c) => !c.width).length}%`};
								}
							}
						`
					)}
				}
			}
		}
	`}
`;

export default StyledTable;
