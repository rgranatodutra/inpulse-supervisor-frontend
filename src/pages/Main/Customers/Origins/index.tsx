import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import { defaultInput100 } from "../../../../components-variants/defaultInputs";
import Input from "../../../../components/Input";
import { Origin } from "../../../../interfaces/Origin.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import OriginCard from "./OriginCard";
import StyledCustomersOriginsPage from "./style";

const CustomersOriginsPage = () => {
	const originName = useCustomState<string>("");
	const origins = useCustomState<Array<Origin>>([]);
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

	const disabled = !originName.value.trim() || !(originName.value.trim().length > 0);

	return (
		<StyledCustomersOriginsPage>
			<h2> Clientes {"->"} Origens </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome da Origem </h3>
					<Input
						{...defaultInput100}
						onChange={(e) => originName.set(e.target.value)}
						value={originName.value}
						maxLength={35}
						placeholder="Digite o nome da origem aqui..."
					/>
				</div>

				<ButtonType2 type="button" onClick={() => addOrigin(originName.value.trim())} disabled={disabled}>
					<FaUsersLine />
					Adicionar Origem
				</ButtonType2>
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
