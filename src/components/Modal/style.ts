import styled from "styled-components";

const StyledModal = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	width: 100vw;
	height: 100vh;
	background-color: var(--color-grey-0-o);
	backdrop-filter: blur(1px);

	display: flex;
	justify-content: center;

	> div {
		margin-top: 20vh;
		background-color: var(--color-grey-8);
		width: max-content;
		height: max-content;
		border-radius: 0.375rem;
		max-height: 60vh;
		box-sizing: border-box;
		min-width: 20rem;

		display: grid;
		grid-template-areas: "header" "content";
		grid-template-columns: 100%;
		grid-template-rows: 2.5rem calc(100% - 2.5rem);

		@media (max-width: 50rem) {
			width: 96vw;
			height: max-content;
			margin-top: 10vh;
			max-height: 80vh;
		}

		> header {
			border-top-left-radius: 0.375rem;
			border-top-right-radius: 0.375rem;

			padding: 0.5rem 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			box-sizing: border-box;
			width: 100%;
			user-select: none;

			> button,
			a {
				display: flex;
				align-items: center;
				justify-content: center;
				transition: font-size 0.15s ease-in-out;
				font-size: 1rem;
				color: var(--color-grey-2);
				width: 1rem;
				cursor: pointer;

				> svg {
					pointer-events: none;
				}

				&:hover {
					font-size: 1.25rem;
				}
			}

			> h2 {
				color: var(--color-grey-2);
				line-height: 150%;
			}
		}

		> div {
			box-sizing: border-box;
			width: max-content;
			max-width: 100%;
			padding: 0.5rem 1rem 1rem 1rem;
			max-height: 80vh;
		}
	}
`;

export default StyledModal;
