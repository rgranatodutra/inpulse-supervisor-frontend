import Modal from "../../../../../components/Modal";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../contexts/global";
import useCustomState from "../../../../../utils/customState.hook";
import StyledGroupModal from "./style";
import { customRequest } from "../../../../../api";
import { OperatorGroup } from "../../../../../interfaces/OperatorGroup.type";
import ManageGroupCard from "./ManageGroupCard";
import { Operator } from "../../../../../interfaces/Operator.type";

interface ManageGroupModalProps {
	group: OperatorGroup;
}

function ManageGroupModal({ group }: ManageGroupModalProps) {
	const { modalState } = useContext(GlobalContext);
	const operatorsGrouptate = useCustomState<
		{ CODIGO: number; DESCRICAO: string }[]
	>([]);

	const dummyGroup = [
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
		{
			CODIGO: 1,

			DESCRICAO: "A",
		},
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
		{
			CODIGO: 1,

			DESCRICAO: "A",
		},
		{
			CODIGO: 1,
			DESCRICAO: "A",
		},
	];

	useEffect(() => {
		customRequest<{ message: String; data: Operator[] }, undefined>({
			endpoint: "/users",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				operatorsGrouptate.set(
					responseData.data.map((v) => ({
						CODIGO: v.CODIGO,
						DESCRICAO: v.NOME,
					}))
				);
			},
		});
	}, []);

	const updateOnEdit = () => {
		return;
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
				Operadores:
				{operatorsGrouptate.value.map((operator) => (
					<ManageGroupCard
						key={`operator_${operator.CODIGO}`}
						data={operator}
						updateOnEdit={updateOnEdit}
					/>
				))}
			</StyledGroupModal>
			<StyledGroupModal>
				Menbros do grupo:
				{dummyGroup.map((group) => (
					<ManageGroupCard
						key={`group_${group.CODIGO}`}
						data={group}
						updateOnEdit={updateOnEdit}
					/>
				))}
			</StyledGroupModal>
		</Modal>
	);
}

export default ManageGroupModal;
