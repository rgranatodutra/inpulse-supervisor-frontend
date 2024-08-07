import styled from "styled-components";

const StyledLoginPage = styled.div`
    width: 100%;
    height: 100%;

    background-image: url("./laptop_bg.jpg");
    
    >div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(255, 255, 255, 0.025);
        backdrop-filter: blur(4px) brightness(0.65);
        border-right: 1px solid rgba(0, 0, 0, 0.5);

        @media (max-width: 50rem) {
            width: 100%;

            >form {
                width: 100%;
                border: none;
            }
        }

        >form {
            width: 30rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 1rem;

            >img {
                width: 7.5rem;
                margin-bottom: 1rem;
            }
            
            >h2 {
                color: white;
                opacity: 0.85;
            }

            button {
                margin-top: 1rem;
                box-sizing: border-box;
                background-color: rgb(221, 223, 225);
                width: 20rem;
                border-radius: 0.5rem;
                padding: 1rem;
                pointer-events: all;
                font-weight: 600;

                transition: background-color 0.3s ease-in-out;

                &:hover {
                    background-color: white;
                }

                >.loading_spinner {
                    transform: scale(0.5);
                    height: 20px !important;
                    width: 1px !important;
                    position: static !important;
                    margin: 0 auto;
                }
            }
        }
    }
`;

export default StyledLoginPage;