import styled from "styled-components";

const StyledCampaignsUnitsPage = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	height: calc(100% - 4rem);

	> button {
		margin-left: 1rem;
		width: max-content;
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
	.display-table {
		width: calc(100% - 1.5rem);
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 1.5rem);
		overflow: auto;
	}
`;

export default StyledCampaignsUnitsPage;
