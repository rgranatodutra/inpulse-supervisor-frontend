import { FaHashtag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { defaultInput } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import { Segment } from "../../../../../../interfaces/Segment.type";
import { CustomState } from "../../../../../../utils/customState.hook";
import StyledCard from "../style";

interface SegmentCardProps {
	segmentData: Segment;
	segmentState: CustomState<Segment[]>;
}

const SegmentCard = ({ segmentData, segmentState }: SegmentCardProps) => {
	function onInputChangeFn(event: number) {
		if (event >= 0) {
			segmentState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === segmentData.NOME && v.CODIGO === segmentData.CODIGO) {
						return { ...v, ordem: event };
					}
					return v;
				});
				return newState.sort((a, b) => {
					if (a.ordem && b.ordem) {
						return a.ordem - b.ordem;
					} else if (a.ordem) {
						return 1;
					} else if (b.ordem) {
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
					defaultValue={segmentData.ordem ?? 0}
					value={segmentData.ordem ?? undefined}
					onChange={(e) => onInputChangeFn(+e.target.value)}
				/>
			</span>

			<h2> {segmentData.NOME} </h2>
		</StyledCard>
	);
};

export default SegmentCard;
