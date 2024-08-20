import styled from "styled-components";

const StyledResultModal = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	width: 30rem;

	> button {
		margin-left: auto;
		margin-right: auto;
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
		font-size: "1rem";
		height: "1.25rem";
		box-sizing: "content-box";

		&:hover {
			filter: opacity(0.75);
		}
	}
	> button:disabled {
		opacity: 0.35;
	}
`;

export default StyledResultModal;
