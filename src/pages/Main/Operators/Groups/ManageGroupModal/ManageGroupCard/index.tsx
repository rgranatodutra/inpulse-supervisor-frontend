import { FaTag } from "react-icons/fa6";
import StyledGroupCard from "./style";
import { OperatorGroup } from "../../../../../../interfaces/OperatorGroup.type";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../contexts/global";
interface ManageGroupCardProps {
	data: OperatorGroup;
	updateOnEdit: (groupData: OperatorGroup) => void;
}

const ManageGroupCard = ({ data, updateOnEdit }: ManageGroupCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledGroupCard>
			<div>
				<span>
					<FaTag />
					{data.CODIGO}
				</span>
				<h2> {data.DESCRICAO} </h2>
			</div>
		</StyledGroupCard>
	);
};

export default ManageGroupCard;
