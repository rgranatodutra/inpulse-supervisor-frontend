import { FaHashtag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { defaultInput } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import { UFState } from "../../../../../../interfaces/UFState.type";
import { CustomState } from "../../../../../../utils/customState.hook";
import StyledCard from "../style";

interface StateCardProps {
	stateData: UFState;
	ufState: CustomState<UFState[]>;
}

const StateCard = ({ stateData, ufState }: StateCardProps) => {
	function onInputChangeFn(event: number) {
		if (event >= 0) {
			ufState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === stateData.NOME && v.UF === stateData.UF) {
						return { ...v, ORDEM: event };
					}
					return v;
				});
				return newState.sort((a, b) => {
					if (a.ORDEM && b.ORDEM) {
						return a.ORDEM - b.ORDEM;
					} else if (a.ORDEM) {
						return 1;
					} else if (b.ORDEM) {
						return -1;
					}
					return 0;
				});
			});
		} else if (event < 0) {
			toast.error("Campo não pode ser menor que 0");
		}
	}

	return (
		<StyledCard>
			<span>
				<FaHashtag />
				<Input
					{...defaultInput}
					$width="6rem"
					type="number"
					defaultValue={stateData.ORDEM}
					value={stateData.ORDEM}
					onChange={(e) => onInputChangeFn(+e.target.value)}
				/>
			</span>
			<h2> {stateData.NOME} </h2>
			<h2> {stateData.UF} </h2>
		</StyledCard>
	);
};

export default StateCard;
