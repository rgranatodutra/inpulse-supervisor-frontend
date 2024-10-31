import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import Table from "../../../../../components/Table";
import { ClientsToBlock } from "../../../../../interfaces/ClientsToBlock.type";
import { ButtonType3 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import clientsQueueColumns from "./columns";

const ClientsToBlockTable = () => {
	const test = useCustomState({ fn: () => {}, enabled: false });

	function onBlockFn(id: number) {
		useCustomRequest({
			endpoint: `/blockClients/${id}`,
			method: "patch",
			service: "monitoring",
			onSuccess: () => {
				toast.success("Cliente atualizado com sucesso");
				test.value.fn();
			},
		});
	}

	return (
		<Table<ClientsToBlock>
			$tableHeight="100%"
			$tableWidth="100%"
			$fontSize={0.75}
			className="display-table"
			columns={clientsQueueColumns}
			tableName="Clientes a bloquear"
			$modalFiltersWidth={40}
			requestEndpoint="/blockClients"
			service="monitoring"
			actions={(row) => [
				<ButtonType3 onClick={() => onBlockFn(row.CODIGO)}>
					{row.BLOQUEADO === "S" ? "Desbloquear" : row.BLOQUEADO === "N" ? "Bloquear" : "Sem ação"}
				</ButtonType3>,
			]}
			updateTableFn={(fn) => test.set({ fn: fn, enabled: true })}
		/>
	);
};

export default ClientsToBlockTable;
