import { FaTag } from "react-icons/fa6";
import { City } from "../../../../../../interfaces/City.type";
import StyledCard from "../style";

interface CityCardProps {
	cityData: City;
}

const CityCard = ({ cityData }: CityCardProps) => {
	return (
		<StyledCard>
			<div className="li-items">
				<span>
					<FaTag />
					{cityData.ORDEM}
				</span>

				<h2> {cityData.NOME} </h2>

				<h2> {cityData.UF} </h2>
			</div>
		</StyledCard>
	);
};

export default CityCard;
