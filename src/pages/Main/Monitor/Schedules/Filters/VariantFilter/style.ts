import styled from "styled-components";

const StyledVariantFilter = styled.section`
    box-sizing: border-box;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    >.input-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    >:nth-child(1) {
        margin-bottom: 0.5rem;
    }
`;

export default StyledVariantFilter;