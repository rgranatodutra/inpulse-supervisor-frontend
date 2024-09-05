import { FaTag } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { User } from "../../../../../interfaces/User.type";
import { transferCostumers } from "../../../../../interfaces/transferCostumers.type";

interface TransferCostumersTableProps {
	users: User[];
	loading: boolean;
}

const TransferCostumersTable = ({ users, loading }: TransferCostumersTableProps) => {
	if (loading) {
		return <h1>Carregando</h1>;
	} else if (!loading) {
		const receptiveCallColumns: Array<TableColumn<transferCostumers>> = [
			{
				key: "CODIGO",
				width: 7,
				header: "Código",
				primarykey: true,
				alignContent: "start",
				filter: {
					type: "input",
					width: "19.5rem",
					icon: <FaTag />,
				},
			},
			{
				key: "OPERADOR",
				header: "Código operador",
				width: 10,
				filter: {
					type: "input",
					width: "19.5rem",
				},
			},
			{
				key: "NOME",
				header: "Nome do operador",
				width: 20,
				filter: {
					type: "input",
					width: "19.5rem",
				},
			},
			{
				key: "OPERADOR_DESTINO",
				header: "Operador destinatário",
				width: 10,
				filter: {
					type: "input",
					width: "19.5rem",
				},
			},
			{
				key: "OPERADOR_DESTINO",
				header: "Nome do operador destinatário",
				width: 20,
				format: (o) => {
					const destinyUser = users.find((u) => u.CODIGO === o.OPERADOR_DESTINO);
					return destinyUser?.NOME;
				},
				filter: {
					type: "input",
					width: "40rem",
				},
			},
			{
				key: "DATA_HORA",
				header: "Data da transfêrencia",
				width: 12,
				format: (l) => {
					return `${l.DATA_HORA.slice(0, 10)} às ${l.DATA_HORA.slice(11, 16)}`;
				},
				filter: {
					type: "date-range",
					width: "38rem",
				},
			},
			{
				key: "OPERADOR_ORIGEM",
				header: "Operador origem",
				width: 6,
				filter: {
					type: "input",
					width: "19.5rem",
				},
			},
		];

		return (
			<Table<transferCostumers>
				$tableHeight="100%"
				$tableWidth="100%"
				$fontSize={0.75}
				className="display-table"
				columns={receptiveCallColumns}
				tableName="Pausas realizadas"
				$modalFiltersWidth={40}
				requestEndpoint="/transfer-costumers"
				service="monitoring"
				enableAutoUpdate
			/>
		);
	}
};

export default TransferCostumersTable;
