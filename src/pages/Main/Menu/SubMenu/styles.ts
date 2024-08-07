import styled, { css } from "styled-components";

export type StyledNavigationSubMenuProps = {
    $displaySubMenu: boolean;
}

const StyledNavigationSubMenu = styled.div<StyledNavigationSubMenuProps>`
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-7);

    >header {
        padding: 1rem;
        gap: 1rem;
        background-color: rgba(0,0,0, 0.075);
        display: none;

        >div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        >button {
            transition: 0.3s ease-in-out;
            color: var(--color-grey-2);

            >svg {
                pointer-events: none;
            }
            &:hover {
                transform: scale(1.25);
            }
        }
    }

    @media (max-width: 50rem) {
        transition: height 0.5s ease-in-out;
        height: max-content;

        ${props => !props.$displaySubMenu && css`
            height: 0;
            box-shadow: none;
            * {
                display: none;
            }
            overflow: hidden;
        `}
    }

    @media (min-width: 50rem) {
        position: absolute;
        left: 6rem;
        width: 16rem;
        top: 4rem;
        height: calc(100vh - 4rem);
        box-shadow: 1px 0 1px 1px rgba(99, 99, 99, 0.2);
        transition: width 0.5s ease-in-out;
        white-space: nowrap;
        z-index: 2;

        * {
            animation: custom-hidden 0.5s ease-in-out;
        }

        >button:nth-child(odd) {
            background-color: rgba(99, 99, 99, 0.025);
        }

        ${props => !props.$displaySubMenu && css`
            width: 0;
            height: 0;
            box-shadow: none;
            * {
                display: none;
            }
            overflow: hidden;
        `}

        >header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    >button {
        padding: 1rem;
        padding-left: 3.25rem;
        text-align: start;
        color: var(--color-grey-2);

        &.selected {
            color: var(--color-primary);
        }

        >p {
            pointer-events: none;
        }

        &:hover {
            background-color: var(--color-primary);
            color: white;

            >p {
                transform: scale(1.05); 
            }
        }
    }
    
`;

export default StyledNavigationSubMenu;