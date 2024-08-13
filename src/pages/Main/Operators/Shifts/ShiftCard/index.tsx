import { useContext } from "react";
import { FaTag } from "react-icons/fa6";
import { GlobalContext } from "../../../../../contexts/global";
import { Shift } from "../../../../../interfaces/Shift.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeleteShiftModal from "../DeleteShiftModal";
import EditShiftModal from "../EditShiftModal";
import StyledShiftCard from "./style";

interface ShiftCardProps {
	shiftData: Shift;
	updateOnEdit: (ShiftData: Shift) => void;
	updateOnDelete: (ShiftData: Shift) => void;
}

const ShiftCard = ({ shiftData, updateOnEdit, updateOnDelete }: ShiftCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledShiftCard>
			<div>
				<span>
					<FaTag /> {shiftData.CODIGO}
				</span>
				<h2> {shiftData.DESCRICAO} </h2>
				<a>
					{shiftData.ENTRADA_1.slice(0, 5)} - {shiftData.SAIDA_1.slice(0, 5)}{" "}
				</a>
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(<EditShiftModal shift={shiftData} update={updateOnEdit} />);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(<DeleteShiftModal shift={shiftData} updateOnDelete={updateOnDelete} />);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
			</div>
		</StyledShiftCard>
	);
};

export default ShiftCard;
