import styled from "styled-components";

const StyledSegmentCard = styled.li`
	box-sizing: border-box;
	display: flex;
	color: var(--color-grey-2);
	padding: 1rem;
	background-color: var(--color-grey-8);
	width: 100%;
	transition: 0.3s ease-in-out;

	&:nth-child(odd) {
		background-color: var(--color-grey-7);
	}

	&:hover {
		background-color: var(--color-grey-6);
	}

	display: flex;
	align-items: center;
	gap: 1rem;

	> h2 {
		width: 15rem;
	}

	> a {
		width: 10rem;
	}
`;

export default StyledSegmentCard;
