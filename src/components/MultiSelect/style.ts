import styled, { css } from "styled-components";

export type StyledMultiSelectProps = {
    $padding: [number, number];
    $fontSize?: number;
    $fontWeight?: number;
    $width: string;
    $color: string;
    $borderColor?: string;
    $icons: number;
}

const StyledMultiSelect = styled.div<StyledMultiSelectProps>`
    ${p => css`
        box-sizing: border-box;
        width: ${p.$width};
        user-select: none;
        position: relative;
        border: 2px solid ${p.$borderColor || p.$color};
        border-radius: 0.5rem;

        svg {
            font-size: ${p.$fontSize ? (p.$fontSize * 1.125) + "rem" : "1rem"};
            width: ${p.$fontSize ? (p.$fontSize * 1.125) + "rem" : "1rem"};
            color: ${p.$color};
            opacity: 0.8;
            padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};

            @media (max-width: 50rem) {
                font-size: ${p.$fontSize ? (p.$fontSize * 1.125 * 0.85) + "rem" : "0.875rem"};
                width: ${p.$fontSize ? (p.$fontSize * 1.125 * 0.85) + "rem" : "0.875rem"};
            }

            &:nth-child(1) {
                margin-right: ${((p.$fontSize || 0.875) / 2) + "rem"};
            }

            &:nth-last-child(1) {
                margin-left: ${((p.$fontSize || 0.875) / 2) + "rem"};
            }
        }

        >div:nth-child(1) {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            width: 100%;
            
            &:not([disabled]){
                cursor: pointer;
            }

            >p {
                font-size: ${p.$fontSize ? p.$fontSize + "rem" : "0.875rem"};
                font-weight: ${p.$fontWeight ? p.$fontWeight : "400"};
                color: ${p.$color};
                padding: ${p.$padding[0] + "rem"} ${p.$padding[1] + "rem"};

                @media (max-width: 50rem) {
                    font-size: ${p.$fontSize ? (p.$fontSize * 0.85) + "rem" : "0.75rem"};
                }
            }

            >p+*:nth-last-child(1) {
                margin-left: auto;
            }
        }

        >ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: ${`${(p.$padding[0] * 2) + (((p.$padding[0] * 2) + (p.$fontSize || 1)) / 4) + (p.$fontSize || 1)}rem`};
            border-radius: 0.5rem;
            left: 0;
            background-color: var(--color-grey-8);
            width: 100%;
            max-height: calc(40vh - 2rem);
            overflow-y: auto;
            box-shadow: 0 0 1px 2px var(--color-grey-5);
            z-index: 2;

            >li {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                
                box-sizing: border-box;
                min-height: max-content;

                ${`padding: ${p.$padding[0]}rem ${p.$padding[1]}rem;`};

                &:hover {
                    background-color: var(--color-grey-7);
                    cursor: pointer;
                }

                &.selected {
                    background-color: var(--color-grey-7);
                }

                &:nth-child(1) {
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    padding-top: 0.125rem;
                    ${`padding-top: ${p.$padding[0]}rem;`}
                }

                &:nth-last-child() {
                    border-bottom-left-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                    ${`padding-bottom: ${p.$padding[0]}rem;`}
                }

                >p {
                    font-size: ${p.$fontSize + "rem"};
                    font-weight: ${p.$fontWeight ? p.$fontWeight : 500};
                
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                svg {
                    font-size: ${p.$fontSize ? (p.$fontSize * 1.125) + "rem" : "1rem"};
                    width: ${p.$fontSize ? (p.$fontSize * 1.125) + "rem" : "1rem"};
                    color: ${p.$color};
                    opacity: 0.8;

                    @media (max-width: 50rem) {
                        font-size: ${p.$fontSize ? (p.$fontSize * 1.125 * 0.85) + "rem" : "0.875rem"};
                        width: ${p.$fontSize ? (p.$fontSize * 1.125 * 0.85) + "rem" : "0.875rem"};
                    }
                }
            }

            &.hidden {
                visibility: hidden;
            }

            transition-property: visibility;
        }

    `}
`;

export default StyledMultiSelect;