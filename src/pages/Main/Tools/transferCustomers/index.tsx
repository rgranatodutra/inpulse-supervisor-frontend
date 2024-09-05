import { useEffect } from "react";
import { useCustomRequest } from "../../../../api";
import { User } from "../../../../interfaces/User.type";
import useCustomState from "../../../../utils/customState.hook";
import ReceptiveCallsTable from "./TransferCostumersTable";
import StyledReceptiveCalls from "./style";

const TransferCostumers = () => {
	const usersState = useCustomState<User[]>([]);
	const loadingState = useCustomState(true);

	useEffect(() => {
		useCustomRequest<{ message: String; data: User[] }, undefined>({
			endpoint: "/users?perPage=9999",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				usersState.set(responseData.data);
				loadingState.set(false);
			},
		});
	}, []);

	return (
		<StyledReceptiveCalls>
			<h1>Ferramentas {"->"} transferência de clientes</h1>
			<ReceptiveCallsTable users={usersState.value} loading={loadingState.value} />
		</StyledReceptiveCalls>
	);
};

export default TransferCostumers;
