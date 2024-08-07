import { ReactNode } from "react";
import StyledInfoBox from "./styles";

type InfoBoxProps = {
    icon: ReactNode;
    title: string;
    mainValue: ReactNode;
    subValue: ReactNode;
}

const InfoBox = ({
    icon, title, mainValue, subValue
}: InfoBoxProps) => {
    return (
        <StyledInfoBox>
            <span className="big_icon">
                {icon}
            </span>
            <div>
                <span className="title">
                    {title}
                </span>
                <h2> {mainValue} </h2>
                <span className="percentage_last_month">
                    {subValue}
                </span>
            </div>
        </StyledInfoBox>
    );
}

export default InfoBox;