import StyledItemsTable from "./style";
import useCustomState from "../../../../../utils/customState.hook";
import { PurchaseItem } from "../../../../../interfaces/PurchaseItem.type";

const ItemsTable = () => {
    const itemsState = useCustomState<Array<PurchaseItem>>([]);

    return (
        <StyledItemsTable>
            <thead>
                <tr>
                    <th> Cód. Produto </th>
                    <th> Descrição do Item </th>
                    <th> Quantidade </th>
                    <th> Unidade </th>
                    <th> Valor Unidade </th>
                    <th> Desconto </th>
                </tr>
            </thead>
            <tbody>
                {
                    itemsState.value.map((p, i) => (
                        <tr key={`contact_${i}`}>
                            <td> {p.CODPROD} </td>
                            <td> {p.DESCONTO} </td>
                            <td> {p.QDT} </td>
                            <td> {p.UN_MEDIDA} </td>
                            <td> {p.VALOR_UN.toLocaleString("pt-br", { currency: "BRL", style: "currency" })} </td>
                            <td> {p.DESCONTO.toLocaleString("pt-br", { currency: "BRL", style: "currency" })} </td>
                        </tr>
                    ))
                }
            </tbody>
        </StyledItemsTable>
    );
}

export default ItemsTable;