import { toast } from "react-toastify";
import { defaultInput100, defaultInput50, defaultSelect100 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import InputDateRange from "../../../../../../components/InputDateRange";
import MultiSelect from "../../../../../../components/MultiSelect";
import { Option } from "../../../../../../components/Select";
import { ButtonType2 } from "../../../../../../styles/buttons.style";
import useCustomState, { CustomState } from "../../../../../../utils/customState.hook";
import StyledCustomersFilter from "./style";
import { ActiveFilters } from "./types";

type FilterValue = { key: string } & ({ type: "string" | "range-date" } | { type: "array"; options: Option<string>[] });
type FilterOption = Option<FilterValue>;

type CustomersFilterProps = {
	customerFilterState: CustomState<{
		CPF_CNPJ?: number;
		CODIGO?: number;
		COD_ERP?: number;
		CAMPANHA?: number;
		SEGMENTO?: number;
		ESTADO?: string;
		dates?: {
			lastContract: { min: string | undefined; max: string | undefined };
			lastPurchase: { min: string | undefined; max: string | undefined };
		};
	}>;
};

const CustomersFilter = ({ customerFilterState }: CustomersFilterProps) => {
	const activeFiltersState = useCustomState<ActiveFilters>({});
	const tempCustomerInputTextFieldValues = useCustomState<{
		CPF_CNPJ?: number;
		CODIGO?: number;
		COD_ERP?: number;
		CAMPANHA?: number;
		SEGMENTO?: number;
		ESTADO?: string;
	}>({});

	const tempCustomerInputDateFieldValues = useCustomState<{
		lastContract: { min: string | undefined; max: string | undefined };
		lastPurchase: { min: string | undefined; max: string | undefined };
	}>({
		lastContract: {
			min: undefined,
			max: undefined,
		},
		lastPurchase: {
			min: undefined,
			max: undefined,
		},
	});

	const filtersOptions: Array<FilterOption> = [
		{
			name: "CPF/CNPJ",
			value: {
				key: "CPF/CNPJ",
				type: "string",
			},
		},
		{
			name: "Código inPulse",
			value: {
				key: "Código inPulse",
				type: "string",
			},
		},
		{
			name: "Código ERP",
			value: {
				key: "Código ERP",
				type: "string",
			},
		},
		{
			name: "Campanhas",
			value: {
				key: "Campanhas",
				type: "array",
				options: [],
			},
		},
		{
			name: "Grupos",
			value: {
				key: "Grupos",
				type: "array",
				options: [],
			},
		},
		{
			name: "Segmentos",
			value: {
				key: "Segmentos",
				type: "array",
				options: [],
			},
		},
		{
			name: "Origens",
			value: {
				key: "Origens",
				type: "array",
				options: [],
			},
		},
		{
			name: "Mídias",
			value: {
				key: "Mídias",
				type: "array",
				options: [],
			},
		},
		{
			name: "Estados",
			value: {
				key: "Estados",
				type: "array",
				options: [
					{ name: "asdsadasdas", value: "a" },
					{ name: "test", value: "test" },
				],
			},
		},
		/*         {
                    name: "Cidades",
                    value: <MultiSelect {...defaultSelect100} options={[]} onChange={() => null} />
                },
                {
                    name: "Bairros",
                    value: <MultiSelect {...defaultSelect100} options={[]} onChange={() => null} />
                }, */
		{
			name: "Ultima compra",
			value: {
				key: "Ultima compra",
				type: "range-date",
			},
		},
		{
			name: "Produto comprado",
			value: {
				key: "Produto comprado",
				type: "array",
				options: [],
			},
		},
		{
			name: "Situação",
			value: {
				key: "Situação",
				type: "string",
			},
		},
		{
			name: "Ultimo contato",
			value: {
				key: "Ultimo contato",
				type: "range-date",
			},
		},
	];

	const onChangeSelectedFilters = (v: Array<FilterValue | null>) => {
		activeFiltersState.set(
			v.reduce((a, b) => {
				if (!b) return a;

				if (b.type === "array") {
					a[b.key] = { type: "array", value: b.options };
				} else if (b.type === "range-date") {
					a[b.key] = { type: "range-date", value: { min: null, max: null } };
				} else {
					a[b.key] = { type: "string", value: "" };
				}

				return a;
			}, {} as ActiveFilters)
		);
	};

	function numericFilterHandler(input: number, type: string) {
		if (type === "CPF/CNPJ") {
			if (input < 0) {
				toast.error("Valor inválido");
			} else {
				tempCustomerInputTextFieldValues.set((prev) => ({ ...prev, CPF_CNPJ: input }));
			}
		}
		if (type === "Código inPulse") {
			if (input < 0) {
				toast.error("Valor inválido");
			} else {
				tempCustomerInputTextFieldValues.set((prev) => ({ ...prev, CODIGO: input }));
			}
		}
		if (type === "Código ERP") {
			if (input < 0) {
				toast.error("Valor inválido");
			} else {
				tempCustomerInputTextFieldValues.set((prev) => ({ ...prev, COD_ERP: input }));
			}
		}
		if (type === "Situação") {
		}
	}

	function submitFiltersaHandler() {
		customerFilterState.set({
			...tempCustomerInputTextFieldValues.value,
			dates: tempCustomerInputDateFieldValues.value,
		});
	}

	return (
		<StyledCustomersFilter>
			<MultiSelect
				{...defaultSelect100}
				options={filtersOptions}
				onChange={onChangeSelectedFilters}
				placeholder="Filtros de clientes"
			/>
			<div className="input-list">
				{Object.entries(activeFiltersState.value).map((entry, i) => (
					<div key={i} className="input-wrapper">
						<label>{entry[0]}</label>
						{entry[1].type === "string" && (
							<Input
								{...defaultInput100}
								placeholder={entry[0]}
								type="number"
								min={0}
								onChange={(e) => numericFilterHandler(+e.target.value, entry[0])}
							/>
						)}
						{entry[1].type === "array" && (
							<MultiSelect {...defaultSelect100} placeholder={entry[0]} options={entry[1].value} />
						)}
						{entry[1].type === "range-date" && (
							<InputDateRange
								title={entry[0]}
								{...defaultInput50}
								onChange={(e) => {
									if (entry[0] === "Ultimo contato") {
										tempCustomerInputDateFieldValues.set((prev) => ({
											...prev,
											lastContract: {
												min: e.min?.toLocaleDateString().split("/").reverse().join("-"),
												max: e.max?.toLocaleDateString().split("/").reverse().join("-"),
											},
										}));
									}
									if (entry[0] === "Ultima compra") {
										tempCustomerInputDateFieldValues.set((prev) => ({
											...prev,
											lastPurchase: {
												min: e.min?.toLocaleDateString().split("/").reverse().join("-"),
												max: e.max?.toLocaleDateString().split("/").reverse().join("-"),
											},
										}));
									}
								}}
							/>
						)}
					</div>
				))}
			</div>
			<div style={{ display: "flex", gap: "1rem", alignSelf: "center" }}>
				<ButtonType2
					style={{ width: "fit-content", alignSelf: "center", marginTop: "1rem" }}
					onClick={() => customerFilterState.reset()}
					type="button"
				>
					Limpar
				</ButtonType2>
				<ButtonType2
					style={{ width: "fit-content", alignSelf: "center", marginTop: "1rem" }}
					onClick={submitFiltersaHandler}
					type="button"
				>
					Filtrar
				</ButtonType2>
			</div>
		</StyledCustomersFilter>
	);
};

export default CustomersFilter;
