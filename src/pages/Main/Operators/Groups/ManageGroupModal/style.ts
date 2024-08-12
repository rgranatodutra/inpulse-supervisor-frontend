import styled from "styled-components";

const StyledGroupModal = styled.div`
	display: flex;
	width: 100%;
	height: 25rem;
	max-height: 100%;

	> div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 50%;
		box-sizing: border-box;

		> h2 {
			margin-left: 0.5rem;
		}

		> ul {
			overflow: auto;
			list-style: none;
			font-size: 1rem;
			display: inline-block;
			flex-direction: column;
			gap: 2rem;
			width: 25rem;
			height: 100%;
			max-height: calc(100% - 1rem);
		}
	}
`;

export default StyledGroupModal;
