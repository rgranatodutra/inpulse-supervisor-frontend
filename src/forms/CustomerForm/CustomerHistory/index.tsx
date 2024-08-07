import { useContext } from "react";
import StyledHistoryTable from "./style";
import { CustomerContext } from "../context";

const CustomerHistory = () => {
    const { customerDataState } = useContext(CustomerContext);

    return (
        <StyledHistoryTable>
            <thead>
                <tr>
                    <th> Campanha </th>
                    <th> Tipo Ligação </th>
                    <th> Operador </th>
                    <th> Resultado </th>
                    <th> Ligação Início</th>
                    <th> Ligação Fim </th>
                    <th> Telefone </th>
                </tr>
            </thead>
            <tbody>
                {
                    customerDataState.value?.CAMPANHAS &&
                    customerDataState.value.CAMPANHAS
                        .filter(c => c.CONCLUIDO === "SIM")
                        .map((c, i) => (
                            <tr key={`contact_${i}`}>
                                <td> {c.CAMPANHA} </td>
                                <td> ATIVO | RECEPTIVO </td>
                                <td> {c.OPERADOR_LIGACAO} </td>
                                <td> {c.RESULTADO} </td>
                                <td> {c.DATA_HORA_LIG && new Date(c.DATA_HORA_LIG).toLocaleString()} </td>
                                <td> {c.DATA_HORA_FIM && new Date(c.DATA_HORA_FIM).toLocaleString()} </td>
                                <td> {c.TELEFONE_LIGADO} </td>
                            </tr>
                        ))
                }
            </tbody>
        </StyledHistoryTable>
    );
}

export default CustomerHistory;