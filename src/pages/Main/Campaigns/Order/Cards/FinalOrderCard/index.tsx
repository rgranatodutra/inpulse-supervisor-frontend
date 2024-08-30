import { useEffect } from "react";
import { FaAngleDown, FaAngleUp, FaHashtag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { defaultInput } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import { parameters } from "../../../../../../interfaces/Parameters.type";
import useCustomState, { CustomState } from "../../../../../../utils/customState.hook";
import StyledCard from "../style";

interface FinalOrderCardProps {
	paramData: string;
	paramState: CustomState<parameters[]>;
	paramOrderState: CustomState<string[]>;
}

const FinalOrderCard = ({ paramData, paramState, paramOrderState }: FinalOrderCardProps) => {
	const nameToDisplay = useCustomState("");

	function onInputChangeFn(event: number) {
		if (event >= 0) {
			const valueToReplace = paramOrderState.value[event];
			const newArray = paramOrderState.value;
			newArray[event] = paramOrderState.value[index];
			newArray[index] = valueToReplace;

			paramOrderState.set(newArray);
			paramState.set((prev) => {
				return prev.map((v) => ({ ...v, SEQUENCIADEORDENACAO: newArray.toString() }));
			});
		} else if (event < 0) {
			toast.error("Campo não pode ser menor que 0");
		}
	}

	useEffect(() => {
		if (paramData === "TIPODEAGENDAMENTO") {
			paramData.charAt(0) + paramData.substring(1).toLowerCase();
			nameToDisplay.set("Tipo de agendamento");
		} else if (paramData === "PRIORIDADECAMPANHA") {
			nameToDisplay.set("Prioridade da campanha");
		} else if (paramData === "DATAAGENDAMENTO") {
			nameToDisplay.set("Data de agendamento");
		} else {
			nameToDisplay.set(paramData.charAt(0) + paramData.substring(1).toLowerCase());
		}
	}, []);

	const index = paramOrderState.value.findIndex((p) => p === paramData);

	return (
		<StyledCard>
			<span>
				<FaHashtag />
				<Input {...defaultInput} $width="6rem" type="number" defaultValue={index} value={index} disabled />
				<div style={{ display: "flex", flexDirection: "column" }}>
					{index > 0 && (
						<button onClick={() => onInputChangeFn(index - 1)}>
							<FaAngleUp />
						</button>
					)}
					{index < 7 && (
						<button onClick={() => onInputChangeFn(index + 1)}>
							<FaAngleDown />
						</button>
					)}
				</div>
			</span>
			<h2> {nameToDisplay.value} </h2>
		</StyledCard>
	);
};

export default FinalOrderCard;
