import styled from "styled-components";

const StyledOperatorsPausesPage = styled.div`
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

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
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

export default StyledOperatorsPausesPage;
