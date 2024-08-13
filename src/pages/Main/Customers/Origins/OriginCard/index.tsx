import { FaTag } from "react-icons/fa6";
import StyledOriginCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import { Origin } from "../../../../../interfaces/Origin.type";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import { Link } from "react-router-dom";
import EditOriginModal from "../EditOriginModal";
import DeleteOriginModal from "../DeleteOriginModal";

interface OriginCardProps {
	originData: Origin;
	updateOnEdit: (OriginData: Origin) => void;
	updateOnDelete: (OriginData: Origin) => void;
}

const OriginCard = ({
	originData,
	updateOnEdit,
	updateOnDelete,
}: OriginCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledOriginCard>
			<div>
				<span>
					<FaTag />
					{originData.CODIGO}
				</span>
				<h2> {originData.DESCRICAO} </h2>
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<EditOriginModal origin={originData} update={updateOnEdit} />
						);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<DeleteOriginModal
								origin={originData}
								updateOnDelete={updateOnDelete}
							/>
						);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
				<ButtonType3>
					<Link to={`/clientes?ORIGEM=${originData.CODIGO}`}>
						Visualizar Clientes
					</Link>
				</ButtonType3>
			</div>
		</StyledOriginCard>
	);
};

export default OriginCard;
