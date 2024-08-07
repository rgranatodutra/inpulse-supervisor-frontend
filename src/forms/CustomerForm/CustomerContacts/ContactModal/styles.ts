import styled from "styled-components";

const StyledContactModal = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    row-gap: 1rem;

    height: 52vh;
    width: 60rem;
    max-width: 100%;
    overflow-y: auto;
    padding-right: 4px;

    >div {
        display: inline-block;

        &.buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 1rem;
        }
    }

    >button {
        justify-self: flex-end;
        align-self: right;
        margin-left: auto;
    }
`;

export default StyledContactModal;