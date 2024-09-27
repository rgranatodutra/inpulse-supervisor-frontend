import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCustomRequest } from "../../../../../../api";
import { defaultInput100, defaultInput50, defaultSelect100 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import InputDateRange from "../../../../../../components/InputDateRange";
import MultiSelect from "../../../../../../components/MultiSelect";
import { Option } from "../../../../../../components/Select";
import { Campaign } from "../../../../../../interfaces/Campaign.type";
import { Media } from "../../../../../../interfaces/Media.type";
import { Origin } from "../../../../../../interfaces/Origin.type";
import { Segment } from "../../../../../../interfaces/Segment.type";
import { UFState } from "../../../../../../interfaces/UFState.type";
import { UserGroup } from "../../../../../../interfaces/UserGroup.type";
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
		multiSelect?: {
			campaigns?: (string | null)[];
			groups?: (string | null)[];
			segments?: (string | null)[];
			origins?: (string | null)[];
			medias?: (string | null)[];
			ufStates?: (string | null)[];
			purchasedProduct?: (string | null)[];
		};
	}>;
};

const CustomersFilter = ({ customerFilterState }: CustomersFilterProps) => {
	const activeFiltersState = useCustomState<ActiveFilters>({});
	const userGroups = useCustomState<UserGroup[]>([]);
	const campaigns = useCustomState<Campaign[]>([]);
	const segments = useCustomState<Segment[]>([]);
	const origins = useCustomState<Origin[]>([]);
	const ufState = useCustomState<UFState[]>([]);
	const medias = useCustomState<Media[]>([]);

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
	const tempCustomerInputMultiSelectFieldValues = useCustomState<{
		campaigns?: (string | null)[];
		groups?: (string | null)[];
		segments?: (string | null)[];
		origins?: (string | null)[];
		medias?: (string | null)[];
		ufStates?: (string | null)[];
		purchasedProduct?: (string | null)[];
	}>({});

	useEffect(() => {
		useCustomRequest<{ message: String; data: UserGroup[] }, undefined>({
			endpoint: "/user-groups?perPage=9999",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				userGroups.set(responseData.data);
			},
		});
		useCustomRequest<{ message: String; data: Campaign[] }, undefined>({
			endpoint: "/campaigns?perPage=9999",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				campaigns.set(responseData.data);
			},
		});
		useCustomRequest<{ message: String; data: Segment[] }, undefined>({
			endpoint: "/segments?perPage=9999",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				segments.set(responseData.data);
			},
		});
		useCustomRequest<{ message: String; data: Origin[] }, undefined>({
			endpoint: "/origins?perPage=9999",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				origins.set(responseData.data);
			},
		});
		useCustomRequest<{ message: String; data: UFState[] }, undefined>({
			endpoint: "/ufStates?perPage=9999",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				ufState.set(responseData.data);
			},
		});
		useCustomRequest<{ message: String; data: Media[] }, undefined>({
			endpoint: "/medias?perPage=9999",
			method: "get",
			service: "monitoring",
			onSuccess: (responseData) => {
				medias.set(responseData.data);
			},
		});
	}, []);

	const groupMenuOptions = userGroups.value.map((group) => {
		return { name: group.DESCRICAO, value: group.CODIGO.toLocaleString() };
	});
	const campaignMenuOptions = campaigns.value.map((campaign) => {
		return { name: campaign.NOME, value: campaign.CODIGO.toLocaleString() };
	});
	const segmentMenuOptions = segments.value.map((segment) => {
		return { name: segment.NOME, value: segment.CODIGO.toLocaleString() };
	});
	const originMenuOptions = origins.value.map((origin) => {
		return { name: origin.DESCRICAO, value: origin.CODIGO.toLocaleString() };
	});
	const ufMenuOptions = ufState.value.map((state) => {
		return { name: state.NOME, value: state.UF };
	});
	const mediaMenuOptions = medias.value.map((media) => {
		return { name: media.NOME, value: media.CODIGO.toLocaleString() };
	});

	// bottom 3 options aren't complete due to me not knowing what they refer to
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
				options: campaignMenuOptions,
			},
		},
		{
			name: "Grupos",
			value: {
				key: "Grupos",
				type: "array",
				options: groupMenuOptions,
			},
		},
		{
			name: "Segmentos",
			value: {
				key: "Segmentos",
				type: "array",
				options: segmentMenuOptions,
			},
		},
		{
			name: "Origens",
			value: {
				key: "Origens",
				type: "array",
				options: originMenuOptions,
			},
		},
		{
			name: "Mídias",
			value: {
				key: "Mídias",
				type: "array",
				options: mediaMenuOptions,
			},
		},
		{
			name: "Estados",
			value: {
				key: "Estados",
				type: "array",
				options: ufMenuOptions,
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
			multiSelect: tempCustomerInputMultiSelectFieldValues.value,
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
							<MultiSelect
								{...defaultSelect100}
								placeholder={entry[0]}
								options={entry[1].value}
								onChange={(e) => {
									if (entry[0] === "Campanhas") {
										tempCustomerInputMultiSelectFieldValues.set((prev) => ({ ...prev, campaigns: e }));
									}
									if (entry[0] === "Grupos") {
										tempCustomerInputMultiSelectFieldValues.set((prev) => ({ ...prev, groups: e }));
									}
									if (entry[0] === "Segmentos") {
										tempCustomerInputMultiSelectFieldValues.set((prev) => ({ ...prev, segments: e }));
									}
									if (entry[0] === "Origens") {
										tempCustomerInputMultiSelectFieldValues.set((prev) => ({ ...prev, origins: e }));
									}
									if (entry[0] === "Mídias") {
										tempCustomerInputMultiSelectFieldValues.set((prev) => ({ ...prev, medias: e }));
									}
									if (entry[0] === "Estados") {
										tempCustomerInputMultiSelectFieldValues.set((prev) => ({ ...prev, ufStates: e }));
									}
									if (entry[0] === "Produto comprado") {
										tempCustomerInputMultiSelectFieldValues.set((prev) => ({ ...prev, purchasedProduct: e }));
									}
								}}
							/>
						)}
						{entry[1].type === "range-date" && (
							<InputDateRange
								title={entry[0]}
								{...defaultInput50}
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
									if (entry[0] === "Ultimo contato") {
										tempCustomerInputDateFieldValues.set((prev) => ({
											...prev,
											lastContract: {
												min: minDate.join("-"),
												max: maxDate.join("-"),
											},
										}));
									}
									if (entry[0] === "Ultima compra") {
										tempCustomerInputDateFieldValues.set((prev) => ({
											...prev,
											lastPurchase: {
												min: minDate.join("-"),
												max: maxDate.join("-"),
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
