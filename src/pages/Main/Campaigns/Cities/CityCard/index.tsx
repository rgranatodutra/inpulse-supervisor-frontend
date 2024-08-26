import { useContext } from "react";
import { FaTag } from "react-icons/fa6";
import { GlobalContext } from "../../../../../contexts/global";
import { Position } from "../../../../../interfaces/Position.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteRoleModal from "../DeleteRoleModal";
import EditRoleModal from "../EditRoleModal";
import StyledRoleCard from "./style";

interface CityCardProps {
	roleData: Position;
	updateOnEdit: (roleData: Position) => void;
	updateOnDelete: (roleData: Position) => void;
}

const CityCard = ({ roleData, updateOnEdit, updateOnDelete }: CityCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledRoleCard>
			<div>
				<span>
					<FaTag />
					{roleData.CODIGO}
				</span>
				<h2> {roleData.DESCRICAO} </h2>
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(<EditRoleModal role={roleData} update={updateOnEdit} />);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteRoleModal role={roleData} updateOnDelete={updateOnDelete} />);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
			</div>
		</StyledRoleCard>
	);
};

export default CityCard;
