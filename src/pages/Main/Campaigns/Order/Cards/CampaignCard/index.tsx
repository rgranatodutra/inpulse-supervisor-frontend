import { FaHashtag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { defaultInput } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import { Campaign } from "../../../../../../interfaces/Campaign.type";
import { CustomState } from "../../../../../../utils/customState.hook";
import StyledCard from "../style";

interface SegmentCardProps {
	campaignData: Campaign;
	campaignsState: CustomState<Campaign[]>;
}

const CampaignCard = ({ campaignData, campaignsState }: SegmentCardProps) => {
	function onInputChangeFn(event: number) {
		if (event >= 0) {
			campaignsState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === campaignData.NOME && v.PRIORIDADE === campaignData.PRIORIDADE) {
						return { ...v, PRIORIDADE: event };
					}
					return v;
				});
				return newState.sort((a, b) => {
					if (a.PRIORIDADE && b.PRIORIDADE) {
						return a.PRIORIDADE - b.PRIORIDADE;
					} else if (a.PRIORIDADE) {
						return 1;
					} else if (b.PRIORIDADE) {
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
					min={0}
					defaultValue={campaignData.PRIORIDADE ?? 0}
					value={campaignData.PRIORIDADE}
					onChange={(e) => onInputChangeFn(+e.target.value)}
				/>
			</span>

			<h2> {campaignData.NOME} </h2>
		</StyledCard>
	);
};

export default CampaignCard;
