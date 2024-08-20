import styled from "styled-components";

const StyledCampaignsUnitsPage = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

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
`;

export default StyledCampaignsUnitsPage;
