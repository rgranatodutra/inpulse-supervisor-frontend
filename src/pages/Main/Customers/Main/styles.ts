import styled from "styled-components";

const StyledCustomersPage = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-areas: "top" "button" "list";
    grid-template-rows: max-content max-content 1fr;
    grid-template-columns: 100%;

    >div:nth-child(1) {
        grid-area: top;
        padding: 1rem;

        @media (max-width: 50rem) {
            padding: 0.5rem ;
        }
    }

    >div:nth-child(2) {
        box-sizing: border-box;
        grid-area: button;
        padding-left: 1rem;
        width: 100%;

        @media (max-width: 50rem) {
            padding: 0 0.5rem ;
        }
    }

    >div:nth-child(3) {
        grid-area: list;
        
        @media (min-width: 50rem) {
            height: calc(100vh - 19rem);
            max-height: calc(100vh - 19rem);
        }


    }
`;

export default StyledCustomersPage;