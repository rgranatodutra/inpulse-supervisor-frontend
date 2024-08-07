import styled from "styled-components";

const StyledContactsTable = styled.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-grey-7);
    overflow-x: auto;
    margin-top: 0.5rem;

    >thead {
        box-sizing: border-box;
        width: max-content;
        padding: 0.5rem;
        background-color: var(--color-grey-6);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        >tr {
            text-align: left;
            width: 100%;
            display: grid;
            grid-template-areas:  "actions sex  name  nickname age  office mail  birthday team  children f_dir f_cel f_res";
            grid-template-columns: 5rem    2rem 12rem 12rem    3rem 10rem  12rem 6rem     6rem  4rem     10rem 10rem 10rem;

            >td {
                font-size: 0.75rem;
            }
        }
    }


    >tbody {
        box-sizing: border-box;
        width: max-content;

        height: 10rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        >tr {
            width: max-content;
            display: grid;
            grid-template-areas:  "actions sex  name  nickname age  office mail  birthday team  children f_dir f_cel f_res";
            grid-template-columns: 5rem    2rem 12rem 12rem    3rem 10rem  12rem 6rem     6rem  4rem     10rem 10rem 10rem;
            padding: 0.5rem;
            
            >td {
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                >button {
                    color: var(--color-grey-2);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    >svg {
                        pointer-events: none;
                    }
                }
            }
        }
    }
`;

export default StyledContactsTable;