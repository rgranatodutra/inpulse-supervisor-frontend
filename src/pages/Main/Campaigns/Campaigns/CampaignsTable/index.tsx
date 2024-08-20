import { useContext } from "react";
import { FaPencil } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { GlobalContext } from "../../../../../contexts/global";
import { Campaign } from "../../../../../interfaces/Campaign.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import EditCampaignModal from "../EditCampaignModal";
import campaignColumns from "./columns";

const CampaignTable = () => {
	const { modalState } = useContext(GlobalContext);

	return (
		<Table<Campaign>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={campaignColumns}
			tableName="Unidades"
			$modalFiltersWidth={41}
			actions={(row) => [
				<ButtonType3
					onClick={() => {
						modalState.set(<EditCampaignModal campaign={row} />);
					}}
				>
					<FaPencil />
				</ButtonType3>,
			]}
			requestEndpoint="/mockCampaigns"
			service="mock"
		/>
	);
};

export default CampaignTable;
