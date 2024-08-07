import styled from "styled-components";

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1rem;
    align-items: center;
    margin-top: 0.5rem;
    background-color: var(--color-grey-7);
    border: 1px solid var(--color-grey-6-h);
    padding: 1rem 2rem;
    border-radius: 1rem;

    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 50rem) {
        padding: 1rem;
    }
    
    >div:nth-child(1) {
        display: flex;
        row-gap: 1rem;
        gap: 1rem;
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;

        @media (max-width: 50rem) {
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }
    }

    h3, select, button {
        color:  var(--color-grey-2);
    }
`;

export default InfoSection;