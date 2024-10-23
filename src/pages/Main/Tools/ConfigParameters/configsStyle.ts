import styled from "styled-components";

const StyledParamsForm = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	height: calc(100% - 4rem);
	overflow: auto;

	.save-button {
		position: absolute;
		padding-left: calc(100% - 20rem);
		top: 90%;
		button {
			font-size: 1.5rem;
		}
	}

	.checkbox-input {
		display: inline-flex;
		gap: 0.5rem;
		margin: 0.5rem;
	}

	.checkbox-number {
		display: inline-flex;
		gap: 0.5rem;
		margin: 0.5rem;
		align-items: center;
		input:disabled {
			outline: 1px solid grey;
		}
	}

	.number-input {
		margin: 0.5rem;
	}

	form {
		margin: 1rem;
		margin-right: 0;
		margin-left: 0;
		display: flex;
		background-color: var(--color-grey-7-h);
		outline: 1px solid var(--color-grey-6);
		border-radius: 0.5rem;
		width: 100%;

		> .inputs {
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;
			width: 100%;
		}
		.number-inputs {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			width: 100%;
		}
	}

	.sub-form-line {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.sub-form {
		width: 100%;
		margin: 1rem;
		background-color: var(--color-grey-7-h);
		outline: 1px solid var(--color-grey-6);
		border-radius: 0.5rem;

		> .sub-title {
			display: flex;
			padding: 0.5rem;
			padding-bottom: 0;
		}
		> .sub-inputs {
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;
			padding: 1rem;
		}
		&.halved {
			width: 45%;
		}
	}

	> ul {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 10rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 18rem);
	}
`;

export default StyledParamsForm;
