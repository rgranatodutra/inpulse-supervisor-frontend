import { FaTag } from "react-icons/fa6";
import { Segment } from "../../../../../../interfaces/Segment.type";
import StyledCard from "../style";

interface SegmentCardProps {
	segmentData: Segment;
}

const SegmentCard = ({ segmentData: stateData }: SegmentCardProps) => {
	return (
		<StyledCard>
			<div className="li-items">
				<span>
					<FaTag />
					{stateData.ordem}
				</span>

				<h2> {stateData.NOME} </h2>
			</div>
		</StyledCard>
	);
};

export default SegmentCard;
