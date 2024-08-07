import { FaTag } from "react-icons/fa6";
import StyledGroupCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import { CustomerGroup } from "../../../../../interfaces/CustomerGroup.type";
import EditGroupModal from "../EditGroupModal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import DeleteGroupModal from "../DeleteGroupModal";

interface GroupCardProps {
	groupData: CustomerGroup;
	update: (groupData: CustomerGroup) => void;
}

const GroupCard = ({ groupData, update }: GroupCardProps) => {
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
							<EditGroupModal group={groupData} update={update} />
						);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<DeleteGroupModal group={groupData} update={update} />
						);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
				<ButtonType3>
					<a> Visualizar Clientes </a>
				</ButtonType3>
			</div>
		</StyledGroupCard>
	);
};

export default GroupCard;
