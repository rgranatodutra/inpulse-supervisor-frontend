import styled from "styled-components";

const StyledInfoBox = styled.div`
    display: flex;
    gap: 1rem;
    padding-right: 1.5rem;
    border-right: 1px solid var(--color-grey-6);

    width: max-content;
    white-space: nowrap;

    @media (max-width: 50rem) {
        padding: 0;
        padding-right: 0;
        border: none;
        
        width: 100%;
        box-sizing: border-box;
    }

    &:nth-last-child(1) {
        border: none;
    }

    &>.big_icon {
        padding: 1rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        width: max-content;
        height: max-content;
        background-color: var(--color-primary-o);
        color: var(--color-primary);

        @media (max-width: 50rem) {
            font-size: 2.125rem;
            padding: 1.125rem;
        }
    }

    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 50rem) {
            max-width: calc(100% - 4.375rem);
        }
        span.title {
            font-size: 0.75rem;
            font-weight: 400;
            color: var(--color-grey-2);
            opacity: 0.85;
        }

        h2 {
            font-size: 1.125rem;
            font-weight: 700;

            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        span.percentage_last_month {
            font-size: 0.75rem;
            display: flex;
            align-items: center;

            >span {
                display: flex;
                align-items: center;
                margin-right: 0.25rem;
                font-weight: 600;
                
            }

            .increase {
                color: rgb(50, 225, 90);
            }

            .decrease {
                color: rgb(254, 50, 90);
            }
        }
    }
`;

export default StyledInfoBox;