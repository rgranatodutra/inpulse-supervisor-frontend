import { FaTag } from "react-icons/fa6";
import StyledGroupCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import { OperatorGroup } from "../../../../../interfaces/OperatorGroup.type";
import EditGroupModal from "../EditGroupModal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import DeleteGroupModal from "../DeleteGroupModal";
import ManageGroupModal from "../ManageGroupModal";

interface GroupCardProps {
	groupData: OperatorGroup;
	updateOnEdit: (groupData: OperatorGroup) => void;
	updateOnDelete: (groupData: OperatorGroup) => void;
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
				<ButtonType3
					onClick={() => {
						modalState.set(<ManageGroupModal group={groupData} />);
					}}
				>
					<a> Gerenciar Grupo</a>
				</ButtonType3>
			</div>
		</StyledGroupCard>
	);
};

export default GroupCard;
