import { FaHeadphones, FaHeadset, FaMicrophone, FaUserTie } from "react-icons/fa6";
import InfoBox from "../../../../../components/InfoBox";
import InfoSection from "../../../../../styles/info-section.style";

const OperatorsHeader = () => {

    return (
        <InfoSection>
            <div>
                <InfoBox
                    icon={<FaUserTie />}
                    title="Supervisores"
                    mainValue={"10"}
                    subValue={"5% dos usuários"}
                />
                <InfoBox
                    icon={<FaMicrophone />}
                    title="Operadores (Ativo)"
                    mainValue={"90"}
                    subValue={"45% dos usuários"}
                />
                <InfoBox
                    icon={<FaHeadphones />}
                    title="Operadores (Receptivo)"
                    mainValue={"70"}
                    subValue={"35% dos usuários"}
                />
                <InfoBox
                    icon={<FaHeadset />}
                    title="Operadores (Ambos)"
                    mainValue={"30"}
                    subValue={"15% dos usuários"}
                />
            </div>
        </InfoSection>
    );
}

export default OperatorsHeader;