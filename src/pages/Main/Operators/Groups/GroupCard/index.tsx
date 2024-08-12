import { useContext } from "react";
import { FaTag } from "react-icons/fa6";
import { GlobalContext } from "../../../../../contexts/global";
import { User } from "../../../../../interfaces/User.type";
import { UserGroup } from "../../../../../interfaces/UserGroup.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import { CustomState } from "../../../../../utils/customState.hook";
import DeleteGroupModal from "../DeleteGroupModal";
import EditGroupModal from "../EditGroupModal";
import ManageGroupModal from "../ManageGroupModal";
import StyledGroupCard from "./style";

interface GroupCardProps {
	usersState: CustomState<User[]>;
	groupData: UserGroup;
	updateOnEdit: (groupData: UserGroup) => void;
	updateOnDelete: (groupData: UserGroup) => void;
}

const GroupCard = ({ usersState, groupData, updateOnEdit, updateOnDelete }: GroupCardProps) => {
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
						modalState.set(<EditGroupModal group={groupData} update={updateOnEdit} />);
					}}
				>
					Editar
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteGroupModal group={groupData} updateOnDelete={updateOnDelete} />);
					}}
				>
					Remover
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(<ManageGroupModal usersState={usersState} />);
					}}
				>
					Gerenciar Grupo
				</ButtonType3>
			</div>
		</StyledGroupCard>
	);
};

export default GroupCard;
