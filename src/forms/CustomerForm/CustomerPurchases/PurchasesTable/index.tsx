import { ReactNode, useContext } from "react";
import { CustomerContext } from "../../context";
import StyledPurchasesTable from "./style";
import { FaEye } from "react-icons/fa6";
import useCustomState from "../../../../utils/customState.hook";
import { Purchase } from "../../../../interfaces/Purchase.type";
import PurchaseItemsModal from "../PurchaseItemsModal";

const PurchasesTable = () => {
    const { customerDataState } = useContext(CustomerContext);
    const purchaseModalState = useCustomState<ReactNode>(null);

    const onClickViewItems = (c: Purchase) => () => purchaseModalState.set(
        <PurchaseItemsModal modalState={purchaseModalState} purchase={c} />
    );

    return (
        <StyledPurchasesTable>
            <thead>
                <tr>
                    <th> </th>
                    <th> Data </th>
                    <th> Descrição da compra </th>
                    <th> Valor total </th>
                    <th> Forma pagamento </th>
                    <th> Tipo </th>
                </tr>
            </thead>
            <tbody>
                {
                    customerDataState.value?.COMPRAS && customerDataState.value.COMPRAS.map((c, i) => (
                        <tr key={`contact_${i}`}>
                            <td>
                                <button type="button" onClick={onClickViewItems(c)}>
                                    <FaEye />
                                </button>
                            </td>
                            <td> {c.DATA && new Date(c.DATA).toLocaleDateString()} </td>
                            <td> {c.DESCRICAO} </td>
                            <td> {c.VALOR.toLocaleString("pt-br", { currency: "BRL", style: "currency" })} </td>
                            <td> {c.FORMA_PGTO} </td>
                            <td> {c.TIPO} </td>
                        </tr>
                    ))
                }
            </tbody>
            {purchaseModalState.value}
        </StyledPurchasesTable>
    );
}

export default PurchasesTable;