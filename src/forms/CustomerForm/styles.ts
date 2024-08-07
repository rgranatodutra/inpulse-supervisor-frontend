import styled from "styled-components";

const StyledCustomerForm = styled.div`
    overflow: auto;
    background-color: var(--color-grey-8);
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;

    box-sizing: border-box;

    @media (max-width: 50rem) {
        h3 {
            font-size: 0.75rem;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    >header{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 1rem;
        width: 100%;

        >button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            transition: 0.3s ease-in-out;
            cursor: pointer;
            color: var(--color-grey-2);
            
            >svg {
                pointer-events: none;
            }

            &:hover {
                transform: scale(1.25);
            }
        }
    }

    >form {
        padding: 0.5rem 1rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        row-gap: 0.5rem;

        >nav {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            row-gap: 0.5rem;    
            margin-top: 0.5rem;
            box-sizing: border-box;
            width: 100%;
        }

        >div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            >h3 {
                width: max-content;
            }
        }

        >section {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            row-gap: 0.5rem;
            border-radius: 0.5rem;
            background-color: var(--color-grey-6-h);
            box-sizing: border-box;
            padding: 1rem;
            width: 100%;

            >div {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;

                >div {
                    background-color: var(--color-grey-8);
                    border-radius: 0.5rem;
                }

                >h3 {
                    width: max-content;
                }
            }
        }

    }

    >div:nth-child(3) {
        margin-top: 0.5rem;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        >button {
            font-weight: 500;
            padding: 0.5rem 2rem;
            border-radius: 0.25rem;
            border: 1px solid;
            background-color: var(--color-primary);
            border-color: var(--color-primary);
            color: white;

            &:hover {
                filter: opacity(0.75);
            }
        }
    }
`;

export default StyledCustomerForm;