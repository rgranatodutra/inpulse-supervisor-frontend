import { useContext } from "react";
import { FaTag } from "react-icons/fa6";
import { GlobalContext } from "../../../../../contexts/global";
import { City } from "../../../../../interfaces/City.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteCityModal from "../DeleteCityModal";
import EditCityModal from "../EditCityModal";
import StyledRoleCard from "./style";

interface CityCardProps {
	cityData: City;
	updateOnEdit: (cityData: City) => void;
	updateOnDelete: (cityData: City) => void;
}

const CityCard = ({ cityData, updateOnEdit, updateOnDelete }: CityCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledRoleCard>
			<div>
				<span>
					<FaTag />
					{cityData.CODIGO}
				</span>

				<h2> {cityData.NOME} </h2>

				<h2> {cityData.UF} </h2>
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(<EditCityModal city={cityData} update={updateOnEdit} />);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteCityModal city={cityData} updateOnDelete={updateOnDelete} />);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
			</div>
		</StyledRoleCard>
	);
};

export default CityCard;
