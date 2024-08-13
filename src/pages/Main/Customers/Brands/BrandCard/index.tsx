import { FaTag } from "react-icons/fa6";
import StyledBrandCard from "./style";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import EditBrandModal from "../EditBrandModal";
import DeleteBrandModal from "../DeleteBrandModal";
import { useContext } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import { Brand } from "../../../../../interfaces/Brand.type";

interface BrandCardProps {
	brandData: Brand;
	updateOnEdit: (BrandData: Brand) => void;
	updateOnDelete: (BrandData: Brand) => void;
}

const BrandCard = ({
	brandData,
	updateOnEdit,
	updateOnDelete,
}: BrandCardProps) => {
	const { modalState } = useContext(GlobalContext);

	return (
		<StyledBrandCard>
			<div>
				<span>
					<FaTag />
					{brandData.CODIGO}
				</span>
				<h2> {brandData.DESCRICAO}</h2>
				{/* <h3> {BrandData.COD_UNIDADE}</h3> */}
			</div>
			<div>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<EditBrandModal brand={brandData} update={updateOnEdit} />
						);
					}}
				>
					<a> Editar </a>
				</ButtonType3>
				<ButtonType3
					onClick={() => {
						modalState.set(
							<DeleteBrandModal
								brand={brandData}
								updateOnDelete={updateOnDelete}
							/>
						);
					}}
				>
					<a> Remover </a>
				</ButtonType3>
			</div>
		</StyledBrandCard>
	);
};

export default BrandCard;
