import { useContext } from "react";
import { FaTag } from "react-icons/fa6";
import { GlobalContext } from "../../../../../contexts/global";
import { PauseReason } from "../../../../../interfaces/PauseReason.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import DeletePauseModal from "../DeletePauseModal";
import EditPauseModal from "../EditPauseModal";
import StyledPauseCard from "./style";

interface PauseCardProps {
	pauseData: PauseReason;
	updateOnEdit: (PauseData: PauseReason) => void;
	updateOnDelete: (PauseData: PauseReason) => void;
}

const PauseCard = ({ pauseData, updateOnEdit, updateOnDelete }: PauseCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledPauseCard>
			<div>
				<span>
					<FaTag /> {pauseData.CODIGO}
				</span>
				<h2> {pauseData.DESCRICAO} </h2>
				<a>{pauseData.TEMPO_MAX_SEG} Segundos</a>
				<div className={`customer_active_tag ${pauseData.PRODUTIVIDADE === "SIM" ? "active" : "inactive"}`}>
					{pauseData.PRODUTIVIDADE === "SIM" ? "Produtiva" : "Não produtiva"}
				</div>
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(<EditPauseModal pause={pauseData} update={updateOnEdit} />);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(<DeletePauseModal pause={pauseData} updateOnDelete={updateOnDelete} />);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
			</div>
		</StyledPauseCard>
	);
};

export default PauseCard;
