import styled from "styled-components";

const StyledReceptiveCalls = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	> h1 {
		margin-left: 1rem;
	}

	.display-table {
		width: calc(100% - 1.5rem);
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 1.5rem);
		overflow: auto;
	}
`;

export default StyledReceptiveCalls;
