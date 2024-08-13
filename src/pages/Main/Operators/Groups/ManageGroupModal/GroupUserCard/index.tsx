import { FaMinus, FaPlus, FaTag } from "react-icons/fa6";
import { User } from "../../../../../../interfaces/User.type";
import StyledGroupCard from "./style";

interface GroupUserCardProps {
	groupUserId?: number;
	user: User;
	manageOperator: (operatorId: number, addOperator: boolean) => void;
	isGroupMember: boolean;
}

const GroupUserCard = ({ user, manageOperator, isGroupMember, groupUserId }: GroupUserCardProps) => {
	return (
		<StyledGroupCard>
			<div>
				<div>
					<span>
						<FaTag />
						{user.CODIGO}
					</span>
					<h2> {user.NOME} </h2>
				</div>
				{isGroupMember ? (
					<button onClick={() => manageOperator(groupUserId!, false)}>
						<FaMinus />
					</button>
				) : (
					<button onClick={() => manageOperator(user.CODIGO, true)}>
						<FaPlus />
					</button>
				)}
			</div>
		</StyledGroupCard>
	);
};

export default GroupUserCard;
