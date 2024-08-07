import styled, { css } from "styled-components";

type StyledMainPageProps = {
    $displayNavigationMenu: boolean;
}

const StyledMainPage = styled.div<StyledMainPageProps>`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-areas: 
        "header header"
        "menu content"
    ;

    grid-template-rows: 4rem calc(100vh - 4rem);
    grid-template-columns: 6rem calc(100vw - 6rem);

    background-color: var(--color-grey-8);
    color: var(--color-grey-0);

    @media (max-width: 50rem) {
        grid-template-areas: "header" "content";
        grid-template-columns: 100vw;

        height: max-content;
    }

    ${(props) => {
        return !props.$displayNavigationMenu &&
            css`
                @media (max-width: 48rem) {
                    display: grid;
                    grid-template-areas: 
                        "header"
                        "content"
                    ;

                    grid-template-rows: 4rem 1fr;
                    grid-template-columns: 100%;

                    &>:nth-child(2) {
                        display: none;
                    }
                }

        `
    }}

    &>:nth-child(1) {
        grid-area: header;
    }

    &>:nth-child(2) {
        @media (min-width: 50rem) {
            grid-area: menu;
        }
    }

    &>:nth-child(3) {
        grid-area: content;
        box-sizing: border-box;
    }

`;

export default StyledMainPage;