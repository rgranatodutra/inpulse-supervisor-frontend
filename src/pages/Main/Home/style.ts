import styled from "styled-components";

const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	box-sizing: border-box;
	width: 100%;

	> h1 {
		font-size: 2.5rem;
		font-weight: 500;
	}
	> h3 {
		font-size: 1.5rem;
	}
	> div.funil {
		width: 64rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.125rem;
		border: 2px solid var(--color-grey-6-h);
		padding: 2rem;
		border-radius: 2rem;
		background-color: var(--color-grey-7-h);

		> div {
			box-sizing: border-box;
			padding: 1.25rem 1rem;
			border-radius: 2rem;
			border-bottom: 5px solid;
			border-color: var(--color-grey-0-o);

			h2,
			h4,
			h5 {
				color: white;
				font-size: 1.5rem;
			}

			> span.mid {
				height: 100%;
				width: 2px;
				background-color: white;
				justify-self: center;
			}
		}

		> div:nth-child(1) {
			width: 64rem;
			background-color: rgb(205, 35, 68);
			display: flex;
			justify-content: space-between;

			> div {
				width: calc(50% - 1px);
				text-align: center;
			}
		}

		> div:nth-child(2) {
			width: 52rem;
			background-color: rgb(205, 55, 68);
			display: flex;
			justify-content: space-between;

			> div {
				width: calc(50% - 1px);
				text-align: center;
			}
		}

		> div:nth-child(3) {
			width: 40rem;
			background-color: rgb(205, 75, 68);
			text-align: center;
		}

		> div:nth-child(4) {
			width: 28rem;
			background-color: rgb(205, 95, 68);
			text-align: center;
		}

		> div:nth-child(5) {
			width: 16rem;
			background-color: rgb(205, 115, 68);
			text-align: center;
		}
	}
`;

export default StyledHome;
