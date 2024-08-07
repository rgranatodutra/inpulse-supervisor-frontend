import styled from "styled-components";

const StyledNavigationMenu = styled.nav`
    box-sizing: border-box;
    background-color: var(--color-grey-7-h);
    box-shadow: 0 0 3px 1px rgba(99, 99, 99, 0.2);
    color: var(--color-grey-2);

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 50rem) {
        position: absolute;
        z-index: 2;
        left: 0;
        top: 4rem;
        width: 100%;
    }
`;

const StyledNavigationMenuButton = styled.div`
    width: 100%;

    >button {
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        height: 6rem;

        display: flex;
        align-items: center;
        gap: 1rem;
        
        font-weight: 600;

        cursor: pointer;

        @media (max-width: 50rem) {
            height: 4rem;
        }
        color: var(--color-grey-2);
   
        &>svg.angle_down {
            font-size: 0.75rem;
            margin-left: auto;

            @media (min-width: 48rem) {
                display: none;
            }
        }

        &>svg:nth-child(1) {
            font-size: 1.5rem;
        }

        @media (min-width: 48rem) {
            flex-direction: column
        }

        &.selected {
            color: var(--color-primary);
        }

        &:hover {
            background-color: var(--color-primary);
            color: white;
        }
    }
    
    @keyframes custom-hidden {
        0% {
            opacity: 0;
        } 80% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
`;

export default StyledNavigationMenu;
export { StyledNavigationMenuButton }