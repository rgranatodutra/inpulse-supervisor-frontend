import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { Brand } from "../../../../interfaces/Brand.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import BrandCard from "./BrandCard";
import StyledCustomersBrandsPage from "./style";

const CustomersBrandsPage = () => {
	const brands = useCustomState<Array<Brand>>([]);
	const newBrand = useCustomState<Partial<Brand>>({
		DESCRICAO: "",
		UNIDADE: null,
		COD_ERPMARCA: null,
	});
	const units = useCustomState<Array<{ CODIGO: number; DESCRICAO: string }>>([
		{ CODIGO: 1, DESCRICAO: "TESTE1" },
		{ CODIGO: 2, DESCRICAO: "TESTE2" },
	]);
	const addBrandButtonDisabled = useCustomState(true);
	const updateOnEdit = (data: Brand) => {
		brands.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}

				return v;
			})
		);
	};

	const updateOnDelete = (data: Brand) => {
		brands.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addBrand = () => {
		const brandToAdd = {
			...newBrand.value,
			DESCRICAO: newBrand.value.DESCRICAO?.trim(),
		};

		useCustomRequest<{ message: String; data: Brand }, Partial<Brand>>({
			endpoint: "/brands",
			method: "post",
			service: "customers",
			requestData: brandToAdd,
			onSuccess: (responseData) => {
				const newBrands = [...brands.value, responseData.data];
				brands.set(newBrands);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: Brand[] }, undefined>({
			endpoint: "/brands",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				brands.set(responseData.data);
			},
		});
	}, []);

	const inputChangeFn = (e) => {
		newBrand.set((prev) => ({ ...prev, DESCRICAO: e.target.value }));
		if (e.target.value.trim().length && addBrandButtonDisabled.value) {
			addBrandButtonDisabled.set(false);
		} else if (!addBrandButtonDisabled.value && !e.target.value.trim().length) {
			addBrandButtonDisabled.set(true);
		}
	};

	return (
		<StyledCustomersBrandsPage>
			<h2> Clientes {"->"} Marcas </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome da Marca </h3>
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
						value={newBrand.value.DESCRICAO}
						placeholder="Digite o nome da marca aqui"
					/>
				</div>
				<div style={{ width: "20rem" }}>
					<h3> Unidade </h3>
					<Select
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 1]}
						$fontSize={1}
						$width={"100%"}
						onChange={(v) => newBrand.set((prev) => ({ ...prev, UNIDADE: v }))}
						options={units.value.map((v) => ({
							name: v.DESCRICAO,
							value: v.CODIGO,
						}))}
						placeholder="Unidade"
					/>
				</div>
				{(addBrandButtonDisabled.value && (
					<ButtonType2 disabled>
						<FaUsersLine />
						Adicionar Marca
					</ButtonType2>
				)) || (
					<ButtonType2 type="button" onClick={() => addBrand()}>
						<FaUsersLine />
						Adicionar Marca
					</ButtonType2>
				)}
			</form>
			<ul>
				{brands.value.map((brand) => {
					return (
						<BrandCard
							key={`brand_${brand.CODIGO}`}
							brandData={brand}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledCustomersBrandsPage>
	);
};

export default CustomersBrandsPage;
