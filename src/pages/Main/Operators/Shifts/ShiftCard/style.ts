import styled from "styled-components";

const StyledSegmentCard = styled.li`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
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

	> div:nth-child(1) {
		display: flex;
		align-items: center;
		gap: 1rem;

		> span:nth-child(1) {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
		> h2 {
			width: 10rem;
		}
	}

	> div:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
`;

export default StyledSegmentCard;
