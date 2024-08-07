import StyledCustomersFilter from "./style"
import { ActiveFilters } from "./types";
import Input from "../../../../../../components/Input";
import InputDateRange from "../../../../../../components/InputDateRange";
import MultiSelect from "../../../../../../components/MultiSelect";
import useCustomState from "../../../../../../utils/customState.hook";
import { Option } from "../../../../../../components/Select";
import { defaultSelect100, defaultInput100, defaultInput50 } from "../../../../../../components-variants/defaultInputs";

type FilterValue = { key: string } & ({ type: "string" | "range-date" } | { type: "array", options: Array<Option<string> | Option<number>> });
type FilterOption = Option<FilterValue>;

const CustomersFilter = () => {
    const activeFiltersState = useCustomState<ActiveFilters>({});

    const filtersOptions: Array<FilterOption> = [
        {
            name: "CPF/CNPJ",
            value: {
                key: "CPF/CNPJ",
                type: "string"
            }
        },
        {
            name: "Código inPulse",
            value: {
                key: "Código inPulse",
                type: "string"
            }
        },
        {
            name: "Código ERP",
            value: {
                key: "Código ERP",
                type: "string"
            }
        },
        {
            name: "Campanhas",
            value: {
                key: "Campanhas",
                type: "array",
                options: []
            }
        },
        {
            name: "Grupos",
            value: {
                key: "Grupos",
                type: "array",
                options: []
            }
        },
        {
            name: "Segmentos",
            value: {
                key: "Segmentos",
                type: "array",
                options: []
            }
        },
        {
            name: "Origens",
            value: {
                key: "Origens",
                type: "array",
                options: []
            }
        },
        {
            name: "Mídias",
            value: {
                key: "Mídias",
                type: "array",
                options: []
            }
        },
        {
            name: "Estados",
            value: {
                key: "Estados",
                type: "array",
                options: []
            }
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
                type: "range-date"
            }
        },
        {
            name: "Produto comprado",
            value: {
                key: "Produto comprado",
                type: "array",
                options: []
            }
        },
        {
            name: "Situação",
            value: {
                key: "Situação",
                type: "string"
            }
        },
        {
            name: "Ultimo contato",
            value: {
                key: "Ultimo contato",
                type: "range-date"
            }
        },
    ];

    const onChangeSelectedFilters = (v: Array<FilterValue | null>) => {
        activeFiltersState.set(
            v.reduce((a, b) => {
                if (!b) return a;

                if (b.type === "array") {
                    a[b.key] = { type: "array", value: [] }
                } else if (b.type === "range-date") {
                    a[b.key] = { type: "range-date", value: { min: null, max: null } }
                } else {
                    a[b.key] = { type: "string", value: "" }
                }

                return a;
            }, {} as ActiveFilters)
        );
    }

    return (
        <StyledCustomersFilter>
            <MultiSelect
                {...defaultSelect100}
                options={filtersOptions}
                onChange={onChangeSelectedFilters}
                placeholder="Filtros de clientes"
            />
            {
                Object.entries(activeFiltersState.value).map((e, i) => (
                    <div key={i} className="input-wrapper">
                        <label>
                            {e[0]}
                        </label>
                        {
                            e[1].type === "string" &&
                            <Input
                                {...defaultInput100}
                                placeholder={e[0]}
                            />
                        }
                        {
                            e[1].type === "array" &&
                            <MultiSelect
                                {...defaultSelect100}
                                placeholder={e[0]}
                                options={[]}
                            />
                        }
                        {
                            e[1].type === "range-date" &&
                            <InputDateRange
                                title={e[0]}
                                {...defaultInput50}
                            />
                        }
                    </div>
                ))
            }
        </StyledCustomersFilter>
    );
}

export default CustomersFilter;