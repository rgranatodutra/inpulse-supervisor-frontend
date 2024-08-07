import { defaultSelect100, defaultInput100, defaultInput50 } from "../../../../../../components-variants/defaultInputs";
import Input from "../../../../../../components/Input";
import InputDateRange from "../../../../../../components/InputDateRange";
import Select, { Option } from "../../../../../../components/Select";
import cssVars from "../../../../../../utils/cssVariables.vars";
import useCustomState from "../../../../../../utils/customState.hook";
import StyledVariantFilter from "./style"
import { VariantFiltersTypes } from "./types";

type ViewOption = "Agendamentos" | "Ligações" | "Sem agendamento";

const VariantFilter = () => {
    const selectViewState = useCustomState<ViewOption>("Agendamentos");

    const selectViewOptions: Array<Option<ViewOption>> = [
        { name: "Agendamentos", value: "Agendamentos" },
        { name: "Ligações", value: "Ligações" },
        { name: "Sem agendamento", value: "Sem agendamento" },
    ];

    const viewOptions: Record<ViewOption, Record<string, VariantFiltersTypes>> = {
        "Agendamentos": {
            "Agendamento após": {
                type: "date-hour"
            },
            "Agendamento até": {
                type: "date-hour"
            },
            "Operador do cliente": {
                type: "select",
                options: []
            },
            "Data recompra": {
                type: "range-date"
            },
            "Clientes nunca trabalhados": {
                type: "boolean"
            },
            "Contatos/Ligações": {
                type: "select",
                options: []
            }
        },
        "Ligações": {
            "Operador da ligação": {
                type: "select",
                options: []
            },
            "Resultado": {
                type: "select",
                options: []
            },
            "Ligação após": {
                type: "date-hour"
            },
            "Ligação até": {
                type: "date-hour"
            },
        },
        "Sem agendamento": {}
    }

    return (
        <StyledVariantFilter>
            <Select
                {...defaultSelect100}
                $focusColor={cssVars.colorGrey[0]}
                defaultValue={selectViewOptions[0]}
                options={selectViewOptions}
                onChange={(v) => { selectViewState.set(v || "Agendamentos") }}
            />
            {
                Object.entries(viewOptions[selectViewState.value]).map(filter => (
                    <div className="input-wrapper">
                        {
                            filter[1].type === "boolean" &&
                            <span style={{ display: "flex", alignItems: "center", width: "100%", gap: "0.5rem" }}>
                                <input type="checkbox" />
                                <h2> {filter[0]} </h2>
                            </span>
                        }
                        {
                            filter[1].type === "date-hour" &&
                            <span style={{ display: "flex", alignItems: "center", width: "100%", gap: "0.5rem" }}>
                                <h3 style={{ whiteSpace: "nowrap", width: "12rem" }}> {filter[0]} </h3>
                                <Input {...defaultInput100} type="datetime-local" />
                            </span>
                        }
                        {
                            filter[1].type === "range-date" &&
                            <InputDateRange {...defaultInput50} title={filter[0] + " (após - até)"} />
                        }
                        {
                            filter[1].type === "select" &&
                            <Select
                                {...defaultSelect100}
                                $focusColor={cssVars.colorGrey[0]}
                                placeholder={filter[0]}
                                options={[]}
                                onChange={() => null}
                            />
                        }
                    </div>
                ))
            }

        </StyledVariantFilter>
    );
}

export default VariantFilter;