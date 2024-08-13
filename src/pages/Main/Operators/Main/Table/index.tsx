import { FaUserGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Table from "../../../../../components/Table";
import { User } from "../../../../../interfaces/User.type";
import cssVars from "../../../../../utils/cssVariables.vars";
import operatorsColumns from "./columns";

type OperatorEditButtonProps = {
	operatorId: number;
};

const OperatorEditButton = ({ operatorId }: OperatorEditButtonProps) => {
	return (
		<Link
			to={`/operadores/${operatorId}`}
			title={`Editar Operador de ID: ${operatorId}`}
			style={{
				fontSize: "1.25rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: cssVars.colorGrey[2],
				cursor: "pointer",
			}}
		>
			<FaUserGear style={{ pointerEvents: "none" }} />
		</Link>
	);
};

const OperatorsTable = () => {
	return (
		<Table<User>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			columns={operatorsColumns}
			tableName="Operadores"
			$modalFiltersWidth={41}
			actions={(row) => [<OperatorEditButton operatorId={row.CODIGO} key={`actions_${row.CODIGO}`} />]}
			requestEndpoint="/users"
			service="users"
		/>
	);
};

export default OperatorsTable;
