import styled from "styled-components";

const StyledTableHeader = styled.header`
	grid-area: options;
	padding: 0.75rem;
	background-color: var(--color-grey-7);
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 50rem) {
		flex-direction: column;
		gap: 1rem;
	}

	> div:nth-child(1) {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-right: 1rem;
		min-width: max-content;

		> button {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1rem;
			color: var(--color-grey-2);

			> svg {
				pointer-events: none;
			}

			&:hover {
				transform: scale(1.5);
			}

			@media (max-width: 50rem) {
				display: none;
			}
		}
	}
	> div:nth-child(2) {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 1rem;

		> .auto-update {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
		> button {
			background-color: var(--color-grey-7);
			&:hover {
				background-color: var(--color-grey-2);
			}
		}

		@media (max-width: 50rem) {
			justify-content: center;
			flex-wrap: wrap;

			> *:not(button) {
				width: 100%;
			}

			> button {
				width: calc(50% - 0.5rem);
			}

			> button:nth-child(4) {
				width: 100%;
			}
		}
	}
`;

export default StyledTableHeader;
