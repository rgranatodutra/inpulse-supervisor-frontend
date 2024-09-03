import ChangesTable from "./CustomersChangesTable";
import StyledCampaignsResultsPage from "./style";

const CustomersChangesPage = () => {
	return (
		<StyledCampaignsResultsPage>
			<h2> Clientes {"->"} Alterações </h2>
			<ChangesTable />
		</StyledCampaignsResultsPage>
	);
};

export default CustomersChangesPage;
