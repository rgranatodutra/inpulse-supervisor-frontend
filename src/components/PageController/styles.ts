import styled from "styled-components";

const StyledPageController = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.375rem 0.75rem;
    height: 1.25rem;

    border: 1px solid var(--color-grey-3);
    background-color: var(--color-grey-3);
    color: var(--color-grey-7);
    font-weight: 500;
    font-size: 0.75rem;
    border-radius: 0.5rem;

    >button {
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-grey-8);
        transition: 0.3s ease-in-out;

        >svg {
            pointer-events: none;
        }

        &:hover {
            transform: scale(1.25);
            color: var(--color-grey-7);
        }
    }

    >button:disabled {
        opacity: 0;
        pointer-events: none;
    }
`;

export default StyledPageController;