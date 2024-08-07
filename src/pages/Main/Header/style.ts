import styled from "styled-components";

const StyledHeader = styled.header`
    z-index: 1;
    background-color: var(--color-grey-7-h);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(99, 99, 99, 0.1);

    &>a:nth-child(1)>div {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
        width: max-content;
        cursor: pointer;

        :hover {
            filter: brightness(1.1);
        }
        
        >button {
            font-size: 1.25rem;

            @media (min-width: 48rem) {
                display: none;
            }
        }

        >img {
            height: 2.5rem;
            pointer-events: none;

            @media (max-width: 48rem) {
                display: none;
            }
        }

        >h2 {
            color: var(--color-gray-8);
            font-weight: 500;
            font-size: 1rem;
        }
    }

    &>div.user_box {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;

        box-sizing: border-box;
        width: max-content;
        max-width: 20rem;
        height: 100%;
        padding: 1rem;

        background-color: var(--color-primary);
        color: white;
        overflow: hidden;

        >svg {
            font-size: 3rem;
            min-width: 3rem;
        }
        
        >div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 1rem;
            font-weight: 500;

            >p {
                overflow: hidden;
                white-space: nowrap;
            }

            >div {
                >span:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }

        }
    }
`;

export default StyledHeader;