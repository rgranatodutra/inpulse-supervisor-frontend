import styled, { css } from "styled-components";

type StyledFiltersModalProps = {
    $modalFiltersWidth: number;
}
const StyledFiltersModal = styled.div<StyledFiltersModalProps>`
${p => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    gap: 2rem;
    width: ${p.$modalFiltersWidth ? p.$modalFiltersWidth + "rem" : "100%"};

    @media (max-width: 50rem) {
        width: calc(96vw - 2rem);
    }

    >div {
        width: 100%;
    }

    >div:nth-child(1)>div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        >h3 {
            color: var(--color-grey-2);
            font-size: 1rem
        }

        >div {
            width: 100%;
            display: flex;
            gap: 1rem;
            row-gap: 0.75rem;
            flex-wrap: wrap;
            
            @media (max-width: 50rem) {
                flex-direction: column;
                align-items: stretch;
                width: 100%;

                >* {
                    box-sizing: c;
                    width: 100% !important;

                    >div {
                        box-sizing: border-box;
                        width: 100% !important;
                    }
                }
            }
        }
    }

    >div:nth-child(2) {
        display: flex;
        gap: 0.5rem;
    }
`}
`;

export default StyledFiltersModal;