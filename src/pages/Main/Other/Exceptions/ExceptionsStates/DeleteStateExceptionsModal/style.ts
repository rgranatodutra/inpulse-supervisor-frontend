import styled from "styled-components";

const StyledGroupModal = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
		user-select: none;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;

export default StyledGroupModal;
