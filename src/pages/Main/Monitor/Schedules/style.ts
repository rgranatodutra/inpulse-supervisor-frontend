import styled from "styled-components";

const StyledMonitorSchedules = styled.div`
    box-sizing: border-box;

    >main {
        height: 100%;
        display: grid;
        grid-template-areas: "filters table";
        grid-template-columns: 26rem 1fr;
        grid-template-rows: 100%;

        >form {
            display: grid;
            grid-template-areas: "variable" "fixed";
            grid-template-columns: 100%;
            grid-template-rows: max-content 1fr;
        
            border-right: 1px solid var(--color-grey-6);
        }
    }
`;

export default StyledMonitorSchedules;