import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import { defaultInput100 } from "../../../../components-variants/defaultInputs";
import Input from "../../../../components/Input";
import { CustomerGroup } from "../../../../interfaces/CustomerGroup.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import GroupCard from "./GroupCard";
import StyledCustomerGroupsPage from "./style";

const CustomerGroupsPage = () => {
	const groupName = useCustomState<string>("");
	const groups = useCustomState<Array<CustomerGroup>>([]);
	const updateOnEdit = (data: CustomerGroup) => {
		groups.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}

				return v;
			})
		);
	};

	const updateOnDelete = (data: CustomerGroup) => {
		groups.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addGroup = (newGroupName: string) => {
		useCustomRequest<{ message: String; data: CustomerGroup }, { DESCRICAO: string }>({
			endpoint: "/customer-groups",
			method: "post",
			service: "customers",
			requestData: { DESCRICAO: newGroupName },
			onSuccess: (responseData) => {
				const newGroups = [...groups.value, responseData.data];
				groups.set(newGroups);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: CustomerGroup[] }, undefined>({
			endpoint: "/customer-groups?perPage=9999",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				groups.set(responseData.data);
			},
		});
	}, []);

	const disabled =
		!groupName.value.trim() || !(groupName.value.trim().length > 0) || !(groupName.value.trim().length < 36);

	return (
		<StyledCustomerGroupsPage>
			<h2> Clientes {"->"} Grupos </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome do Grupo </h3>
					<Input
						{...defaultInput100}
						onChange={(e) => groupName.set(e.target.value.trim())}
						value={groupName.value}
						maxLength={35}
						placeholder="Digite o nome do grupo aqui..."
					/>
				</div>

				<ButtonType2 type="button" onClick={() => addGroup(groupName.value.trim())} disabled={disabled}>
					<FaUsersLine />
					Adicionar Grupo
				</ButtonType2>
			</form>
			<ul>
				{groups.value.map((group) => {
					return (
						<GroupCard
							key={`group_${group.CODIGO}`}
							groupData={group}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledCustomerGroupsPage>
	);
};

export default CustomerGroupsPage;
