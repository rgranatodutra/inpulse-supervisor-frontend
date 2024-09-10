import PurchaseToExpireTable from "./PurchaseToExpireTable";
import StyledReceptiveCalls from "./style";

const PurchaseToExpire = () => {
	return (
		<StyledReceptiveCalls>
			<h1>Monitor {"->"} recompra a expirar</h1>
			<PurchaseToExpireTable />
		</StyledReceptiveCalls>
	);
};

export default PurchaseToExpire;
