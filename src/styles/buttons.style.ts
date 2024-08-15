import styled from "styled-components";

const ButtonType1 = styled.button`
	background-color: transparent;
	color: var(--color-grey-4);
	border: 1px solid;
	border-color: var(--color-grey-4);

	padding: 0.5rem;
	padding-right: 0.75rem;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	transition: background-color 0.3s ease-in-out;
	line-height: 100%;

	> p {
		font-weight: 500;
		font-size: 0.75rem;
		pointer-events: none;
	}

	> svg {
		pointer-events: none;
		font-size: 1rem;
		width: 1rem;
		color: var(--color-grey-3);

		opacity: 0.8;
	}

	@media (max-width: 50rem) {
		font-size: 0.75rem;

		> svg {
			font-size: 1rem;
		}
	}

	&:hover {
		background-color: var(--color-grey-2);
		border-color: var(--collor-grey-2);
		color: var(--color-grey-8);

		> svg {
			color: var(--color-grey-8);
		}
	}
`;

const ButtonType2 = styled.button`
	background-color: var(--color-grey-8);
	color: var(--color-grey-4);
	border-color: var(--color-grey-4);
	border: 1px solid;
	padding: 0.5rem 0.875rem;
	padding-right: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	border-radius: 0.5rem;

	font-size: 1rem;
	font-weight: 600;

	&:hover {
		background-color: var(--color-grey-3);
		color: var(--color-grey-8);
		border-color: var(--color-grey-3);

		> svg {
			color: var(--color-grey-8);
		}
	}
`;

const ButtonType3 = styled.div`
	& > a {
		color: var(--color-grey-2);
		display: flex;
		align-items: center;
		text-decoration: underline;
		width: max-content;
		gap: 0.5rem;
		cursor: pointer;

		font-size: 0.875rem;
		font-weight: 500;

		&:hover {
			color: var(--color-primary);
		}

		@media (max-width: 50rem) {
			width: 100%;
		}
	}
	& > svg:hover {
		cursor: pointer;
		transition: 200ms;
		transform: scale(1.25);
	}
`;

export { ButtonType1, ButtonType2, ButtonType3 };
