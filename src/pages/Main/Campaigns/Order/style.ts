import styled from "styled-components";

const StyledCustomersRolesPage = styled.div`
	box-sizing: border-box;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem;
	overflow: auto;

	.bottom {
		gap: 1rem;
		display: flex;

		.li-items {
			width: 20vw;
		}
	}

	.top {
		display: flex;
		gap: 1rem;
		.li-items {
			width: 20vw; //24 rem for 1920px w screens
		}
	}

	.ul-div {
		box-sizing: border-box;
		> h2 {
			padding: 0.5rem 0;
			text-align: center;
			background-color: var(--color-grey-7);
		}
	}

	.Buttons {
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

	ul {
		overflow: auto;
		height: 28rem;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);
	}
`;

export default StyledCustomersRolesPage;
