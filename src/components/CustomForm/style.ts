import styled from "styled-components";

const StyledCustomForm = styled.div`
	padding-left: 1rem;
	box-sizing: border-box;

	> form {
		padding: 1rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: end;

		> button {
			user-select: none;
			font-size: 1rem;
			height: 2rem;
			box-sizing: "content-box";
			width: max-content;
		}

		> button:disabled {
			opacity: 0.35;
		}
	}
`;

export default StyledCustomForm;
