import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../api";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { User } from "../../../../../interfaces/User.type";
import { GroupUser, UserGroup } from "../../../../../interfaces/UserGroup.type";
import useCustomState, { CustomState } from "../../../../../utils/customState.hook";
import { default as GroupUserCard, default as ManageGroupCard } from "./GroupUserCard";
import StyledGroupModal from "./style";

interface ManageGroupModalProps {
	usersState: CustomState<User[]>;
	groupData: UserGroup;
}

function ManageGroupModal({ usersState, groupData }: ManageGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupUsersState = useCustomState<GroupUser[]>([]);

	/* async function updateName() {
		if (group.DESCRICAO.trim().length < 3) {
			toast.error("Minimo de 3 caracteres no nome do grupo");
		} else {
			customRequest<
				{ message: string; data: OperatorGroup },
				{ DESCRICAO: string }
			>({
				endpoint: `/user-group/${group.CODIGO}`,
				requestData: { DESCRICAO: groupNameState.value },
				method: "patch",
				service: "users",
				onSuccess: (res) => {
					toast.success(res.message);
					modalState.reset();
				},
			});
		}
	}  */

	useEffect(() => {
		useCustomRequest<{ message: String; data: GroupUser[] }, undefined>({
			endpoint: `/user-groups/${groupData.CODIGO}/members`,
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				groupUsersState.set(responseData.data);
			},
		});
	}, []);

	const groupUsers = (
		groupUsersState.value
			.map((gu) => {
				return usersState.value.find((u) => u.CODIGO === gu.OPERADOR);
			})
			.filter((u) => !!u) as User[]
	).sort((a, b) => a.CODIGO - b.CODIGO);

	const manageOperator = (id: number, addOperator: boolean) => {
		if (addOperator) {
			useCustomRequest<{ message: String; data: GroupUser }, { OPERADOR: number }>({
				endpoint: `/user-groups/${groupData.CODIGO}/members`,
				method: "post",
				service: "users",
				requestData: { OPERADOR: id },
				onSuccess: (responseData) => {
					toast("Usuario adicionado com sucesso!");
					groupUsersState.set((prev) => [...prev, responseData.data]);
				},
			});
		} else {
			useCustomRequest<{ message: String; data: GroupUser }, undefined>({
				endpoint: `/user-groups/${groupData.CODIGO}/members/${id}`,
				method: "delete",
				service: "users",
				onSuccess: () => {
					toast("Usuario remove com sucesso!");
					groupUsersState.set((prev) => prev.filter((gu) => gu.CODIGO !== id));
				},
			});
		}
	};

	return (
		<Modal modalState={modalState} title={`Gerenciar grupo: ${groupData.DESCRICAO}`}>
			<StyledGroupModal>
				<div>
					<h2>Operadores</h2>
					<ul>
						{usersState.value
							.filter((u) => {
								const isOnGroup = groupUsersState.value.some((gu) => gu.OPERADOR === u.CODIGO);
								return !isOnGroup;
							})
							.map((user) => {
								return (
									<GroupUserCard
										isGroupMember={false}
										key={`operator_${user.CODIGO}`}
										user={user}
										manageOperator={manageOperator}
									/>
								);
							})}
					</ul>
				</div>
				<div>
					<h2>Membros do grupo</h2>
					<ul>
						{groupUsers.map((user) => {
							const groupUser = groupUsersState.value.find((gu) => gu.OPERADOR === user.CODIGO);
							return (
								<ManageGroupCard
									isGroupMember={true}
									key={`group_${user.CODIGO}`}
									user={user}
									groupUserId={groupUser?.CODIGO!}
									manageOperator={manageOperator}
								/>
							);
						})}
					</ul>
				</div>
			</StyledGroupModal>
		</Modal>
	);
}

export default ManageGroupModal;
