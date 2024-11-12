import styled from "styled-components";

const StyledOperatorsGoalsPage = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);

	> form {
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem 0 0 1rem;

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

	.display-table {
		width: calc(100% - 1.5rem);
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 5rem);
		overflow: auto;
	}
`;

export default StyledOperatorsGoalsPage;
