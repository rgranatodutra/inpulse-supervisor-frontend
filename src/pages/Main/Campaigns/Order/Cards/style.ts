import styled from "styled-components";

const StyledCard = styled.li`
	box-sizing: border-box;
	padding: 1rem;
	width: 100%;

	display: grid;
	grid-template-areas: "order title subtitle";
	grid-template-columns: 7.5rem 1fr max-content;
	align-items: center;
	gap: 1rem;

	color: var(--color-grey-2);
	background-color: var(--color-grey-8);
	transition: 0.3s ease-in-out;

	&:nth-child(odd) {
		background-color: var(--color-grey-7);
	}

	&:hover {
		background-color: var(--color-grey-6);
	}

	> span:nth-child(1) {
		grid-area: order;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	> h2:nth-child(2) {
		grid-area: title;
	}

	&:nth-last-child(1) {
		grid-area: subtitle;
		justify-self: flex-end;
		margin-left: auto;
	}
`;

export default StyledCard;
