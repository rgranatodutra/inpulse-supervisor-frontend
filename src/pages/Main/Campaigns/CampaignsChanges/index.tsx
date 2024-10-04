import ChangesTable from "./CampaignsChangesTable";
import StyledCampaignsChanges from "./style";

const CampaignsChangesPage = () => {
	return (
		<StyledCampaignsChanges>
			<h2> Campanhas {"->"} Alterações </h2>
			<ChangesTable />
		</StyledCampaignsChanges>
	);
};

export default CampaignsChangesPage;
