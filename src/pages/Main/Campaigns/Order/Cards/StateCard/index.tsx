import { FaTag } from "react-icons/fa6";
import { UFState } from "../../../../../../interfaces/UFState.type";
import StyledCard from "../style";

interface StateCardProps {
	stateData: UFState;
}

const StateCard = ({ stateData }: StateCardProps) => {
	return (
		<StyledCard>
			<div className="li-items">
				<span>
					<FaTag />
					{stateData.ORDEM}
				</span>

				<h2> {stateData.NOME} </h2>

				<h2> {stateData.UF} </h2>
			</div>
		</StyledCard>
	);
};

export default StateCard;
