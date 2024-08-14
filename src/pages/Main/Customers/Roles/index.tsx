import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import { Position } from "../../../../interfaces/Position.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import RoleCard from "./RoleCard";
import StyledCustomersRolesPage from "./style";

const CustomersRolesPage = () => {
	const roleName = useCustomState<string>("");
	const roles = useCustomState<Array<Position>>([]);
	const addRoleButtonDisabled = useCustomState(true);
	const updateOnEdit = (data: Position) => {
		roles.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}

				return v;
			})
		);
	};

	const updateOnDelete = (data: Position) => {
		roles.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addRole = (newRoleName: string) => {
		useCustomRequest<{ message: String; data: Position }, { DESCRICAO: string }>({
			endpoint: "/positions",
			method: "post",
			service: "customers",
			requestData: { DESCRICAO: newRoleName },
			onSuccess: (responseData) => {
				const newRoles = [...roles.value, responseData.data];
				roles.set(newRoles);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: Position[] }, undefined>({
			endpoint: "/positions?perPage=9999",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				roles.set(responseData.data);
			},
		});
	}, []);

	const inputChangeFn = (e) => {
		roleName.set(e.target.value);
		if (e.target.value.trim().length && addRoleButtonDisabled.value) {
			addRoleButtonDisabled.set(false);
		} else if (!e.target.value.trim().length && !addRoleButtonDisabled.value) {
			addRoleButtonDisabled.set(true);
		}
	};

	return (
		<StyledCustomersRolesPage>
			<h2> Clientes {"->"} Cargos </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome do Cargo </h3>
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
						value={roleName.value}
						maxLength={35}
						placeholder="Digite o nome do cargo aqui..."
					/>
				</div>
				{(addRoleButtonDisabled.value && (
					<ButtonType2 disabled>
						<FaUsersLine />
						Adicionar Cargo
					</ButtonType2>
				)) || (
					<ButtonType2 type="button" onClick={() => addRole(roleName.value.trim())}>
						<FaUsersLine />
						Adicionar Cargo
					</ButtonType2>
				)}
			</form>
			<ul>
				{roles.value.map((role) => {
					return (
						<RoleCard
							key={`role_${role.CODIGO}`}
							roleData={role}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledCustomersRolesPage>
	);
};

export default CustomersRolesPage;
