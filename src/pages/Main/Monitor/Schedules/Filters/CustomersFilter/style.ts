import styled from "styled-components";

const StyledCustomersFilter = styled.section`
	border-top: 1px solid var(--color-grey-5);
	box-sizing: border-box;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	overflow-y: auto;
	padding-bottom: 5rem;

	> .input-list {
		max-height: 80%;
		overflow: auto;

		> .input-wrapper {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			ul {
				position: static;
				max-height: 15rem;
				padding-bottom: 1rem;

				&.hidden {
					display: none;
				}
			}
		}
	}

	> :nth-child(1) {
		margin-bottom: 0.5rem;
	}
`;

export default StyledCustomersFilter;
