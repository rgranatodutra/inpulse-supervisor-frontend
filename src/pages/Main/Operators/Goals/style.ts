import styled from "styled-components";

const StyledOperatorsGoalsPage = styled.div`
    box-sizing: border-box;
    padding: 1rem;

    >form {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 0;

        >div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        >button {
            width: max-content;
        }
    }

    >ul {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;

        border: 2px solid var(--color-grey-6-h);
        background-color: var(--color-grey-7);

        height: calc(100vh - 18rem);
    }
`;

export default StyledOperatorsGoalsPage;