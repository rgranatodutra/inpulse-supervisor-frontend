import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { Goal } from "../../../../interfaces/Goal.type";
import { User } from "../../../../interfaces/User.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import GoalsTable from "./GoalsTable/table";
import StyledOperatorsGoalsPage from "./style";

const OperatorsGoalsPage = () => {
	const usersState = useCustomState<User[]>([]);
	const newGoal = useCustomState<Partial<Goal>>({});

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

	const addGoal = () => {
		useCustomRequest<{ message: String; data: Goal }, Partial<Goal>>({
			endpoint: "/goals",
			method: "post",
			service: "users",
			requestData: newGoal.value,
			onSuccess: () => {
				toast.success("Nova meta adicionada");
			},
		});
	};

	const disabled =
		!newGoal.value.OPERADOR ||
		!newGoal.value.ANO ||
		!newGoal.value.MES ||
		!newGoal.value.VALOR_META ||
		!(+newGoal.value.VALOR_META > 0);

	const options = usersState.value.map((u) => ({ name: u.NOME, value: u.CODIGO }));

	return (
		<StyledOperatorsGoalsPage>
			<h2> Operadores {"->"} Metas </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Operador </h3>
					<Select
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 0.5]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={null}
						options={options}
						placeholder="Selecione o operador"
						onChange={(e) => newGoal.set((prev) => ({ ...prev, OPERADOR: e || undefined }))}
					/>
				</div>
				<div style={{ width: "20rem" }}>
					<h3> Mês / Ano </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 0.5]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={null}
						rightIcon={null}
						onChange={(e) =>
							newGoal.set((prev) => ({ ...prev, MES: e.target.value.slice(5), ANO: +e.target.value.slice(0, 4) }))
						}
						type="month"
					/>
				</div>
				<div style={{ width: "10rem" }}>
					<h3> Meta </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 0.5]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={<span> R$ </span>}
						rightIcon={null}
						type="number"
						min={0}
						onChange={(e) => newGoal.set((prev) => ({ ...prev, VALOR_META: +e.target.value }))}
					/>
				</div>
				<ButtonType2
					style={{ fontSize: "1rem", height: "1.25rem", boxSizing: "content-box" }}
					disabled={disabled}
					onClick={() => addGoal()}
				>
					<FaCheck />
					Adicionar Meta
				</ButtonType2>
			</form>

			<GoalsTable users={usersState.value} />
		</StyledOperatorsGoalsPage>
	);
};

export default OperatorsGoalsPage;
