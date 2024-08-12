import { FaMinus, FaPlus, FaTag } from "react-icons/fa6";
import { User } from "../../../../../../interfaces/User.type";
import StyledGroupCard from "./style";

interface GroupUserCardProps {
	user: User;
	manageOperator: (operatorId: number, addOperator: boolean) => void;
	isGroupMember: boolean;
}

const GroupUserCard = ({ user, manageOperator, isGroupMember }: GroupUserCardProps) => {
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
					<button onClick={() => manageOperator(user.CODIGO, false)}>
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
