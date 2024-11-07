import styled from "styled-components";

const StyledExceptionsPage = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	height: calc(100% - 4rem);

	> .top-menu {
		margin: 1rem;
		width: calc(100% - 1.5rem);
		background-color: var(--color-grey-7-h);
		display: flex;
		outline: 1px solid var(--color-grey-6);
		border-radius: 0.5rem;
		justify-content: space-evenly;

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
`;

export default StyledExceptionsPage;
