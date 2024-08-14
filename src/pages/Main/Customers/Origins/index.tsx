import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import { Origin } from "../../../../interfaces/Origin.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import OriginCard from "./OriginCard";
import StyledCustomersOriginsPage from "./style";

const CustomersOriginsPage = () => {
	const originName = useCustomState<string>("");
	const origins = useCustomState<Array<Origin>>([]);
	const addOriginButtonDisabled = useCustomState(true);
	const updateOnEdit = (data: Origin) => {
		origins.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}

				return v;
			})
		);
	};

	const updateOnDelete = (data: Origin) => {
		origins.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addOrigin = (newOriginName: string) => {
		useCustomRequest<{ message: String; data: Origin }, { DESCRICAO: string }>({
			endpoint: "/origins",
			method: "post",
			service: "customers",
			requestData: { DESCRICAO: newOriginName },
			onSuccess: (responseData) => {
				const newOrigins = [...origins.value, responseData.data];
				origins.set(newOrigins);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: Origin[] }, undefined>({
			endpoint: "/origins?perPage=9999",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				origins.set(responseData.data);
			},
		});
	}, []);

	const inputChangeFn = (e) => {
		originName.set(e.target.value);
		if (e.target.value.trim().length && addOriginButtonDisabled.value) {
			addOriginButtonDisabled.set(false);
		} else if (!e.target.value.trim().length && !addOriginButtonDisabled.value) {
			addOriginButtonDisabled.set(true);
		}
	};

	return (
		<StyledCustomersOriginsPage>
			<h2> Clientes {"->"} Origens </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome da Origem </h3>
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
						value={originName.value}
						maxLength={35}
						placeholder="Digite o nome da origem aqui..."
					/>
				</div>
				{(addOriginButtonDisabled.value && (
					<ButtonType2 disabled>
						<FaUsersLine />
						Adicionar Origem
					</ButtonType2>
				)) || (
					<ButtonType2 type="button" onClick={() => addOrigin(originName.value.trim())}>
						<FaUsersLine />
						Adicionar Origem
					</ButtonType2>
				)}
			</form>
			<ul>
				{origins.value.map((group) => {
					return (
						<OriginCard
							key={`origin_${group.CODIGO}`}
							originData={group}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledCustomersOriginsPage>
	);
};

export default CustomersOriginsPage;
