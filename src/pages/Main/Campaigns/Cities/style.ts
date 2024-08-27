import styled from "styled-components";

const StyledCustomersRolesPage = styled.div`
	box-sizing: border-box;
	padding: 2rem;

	.padded {
		padding-left: 1rem;

		height: calc(100% - 6rem);

		> ul {
			overflow: auto;
			max-height: 100%;
			box-sizing: border-box;
			width: 100%;
			display: flex;
			flex-direction: column;

			border: 2px solid var(--color-grey-6-h);
			background-color: var(--color-grey-7);
		}
	}
`;

export default StyledCustomersRolesPage;
