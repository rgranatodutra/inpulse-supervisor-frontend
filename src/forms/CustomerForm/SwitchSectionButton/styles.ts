import styled, { css } from "styled-components";

type StyledSwitchSectionButtonProps = {
    $isSelected: boolean;
    $isDisplaying: boolean;
}
const StyledSwitchSectionButton = styled.button<StyledSwitchSectionButtonProps>`
    background-color: var(--color-grey-6-h);
    color: var(--color-grey-3);
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    transition: 0.2s ease-in-out;

    >svg {
        color: var(--color-grey-2);
    }

    ${props => props.$isSelected ?
        css`
            background-color: var(--color-primary);
            color: white;
            cursor: default !important;
            position: none;

            >svg {
                color: white;
            }
        `
        :
        css`
            &:hover {
                transform: scale(1.1);
            }
        `
    }

    ${props => !props.$isDisplaying && css`
        display: none;
    `}
`;

export default StyledSwitchSectionButton;