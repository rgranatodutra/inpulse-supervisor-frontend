import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import { defaultInput100 } from "../../../../components-variants/defaultInputs";
import Input from "../../../../components/Input";
import { Position } from "../../../../interfaces/Position.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import CityCard from "./CityCard";
import StyledCustomersCitysPage from "./style";

const OtherCitiesPage = () => {
	const roleName = useCustomState<string>("");
	const roles = useCustomState<Array<Position>>([]);
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

	const addCity = (newCityName: string) => {
		useCustomRequest<{ message: String; data: Position }, { DESCRICAO: string }>({
			endpoint: "/positions",
			method: "post",
			service: "customers",
			requestData: { DESCRICAO: newCityName },
			onSuccess: (responseData) => {
				const newCitys = [...roles.value, responseData.data];
				roles.set(newCitys);
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

	const disabled = !roleName.value.trim() || !(roleName.value.trim().length > 0);

	return (
		<StyledCustomersCitysPage>
			<h2> Clientes {"->"} Cargos </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome do Cargo </h3>
					<Input
						{...defaultInput100}
						onChange={(e) => roleName.set(e.target.value)}
						value={roleName.value}
						maxLength={35}
						placeholder="Digite o nome do cargo aqui..."
					/>
				</div>

				<ButtonType2 type="button" onClick={() => addCity(roleName.value.trim())} disabled={disabled}>
					<FaUsersLine />
					Adicionar Cargo
				</ButtonType2>
			</form>
			<ul>
				{roles.value.map((role) => {
					return (
						<CityCard
							key={`role_${role.CODIGO}`}
							roleData={role}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledCustomersCitysPage>
	);
};

export default OtherCitiesPage;
