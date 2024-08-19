import styled from "styled-components";

const StyledOperatorsGoalsPage = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem 0;
		margin-left: 1rem;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			width: max-content;
		}
		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 7rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 18rem);
	}
`;

export default StyledOperatorsGoalsPage;
