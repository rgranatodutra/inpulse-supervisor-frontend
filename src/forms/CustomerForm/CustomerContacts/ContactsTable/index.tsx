import { FaPencil, FaTrash } from "react-icons/fa6";
import StyledContactsTable from "./styles";
import { useContext } from "react";
import { CustomerContext } from "../../context";
import { calculateAge } from "../../functions";
import formatPhoneNumber from "../../../../utils/formatPhoneNumber.util";


const ContactsTable = () => {
    const { customerDataState, onClickEditContact, onClickDeleteContact } = useContext(CustomerContext);

    return (
        <StyledContactsTable>
            <thead>
                <tr>
                    <th> Ações </th>
                    <th> S </th>
                    <th> Nome </th>
                    <th> Apelido </th>
                    <th> Idade </th>
                    <th> Cargo </th>
                    <th> E-mail </th>
                    <th> Aniversário</th>
                    <th> Time </th>
                    <th> Filhos </th>
                    <th> Fone Direto </th>
                    <th> Fone Celular </th>
                    <th> Fone Residencial </th>
                </tr>
            </thead>
            <tbody>
                {
                    customerDataState.value.CONTATOS && customerDataState.value.CONTATOS.map((c, i) => (
                        <tr key={`contact_${i}`}>
                            <td>
                                <button onClick={onClickEditContact(c)} title="Editar contato" type="button">
                                    <FaPencil />
                                </button>
                                <button onClick={onClickDeleteContact(c)} title="Remover contato" type="button">
                                    <FaTrash />
                                </button>
                            </td>
                            <td> {c.SEXO} </td>
                            <td> {c.NOME} </td>
                            <td> {c.TRATAMENTO} </td>
                            <td>
                                {c.ANIVERSARIO && calculateAge(c.ANIVERSARIO)}
                            </td>
                            <td> {c.CARGO} </td>
                            <td> {c.EMAIL} </td>
                            <td> {c.ANIVERSARIO && new Date(c.ANIVERSARIO).toLocaleDateString()} </td>
                            <td> {c.TIME_FUTEBOL} </td>
                            <td> {c.FILHOS} </td>
                            <td>
                                {
                                    (c.AREA_DIRETO && c.FONE_DIRETO) &&
                                    formatPhoneNumber(c.AREA_DIRETO + c.FONE_DIRETO)
                                }
                            </td>
                            <td>
                                {
                                    (c.AREA_CEL && c.CELULAR) &&
                                    formatPhoneNumber(c.AREA_CEL + c.CELULAR)
                                }
                            </td>
                            <td>
                                {
                                    (c.AREA_RESI && c.FONE_RESIDENCIAL) &&
                                    formatPhoneNumber(c.AREA_RESI + c.FONE_RESIDENCIAL)
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </StyledContactsTable>
    );
}

export default ContactsTable;