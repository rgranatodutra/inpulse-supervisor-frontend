import { FaTag } from "react-icons/fa6";
import { Campaign } from "../../../../../../interfaces/Campaign.type";
import StyledCard from "../style";

interface SegmentCardProps {
	campaignData: Campaign;
}

const CampaignCard = ({ campaignData }: SegmentCardProps) => {
	return (
		<StyledCard>
			<div className="li-items">
				<span>
					<FaTag />
					{campaignData.PRIORIDADE}
				</span>

				<h2> {campaignData.NOME} </h2>
			</div>
		</StyledCard>
	);
};

export default CampaignCard;
