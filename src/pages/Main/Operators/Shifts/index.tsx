import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import { Shift } from "../../../../interfaces/Shift.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import ShiftCard from "./ShiftCard";
import StyledOperatorsShiftsPage from "./style";

const OperatorsShiftsPage = () => {
	const shifts = useCustomState<Array<Shift>>([]);
	const newShift = useCustomState<Partial<Shift>>({});

	const addShiftButtonDisabled = useCustomState(true);
	const updateOnEdit = (data: Shift) => {
		shifts.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}
				return v;
			})
		);
	};

	const updateOnDelete = (data: Shift) => {
		shifts.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addShift = () => {
		const shiftToAdd = {
			...newShift.value,
			DESCRICAO: newShift.value.DESCRICAO?.trim(),
		};

		useCustomRequest<{ message: String; data: Shift }, Partial<Shift>>({
			endpoint: "/shifts",
			method: "post",
			service: "users",
			requestData: shiftToAdd,
			onSuccess: (responseData) => {
				const newshifts = [...shifts.value, responseData.data];
				shifts.set(newshifts);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: Shift[] }, undefined>({
			endpoint: "/shifts",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				shifts.set(responseData.data);
			},
		});
	}, []);

	const inputChangeFn = (e, type) => {
		if (type === "name") {
			newShift.set((prev) => ({ ...prev, DESCRICAO: e.target.value }));
		} else if (type === "entry") {
			newShift.set((prev) => ({ ...prev, ENTRADA_1: e.target.value }));
		} else {
			newShift.set((prev) => ({ ...prev, SAIDA_1: e.target.value }));
		}

		if (e.target.value.trim().length && addShiftButtonDisabled.value) {
			addShiftButtonDisabled.set(false);
		} else if (!addShiftButtonDisabled.value && !e.target.value.trim().length) {
			addShiftButtonDisabled.set(true);
		}
	};

	return (
		<StyledOperatorsShiftsPage>
			<h2> Operadores {"->"} Turnos </h2>
			<form>
				<div style={{ width: "14rem" }}>
					<h3> Início do Expediente </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 1]}
						$fontSize={0.875}
						$width={"100%"}
						leftIcon={null}
						rightIcon={null}
						onChange={(e) => inputChangeFn(e, "entry")}
						type="time"
						style={{ height: "2.375rem" }}
					/>
				</div>
				<div style={{ width: "14rem" }}>
					<h3> Fim do Expediente </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 1]}
						$fontSize={0.875}
						$width={"100%"}
						leftIcon={null}
						rightIcon={null}
						onChange={(e) => inputChangeFn(e, "exit")}
						type="time"
						style={{ height: "2.375rem" }}
					/>
				</div>
				<div style={{ width: "20rem" }}>
					<h3> Nome do Turno </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 1]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={null}
						rightIcon={null}
						onChange={(e) => inputChangeFn(e, "name")}
						placeholder="Digite o nome do turno aqui..."
						style={{ height: "2.375rem" }}
					/>
				</div>
				{(addShiftButtonDisabled.value && (
					<ButtonType2 disabled>
						<FaUsersLine />
						Adicionar Turno
					</ButtonType2>
				)) || (
					<ButtonType2 type="button" onClick={() => addShift()}>
						<FaUsersLine />
						Adicionar Turno
					</ButtonType2>
				)}
			</form>
			<ul>
				{shifts.value.map((shift) => {
					return (
						<ShiftCard
							key={`shift_${shift.CODIGO}`}
							shiftData={shift}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledOperatorsShiftsPage>
	);
};

export default OperatorsShiftsPage;
