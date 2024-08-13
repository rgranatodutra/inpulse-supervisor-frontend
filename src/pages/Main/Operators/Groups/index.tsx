import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import { User } from "../../../../interfaces/User.type";
import { UserGroup } from "../../../../interfaces/UserGroup.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import GroupCard from "./GroupCard";
import StyledOperatorGroupsPage from "./style";

const OperatorsGroupsPage = () => {
	const groupName = useCustomState<string>("");
	const usersState = useCustomState<User[]>([]);
	const groups = useCustomState<Array<UserGroup>>([]);
	const addGroupButtonDisabled = useCustomState(true);
	const updateOnEdit = (data: UserGroup) => {
		groups.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}

				return v;
			})
		);
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: User[] }, undefined>({
			endpoint: "/users",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				usersState.set(responseData.data.filter((v) => v.CODIGO > 0));
			},
		});
	}, []);

	const updateOnDelete = (data: UserGroup) => {
		groups.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addGroup = (newGroupName: string) => {
		console.log(newGroupName);
		useCustomRequest<{ message: String; data: UserGroup }, { DESCRICAO: string }>({
			endpoint: "/user-groups",
			method: "post",
			service: "users",
			requestData: { DESCRICAO: newGroupName },
			onSuccess: (responseData) => {
				const newGroups = [...groups.value, responseData.data];
				groups.set(newGroups);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: UserGroup[] }, undefined>({
			endpoint: "/user-groups",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				groups.set(responseData.data);
			},
		});
	}, []);

	const inputChangeFn = (e) => {
		groupName.set(e.target.value);
		if (e.target.value.trim().length >= 3 && addGroupButtonDisabled.value) {
			addGroupButtonDisabled.set(false);
		} else if (e.target.value.trim().length < 3 && !addGroupButtonDisabled.value) {
			addGroupButtonDisabled.set(true);
		}
	};

	return (
		<StyledOperatorGroupsPage>
			<h2> Operadores {"->"} Grupos </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome do Grupo </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 1]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={null}
						rightIcon={null}
						onChange={(e) => inputChangeFn(e)}
						value={groupName.value}
						maxLength={35}
						placeholder="Digite o nome do grupo aqui..."
					/>
				</div>
				{(addGroupButtonDisabled.value && (
					<ButtonType2 disabled>
						<FaUsersLine />
						Adicionar Grupo
					</ButtonType2>
				)) || (
					<ButtonType2 type="button" onClick={() => addGroup(groupName.value.trim())}>
						<FaUsersLine />
						Adicionar Grupo
					</ButtonType2>
				)}
			</form>
			<ul>
				{groups.value.map((group) => {
					return (
						<GroupCard
							key={`group_${group.CODIGO}`}
							groupData={group}
							usersState={usersState}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledOperatorGroupsPage>
	);
};

export default OperatorsGroupsPage;
