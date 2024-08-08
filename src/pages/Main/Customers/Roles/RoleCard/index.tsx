import { FaTag } from "react-icons/fa6";
import StyledRoleCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import { Position } from "../../../../../interfaces/Position.type";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import EditRoleModal from "../EditRoleModal";
import DeleteRoleModal from "../DeleteRoleModal";
import { Link } from "react-router-dom";

interface RoleCardProps {
	roleData: Position;
	updateOnEdit: (roleData: Position) => void;
	updateOnDelete: (roleData: Position) => void;
}

const RoleCard = ({
	roleData,
	updateOnEdit,
	updateOnDelete,
}: RoleCardProps) => {
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
						modalState.set(
							<EditRoleModal role={roleData} update={updateOnEdit} />
						);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<DeleteRoleModal
								role={roleData}
								updateOnDelete={updateOnDelete}
							/>
						);
					}}
				>
					<a> Remover </a>
				</ButtonType3>

				<ButtonType3>
					<Link to={`/clientes?GRUPO=${roleData.CODIGO}`}>
						Visualizar Clientes
					</Link>
				</ButtonType3>
			</div>
		</StyledRoleCard>
	);
};

export default RoleCard;
