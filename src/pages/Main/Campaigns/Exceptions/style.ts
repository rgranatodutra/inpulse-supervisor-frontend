import styled from "styled-components";

const StyledExceptionsPage = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	height: calc(100% - 4rem);

	> div:nth-child(1) {
		margin: 1rem;
		width: calc(100% - 1.5rem);
		background-color: var(--color-grey-7-h);
		display: flex;
		outline: 1px solid var(--color-grey-6);
		border-radius: 0.5rem;

		> h1 {
			padding: 1rem;
			cursor: pointer;
			line-height: 150%;
			font-size: 1.5rem;
			user-select: none;

			&:hover {
				background-color: var(--color-primary);
				transition: 300ms;
			}

			&.selected {
				color: var(--color-primary);
				&:hover {
					background-color: var(--color-grey-7-h);
				}
			}
		}
	}

	.display-table {
		width: calc(100% - 1.5rem);
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 10rem);
		overflow: auto;
	}
`;

export default StyledExceptionsPage;
