import { useContext } from "react";
import Modal from "../../../../../components/Modal";
import { GlobalContext } from "../../../../../contexts/global";
import { User } from "../../../../../interfaces/User.type";
import useCustomState, { CustomState } from "../../../../../utils/customState.hook";
import { default as GroupUserCard, default as ManageGroupCard } from "./GroupUserCard";
import StyledGroupModal from "./style";

interface ManageGroupModalProps {
	usersState: CustomState<User[]>;
}

const dummyData = [
	{
		CODIGO: 1,
		OPERADOR: 17,
		GRUPO: 3,
	},
	{
		CODIGO: 2,
		OPERADOR: 4,
		GRUPO: 3,
	},
];

function ManageGroupModal({ usersState }: ManageGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const groupUsersState = useCustomState(dummyData);

	const groupUsers = (
		groupUsersState.value
			.map((gu) => {
				return usersState.value.find((u) => u.CODIGO === gu.OPERADOR);
			})
			.filter((u) => !!u) as User[]
	).sort((a, b) => a.CODIGO - b.CODIGO);

	const manageOperator = (id: number, addOperator: boolean) => {
		console.log(id), console.log(addOperator);
	};

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
	} */

	return (
		<Modal modalState={modalState} title="Gerenciar Grupo">
			<StyledGroupModal>
				<div>
					<h2>Operadores</h2>
					<ul>
						{usersState.value
							.filter((u) => {
								const isOnGroup = groupUsersState.value.some((gm) => gm.OPERADOR === u.CODIGO);
								return !isOnGroup;
							})
							.map((user) => (
								<GroupUserCard
									isGroupMember={false}
									key={`operator_${user.CODIGO}`}
									user={user}
									manageOperator={manageOperator}
								/>
							))}
					</ul>
				</div>
				<div>
					<h2>Membros do grupo</h2>
					<ul>
						{groupUsers.map((user) => (
							<ManageGroupCard
								isGroupMember={true}
								key={`group_${user.CODIGO}`}
								user={user}
								manageOperator={manageOperator}
							/>
						))}
					</ul>
				</div>
			</StyledGroupModal>
		</Modal>
	);
}

export default ManageGroupModal;
