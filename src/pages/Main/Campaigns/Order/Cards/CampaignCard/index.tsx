import { FaAngleDown, FaAngleUp, FaHashtag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { defaultInput } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import { Campaign } from "../../../../../../interfaces/Campaign.type";
import { CustomState } from "../../../../../../utils/customState.hook";
import StyledCard from "../style";

interface SegmentCardProps {
	campaignData: Campaign;
	campaignsState: CustomState<Campaign[]>;
	index: number;
}

const CampaignCard = ({ campaignData, campaignsState, index }: SegmentCardProps) => {
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

	function onButtonPress(type: string) {
		if (type === "up") {
			campaignsState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === campaignData.NOME && v.PRIORIDADE === campaignData.PRIORIDADE && v.PRIORIDADE) {
						return { ...v, PRIORIDADE: v.PRIORIDADE - 1 };
					}
					return v;
				});
				return newState.sort((a, b) => {
					if (a.PRIORIDADE && b.PRIORIDADE) {
						if (a.PRIORIDADE === b.PRIORIDADE) {
							return -1;
						} else {
							return a.PRIORIDADE - b.PRIORIDADE;
						}
					} else if (a.PRIORIDADE) {
						return 1;
					} else if (b.PRIORIDADE) {
						return -1;
					}
					return 0;
				});
			});
		} else {
			campaignsState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === campaignData.NOME && v.PRIORIDADE === campaignData.PRIORIDADE) {
						return { ...v, PRIORIDADE: (v.PRIORIDADE ?? 0) + 1 };
					}
					return v;
				});
				return newState.sort((a, b) => {
					if (a.PRIORIDADE && b.PRIORIDADE) {
						if (a.PRIORIDADE === b.PRIORIDADE) {
							return -1;
						} else {
							return a.PRIORIDADE - b.PRIORIDADE;
						}
					} else if (a.PRIORIDADE) {
						return 1;
					} else if (b.PRIORIDADE) {
						return -1;
					}
					return 0;
				});
			});
		}
	}

	return (
		<StyledCard>
			<span>
				<FaHashtag />
				<Input
					{...defaultInput}
					$width="6rem"
					type="text"
					inputMode="numeric"
					min={0}
					value={campaignData.PRIORIDADE}
					onChange={(e) => onInputChangeFn(+e.target.value)}
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{(campaignData.PRIORIDADE ?? 0) > 0 && (
						<button onClick={() => onButtonPress("up")}>
							<FaAngleUp />
						</button>
					)}
					{index < campaignsState.value.length - 1 && (
						<button onClick={() => onButtonPress("down")}>
							<FaAngleDown />
						</button>
					)}
				</div>
			</span>

			<h2> {campaignData.NOME} </h2>
		</StyledCard>
	);
};

export default CampaignCard;
