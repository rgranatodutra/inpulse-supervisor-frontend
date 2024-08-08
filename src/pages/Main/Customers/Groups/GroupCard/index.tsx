import { FaTag } from "react-icons/fa6";
import StyledGroupCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import { CustomerGroup } from "../../../../../interfaces/CustomerGroup.type";
import EditGroupModal from "../EditGroupModal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import DeleteGroupModal from "../DeleteGroupModal";
import { Link } from "react-router-dom";

interface GroupCardProps {
	groupData: CustomerGroup;
	updateOnEdit: (groupData: CustomerGroup) => void;
	updateOnDelete: (groupData: CustomerGroup) => void;
}

const GroupCard = ({
	groupData,
	updateOnEdit,
	updateOnDelete,
}: GroupCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledGroupCard>
			<div>
				<span>
					<FaTag />
					{groupData.CODIGO}
				</span>
				<h2> {groupData.DESCRICAO} </h2>
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<EditGroupModal group={groupData} update={updateOnEdit} />
						);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<DeleteGroupModal
								group={groupData}
								updateOnDelete={updateOnDelete}
							/>
						);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
				<ButtonType3>
					<Link to={`/clientes?GRUPO=${groupData.CODIGO}`}>
						Visualizar Clientes
					</Link>
				</ButtonType3>
			</div>
		</StyledGroupCard>
	);
};

export default GroupCard;
