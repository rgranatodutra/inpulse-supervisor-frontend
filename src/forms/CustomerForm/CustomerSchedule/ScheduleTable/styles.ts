import styled from "styled-components";

const StyledScheduleTable = styled.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background-color: var(--color-grey-7);
    overflow-x: auto;
    margin-top: 0.5rem;
    font-size: 0.75rem;

    >thead {
        box-sizing: border-box;
        width: max-content;
        min-width: 100%;
        padding: 0.5rem;
        background-color: var(--color-grey-6);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        >tr {
            text-align: left;
            width: 100%;
            display: grid;
            grid-template-areas:  "camp  dt_agen dt_res result operad op_lig fone_lig lig_ini lig_fim";
            grid-template-columns: 10rem 10rem   6rem   10rem  10rem  10rem  6rem    10rem    10rem  ;

            >td {
                font-size: 0.75rem;
            }
        }
    }


    >tbody {
        box-sizing: border-box;
        min-width: 100%;
        width: max-content;
        height: max-content;
        min-height: 8rem;
        max-height: 14rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        >tr {
            box-sizing: border-box;
            width: max-content;
            min-width: 100%;
            display: grid;
            grid-template-areas:  "camp  dt_agen dt_res result operad op_lig fone_lig lig_ini lig_fim";
            grid-template-columns: 10rem 10rem   6rem   10rem  10rem  10rem  6rem    10rem    10rem;
            padding: 0.5rem;
            
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, 0.05);
            }

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

export default StyledScheduleTable;