import { FaAngleDown, FaAngleUp, FaHashtag } from "react-icons/fa6";
import { toast } from "react-toastify";
import { defaultInput } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import { City } from "../../../../../../interfaces/City.type";
import { CustomState } from "../../../../../../utils/customState.hook";
import StyledCard from "../style";

interface CityCardProps {
	cityData: City;
	citiesState: CustomState<City[]>;
}

const CityCard = ({ cityData, citiesState }: CityCardProps) => {
	function onInputChangeFn(event: number) {
		if (event >= 0) {
			citiesState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === cityData.NOME && v.UF === cityData.UF) {
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

	function onButtonPress(type: string) {
		if (type === "up") {
			citiesState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === cityData.NOME && v.ORDEM === cityData.ORDEM && v.ORDEM) {
						return { ...v, ORDEM: v.ORDEM - 1 };
					}
					return v;
				});
				return newState.sort((a, b) => {
					if (a.ORDEM && b.ORDEM) {
						if (a.ORDEM === b.ORDEM) {
							return -1;
						} else {
							return a.ORDEM - b.ORDEM;
						}
					} else if (a.ORDEM) {
						return 1;
					} else if (b.ORDEM) {
						return -1;
					}
					return 0;
				});
			});
		} else {
			citiesState.set((prev) => {
				const newState = prev.map((v) => {
					if (v.NOME === cityData.NOME && v.ORDEM === cityData.ORDEM) {
						return { ...v, ORDEM: (v.ORDEM ?? 0) + 1 };
					}
					return v;
				});
				return newState.sort((a, b) => {
					if (a.ORDEM && b.ORDEM) {
						if (a.ORDEM === b.ORDEM) {
							return -1;
						} else {
							return a.ORDEM - b.ORDEM;
						}
					} else if (a.ORDEM) {
						return 1;
					} else if (b.ORDEM) {
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
					value={cityData.ORDEM ?? undefined}
					onChange={(e) => onInputChangeFn(+e.target.value)}
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{(cityData.ORDEM ?? 0) > 0 && (
						<button onClick={() => onButtonPress("up")}>
							<FaAngleUp />
						</button>
					)}
					{(cityData.ORDEM ?? 0) < 99999999 && (
						<button onClick={() => onButtonPress("down")}>
							<FaAngleDown />
						</button>
					)}
				</div>
			</span>

			<h2> {cityData.NOME} </h2>

			<h2> {cityData.UF} </h2>
		</StyledCard>
	);
};

export default CityCard;
