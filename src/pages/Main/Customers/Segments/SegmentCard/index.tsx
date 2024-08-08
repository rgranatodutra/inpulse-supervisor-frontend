import { FaTag } from "react-icons/fa6";
import StyledSegmentCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import { useContext } from "react";
import { Segment } from "../../../../../interfaces/Segment.type";
import { GlobalContext } from "../../../../../contexts/global";
import EditSegmentModal from "../EditSegmentModal";
import DeleteSegmentModal from "../DeleteSegmentModal";
import { Link } from "react-router-dom";

interface SegmentCardProps {
	segmentData: Segment;
	updateOnEdit: (segmentData: Segment) => void;
	updateOnDelete: (segmentData: Segment) => void;
}

const SegmentCard = ({
	segmentData,
	updateOnEdit,
	updateOnDelete,
}: SegmentCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledSegmentCard>
			<div>
				<span>
					<FaTag /> {segmentData.CODIGO}
				</span>
				<h2> {segmentData.NOME} </h2>
				{/* <h3> {segmentData.COD_UNIDADE}</h3> */}
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<EditSegmentModal segment={segmentData} update={updateOnEdit} />
						);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<DeleteSegmentModal
								segment={segmentData}
								updateOnDelete={updateOnDelete}
							/>
						);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
				<ButtonType3>
					<Link to={`/clientes?SEGMENTO=${segmentData.CODIGO}`}>
						Visualizar Clientes
					</Link>
				</ButtonType3>
			</div>
		</StyledSegmentCard>
	);
};

export default SegmentCard;
