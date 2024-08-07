import { useContext } from "react";
import { CustomerContext } from "../../context";
import StyledScheduleTable from "./styles";

const ScheduleTable = () => {
    const { customerDataState } = useContext(CustomerContext);

    return (
        <StyledScheduleTable>
            <thead>
                <tr>
                    <th> Campanha </th>
                    <th> Data Agendamento </th>
                    <th> Data Resultado </th>
                    <th> Resultado </th>
                    <th> Operador </th>
                    <th> Operador Ligação </th>
                    <th> Fone Ligação </th>
                    <th> Ligação Início </th>
                    <th> Ligação Fim </th>
                </tr>
            </thead>
            <tbody>
                {
                    customerDataState.value?.CAMPANHAS &&
                    customerDataState.value.CAMPANHAS
                        .filter(c => c.CONCLUIDO === "NAO")
                        .map((c, i) => (
                            <tr key={`contact_${i}`}>
                                <td> {c.CAMPANHA} </td>
                                <td> {c.DT_AGENDAMENTO && new Date(c.DT_AGENDAMENTO).toLocaleString()} </td>
                                <td> {c.DT_RESULTADO && new Date(c.DT_RESULTADO).toLocaleDateString()} </td>
                                <td> {c.RESULTADO} </td>
                                <td> {c.OPERADOR} </td>
                                <td> {c.OPERADOR_LIGACAO} </td>
                                <td> {c.TELEFONE_LIGADO} </td>
                                <td> {c.DATA_HORA_LIG && new Date(c.DATA_HORA_LIG).toLocaleString()} </td>
                                <td> {c.DATA_HORA_FIM && new Date(c.DATA_HORA_FIM).toLocaleString()} </td>
                            </tr>
                        ))
                }
            </tbody>
        </StyledScheduleTable>
    );
}

export default ScheduleTable;