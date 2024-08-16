import { useContext } from "react";
import { FaCalendar, FaHeadset, FaPencil, FaTag, FaTrash } from "react-icons/fa6";
import Table from "../../../../../components/Table";
import { TableColumn } from "../../../../../components/Table/types";
import { GlobalContext } from "../../../../../contexts/global";
import { Purchase } from "../../../../../interfaces/Purchase.type";
import { User } from "../../../../../interfaces/User.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import months from "../../../../../utils/months.array";
import DeleteDealModal from "../DeleteDealsModal";
import EditDealModal from "../EditDealsModal";

interface DealsTableProps {
	users: User[];
}

function DealsTable({ users }: DealsTableProps) {
	const { modalState } = useContext(GlobalContext);

	const DealColumns: TableColumn<Purchase>[] = [
		{
			key: "CODIGO",
			header: "Código",
			width: 6,
			primarykey: true,
			filter: {
				type: "input",
				width: "20rem",
				icon: <FaTag />,
			},
		},
		{
			key: "DESCRICAO",
			header: "Descrição",
			width: 9,
			filter: {
				type: "input",
				width: "20rem",
			},
		},
		{
			key: "DATA",
			header: "Data",
			format: (row) => {
				return row.DATA.slice(0, 7);
			},
			width: 9,
			filter: {
				type: "multi-select",
				width: "20rem",
				icon: <FaCalendar />,
				options: months.map((m, i) => ({ name: m, value: i + 1 })),
			},
		},
		{
			key: "CLIENTE",
			header: "Código do cliente",
			width: 9,
			filter: {
				type: "input",
				width: "20rem",
			},
		},
		{
			key: "RAZAO",
			header: "Razão social",
			width: 40,
			filter: {
				type: "input",
				width: "20rem",
			},
		},
		{
			key: "FORMA_PGTO",
			header: "Forma de pagamento",
			width: 16,
			filter: {
				type: "input",
				width: "20rem",
			},
		},
		{
			key: "VALOR",
			header: "Valor",
			format: (row) => {
				return `${row.VALOR} R$`;
			},
			width: 9,
			filter: {
				type: "input",
				width: "10rem",
			},
		},
		{
			key: "OPERADOR",
			header: "Operador",
			format: (row) => {
				if (row.OPERADOR) {
					const rowUser = users.find((u) => u.CODIGO === row.OPERADOR);
					return rowUser?.NOME;
				} else {
					return "Não Existe";
				}
			},
			width: 9,
			filter: {
				type: "multi-select",
				width: "20rem",
				icon: <FaHeadset />,
				options: users.map((u) => ({ name: u.NOME, value: u.CODIGO })),
			},
		},
	];

	if (users.length > 0) {
		return (
			<Table
				$modalFiltersWidth={41}
				$tableHeight="100%"
				$tableWidth="100%"
				$fontSize={1}
				actions={(row) => [
					<ButtonType3
						onClick={() => {
							modalState.set(<EditDealModal deal={row} users={users} />);
						}}
					>
						<FaPencil />
					</ButtonType3>,
					<ButtonType3
						onClick={() => {
							modalState.set(<DeleteDealModal deal={row} />);
						}}
					>
						<FaTrash />
					</ButtonType3>,
				]}
				columns={DealColumns}
				requestEndpoint="/purchases"
				tableName="compras"
				service="customers"
			/>
		);
	}
}

export default DealsTable;
