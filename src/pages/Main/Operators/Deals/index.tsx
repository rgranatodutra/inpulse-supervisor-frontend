import { useContext, useEffect } from "react";
import { FaCheck, FaSearchengin } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../api";
import { defaultInput100, defaultSelect100 } from "../../../../components-variants/defaultInputs";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { GlobalContext } from "../../../../contexts/global";
import { Customer } from "../../../../interfaces/Customer.type";
import { Purchase } from "../../../../interfaces/Purchase.type";
import { User } from "../../../../interfaces/User.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import CustomerDealsModal from "./CustomerDealsModal";
import DealsTable from "./DealsTable/table";
import StyledOperatorsDealsPage from "./style";

const OperatorsDealsPage = () => {
	const usersState = useCustomState<User[]>([]);
	const newDeal = useCustomState<Partial<Purchase>>({});
	const { modalState } = useContext(GlobalContext);
	const customerState = useCustomState<Partial<Customer>>({});

	useEffect(() => {
		useCustomRequest<{ message: String; data: User[] }, undefined>({
			endpoint: "/users?perPage=9999",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				usersState.set(responseData.data);
			},
		});
	}, []);

	const addDeal = () => {
		useCustomRequest<{ message: String; data: Purchase }, Partial<Purchase>>({
			endpoint: "/purchases",
			method: "post",
			service: "customers",
			requestData: { ...newDeal.value, CLIENTE: customerState.value.CODIGO },
			onSuccess: () => {
				toast.success("Nova compra adicionada");
			},
		});
	};

	const disabled =
		!newDeal.value.VALOR ||
		!(newDeal.value.VALOR > 0) ||
		!newDeal.value.DESCRICAO?.length ||
		!(newDeal.value.DESCRICAO.trim().length > 0) ||
		!newDeal.value.FORMA_PGTO?.length ||
		!(newDeal.value.FORMA_PGTO.trim().length > 0) ||
		!customerState.value.CODIGO;

	const options = usersState.value.map((u) => ({ name: u.NOME, value: u.CODIGO }));

	const addCustomer = (customer: Partial<Customer>) => {
		customerState.set(customer);
	};

	const customerNameToDisplay = customerState.value.RAZAO?.trim();

	return (
		<StyledOperatorsDealsPage>
			<h2> Operadores {"->"} Vendas </h2>
			<form>
				<div style={{ width: "15rem" }}>
					<h3> Cliente </h3>
					<ButtonType2
						style={{ fontSize: "1rem", height: "0.75rem", boxSizing: "content-box" }}
						type="button"
						onClick={() => {
							modalState.set(<CustomerDealsModal addCustomer={addCustomer} />);
						}}
						title={customerNameToDisplay ? customerNameToDisplay : "Selecione o cliente"}
					>
						{customerNameToDisplay
							? customerNameToDisplay.length > 14
								? customerNameToDisplay.slice(0, 14) + "..."
								: customerNameToDisplay
							: "Selecione o cliente"}{" "}
						<FaSearchengin />
					</ButtonType2>
				</div>
				<div style={{ width: "15rem" }}>
					<h3> Operador </h3>
					<Select
						{...defaultSelect100}
						options={options}
						placeholder="Selecione o operador"
						onChange={(e) => newDeal.set((prev) => ({ ...prev, OPERADOR: e || undefined }))}
					/>
				</div>
				<div style={{ width: "20rem" }}>
					<h3> Descrição </h3>
					<Input
						{...defaultInput100}
						type="text"
						placeholder="Digite uma descrição"
						onChange={(e) => newDeal.set((prev) => ({ ...prev, DESCRICAO: e.target.value.trim() || undefined }))}
					/>
				</div>
				<div style={{ width: "10rem" }}>
					<h3> Data </h3>
					<Input
						{...defaultInput100}
						onChange={(e) => newDeal.set((prev) => ({ ...prev, DATA: e.target.value || "0000-00-00" }))}
						type="date"
					/>
				</div>
				<div style={{ width: "10rem" }}>
					<h3> Valor </h3>
					<Input
						{...defaultInput100}
						leftIcon={<span> R$ </span>}
						type="number"
						onChange={(e) => newDeal.set((prev) => ({ ...prev, VALOR: +e.target.value || undefined }))}
					/>
				</div>
				<div style={{ width: "20rem" }}>
					<h3> Forma de pagamento </h3>
					<Input
						{...defaultInput100}
						type="text"
						placeholder="Digite a forma de pagamento"
						onChange={(e) => newDeal.set((prev) => ({ ...prev, FORMA_PGTO: e.target.value.trim() || undefined }))}
					/>
				</div>
				<ButtonType2
					style={{ fontSize: "1rem", height: "1rem", boxSizing: "content-box" }}
					disabled={disabled}
					onClick={() => addDeal()}
					type="button"
				>
					<FaCheck />
					Adicionar Compra
				</ButtonType2>
			</form>

			<DealsTable users={usersState.value} />
		</StyledOperatorsDealsPage>
	);
};

export default OperatorsDealsPage;
