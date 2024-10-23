import StyledPauseCard from "./style";

interface PauseCardProps {
	inactiveDays: number | string;
	unitName: string;
}

const TableCard = ({ inactiveDays: pauseData, unitName }: PauseCardProps) => {
	return (
		<StyledPauseCard>
			<h2> {unitName} </h2>
			<a>{pauseData} Dias</a>
		</StyledPauseCard>
	);
};

export default TableCard;
