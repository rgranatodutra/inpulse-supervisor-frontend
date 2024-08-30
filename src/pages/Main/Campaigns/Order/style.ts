import styled from "styled-components";

const StyledCustomersRolesPage = styled.div`
	box-sizing: border-box;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	row-gap: 2rem;
	padding: 2rem;
	overflow: auto;

	display: grid;
	grid-template-areas:
		"campaigns cities states"
		"segments final buttons";

	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 30rem 30rem;

	.campaings {
		grid-area: campaigns;
	}

	.cities {
		grid-area: cities;
	}

	.states {
		grid-area: states;
	}

	.segments {
		grid-area: segments;
	}

	.final {
		grid-area: final;
	}

	.buttons {
		grid-area: buttons;
		gap: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		> button {
			font-size: 1.5rem;
		}
	}

	.ul-div {
		box-sizing: border-box;
		display: grid;
		grid-template-areas: "title" "ul";
		grid-template-rows: 2rem 1fr;
		grid-template-columns: 1fr;

		> h2 {
			padding: 0.5rem 0;
			text-align: center;
			background-color: var(--color-grey-7);
		}
	}

	.pagination {
		display: flex;
		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);
		justify-content: center;
		> h2 {
			align-self: center;

			padding: 0.5rem;
			font-size: 1.5rem;
		}

		button {
			vertical-align: middle;
			font-size: 1.5rem;
			&:hover {
				cursor: pointer;
			}
		}
	}

	ul {
		overflow: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);
		width: 100%;
		height: 100%;
	}

	@media (max-width: 1024px) {
		grid-template-areas:
			"campaigns cities states"
			"segments search fields"
			"final buttons buttons";

		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 30rem 30rem 30rem;
	}
`;

export default StyledCustomersRolesPage;
