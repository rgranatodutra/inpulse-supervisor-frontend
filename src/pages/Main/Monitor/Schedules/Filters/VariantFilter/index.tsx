import { useEffect } from "react";
import { useCustomRequest } from "../../../../../../api";
import { defaultInput100, defaultInput50, defaultSelect100 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import InputDateRange from "../../../../../../components/InputDateRange";
import Select, { Option } from "../../../../../../components/Select";
import { User } from "../../../../../../contexts/global/interfaces";
import cssVars from "../../../../../../utils/cssVariables.vars";
import useCustomState, { CustomState } from "../../../../../../utils/customState.hook";
import StyledVariantFilter from "./style";

type ViewOption = "Agendamentos" | "Ligações" | "Sem agendamento";

interface VariantFilterProps {
	variantFiltersState: CustomState<{
		currentType?: "Agendamentos" | "Ligações" | "Sem agendamento";
		scheduling?: { min: string | undefined; max: string | undefined };
		rePurchased?: { min: string | undefined; max: string | undefined };
		call?: { min: string | undefined; max: string | undefined };
		clientOperator?: string | null | undefined;
		callOperator?: string | null | undefined;
		clientsNotWorked?: boolean;
	}>;
}

const VariantFilter = ({ variantFiltersState }: VariantFilterProps) => {
	const selectViewState = useCustomState<ViewOption>("Agendamentos");
	const users = useCustomState<User[]>([]);

	const selectViewOptions: Array<Option<ViewOption>> = [
		{ name: "Agendamentos", value: "Agendamentos" },
		{ name: "Ligações", value: "Ligações" },
		{ name: "Sem agendamento", value: "Sem agendamento" },
	];

	useEffect(() => {
		useCustomRequest<{ message: String; data: User[] }, undefined>({
			endpoint: "/users?perPage=9999",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				users.set(responseData.data);
			},
		});
	}, []);

	const userMenuOptions = users.value.map((user) => {
		return { name: user.NOME, value: user.CODIGO.toLocaleString() };
	});

	const viewOptions: Record<
		ViewOption,
		Record<
			string,
			{ type: "range-date" | "boolean" | "date-hour" } | { type: "select"; options: Array<Option<string>> }
		>
	> = {
		Agendamentos: {
			"Data de agendamento": {
				type: "range-date",
			},
			"Operador do cliente": {
				type: "select",
				options: userMenuOptions,
			},
			"Data de recompra": {
				type: "range-date",
			},
			"Clientes nunca trabalhados": {
				type: "boolean",
			},
			"Contatos/Ligações": {
				type: "select",
				options: [],
			},
		},
		Ligações: {
			"Operador da ligação": {
				type: "select",
				options: userMenuOptions,
			},
			Resultado: {
				type: "select",
				options: [],
			},
			"Data da ligação": {
				type: "range-date",
			},
		},
		"Sem agendamento": {},
	};

	return (
		<StyledVariantFilter>
			<Select
				{...defaultSelect100}
				$focusColor={cssVars.colorGrey[0]}
				defaultValue={selectViewOptions[0]}
				options={selectViewOptions}
				onChange={(v) => {
					console.log(v ?? "Agendamentos");
					selectViewState.set(v === null ? "Agendamentos" : v);
					variantFiltersState.set({ currentType: v ?? "Agendamentos" });
				}}
			/>
			{Object.entries(viewOptions[selectViewState.value]).map((filter) => (
				<div className="input-wrapper">
					{filter[1].type === "boolean" && (
						<span style={{ display: "flex", alignItems: "center", width: "100%", gap: "0.5rem" }}>
							<input
								type="checkbox"
								onChange={(e) => variantFiltersState.set((prev) => ({ ...prev, clientsNotWorked: e.target.checked }))}
							/>
							<h2> {filter[0]} </h2>
						</span>
					)}
					{filter[1].type === "date-hour" && (
						<span style={{ display: "flex", alignItems: "center", width: "100%", gap: "0.5rem" }}>
							<h3 style={{ whiteSpace: "nowrap", width: "12rem" }}> {filter[0]} </h3>
							<Input {...defaultInput100} type="datetime-local" />
						</span>
					)}
					{filter[1].type === "range-date" && (
						<InputDateRange
							{...defaultInput50}
							title={filter[0] + " (após - até)"}
							onChange={(e) => {
								const min = e.min?.toLocaleDateString().split("/");
								const minDate: string[] = [];
								if (min) {
									minDate.push(min[2]);
									minDate.push(min[0].length === 1 ? "0" + min[0] : min[0]);
									minDate.push(min[1].length === 1 ? "0" + min[1] : min[1]);
								}
								const max = e.max?.toLocaleDateString().split("/");
								const maxDate: string[] = [];
								if (max) {
									maxDate.push(max[2]);
									maxDate.push(max[0].length === 1 ? "0" + max[0] : max[0]);
									maxDate.push(max[1].length === 1 ? "0" + max[1] : max[1]);
								}

								if (filter[0] == "Data da ligação") {
									variantFiltersState.set((prev) => ({
										...prev,
										call: {
											min: minDate.join("-"),
											max: maxDate.join("-"),
										},
									}));
								}
								if (filter[0] == "Data de recompra") {
									variantFiltersState.set((prev) => ({
										...prev,
										rePurchased: {
											min: minDate.join("-"),
											max: maxDate.join("-"),
										},
									}));
								}
								if (filter[0] == "Data de agendamento") {
									variantFiltersState.set((prev) => ({
										...prev,
										scheduling: {
											min: minDate.join("-"),
											max: maxDate.join("-"),
										},
									}));
								}
							}}
						/>
					)}
					{filter[1].type === "select" && (
						<Select
							{...defaultSelect100}
							$focusColor={cssVars.colorGrey[0]}
							placeholder={filter[0]}
							options={filter[1].options}
							onChange={(e) => {
								if (filter[0] === "Operador do cliente") {
									variantFiltersState.set((prev) => ({
										...prev,
										clientOperator: e,
									}));
								}
								if (filter[0] === "Operador da ligação") {
									variantFiltersState.set((prev) => ({
										...prev,
										callOperator: e,
									}));
								}
							}}
						/>
					)}
				</div>
			))}
		</StyledVariantFilter>
	);
};

export default VariantFilter;
