import { useContext } from "react";
import PurchasesTable from "./PurchasesTable";
import { CustomerContext } from "../context";

const CustomerPurchases = () => {
    const { customerDataState } = useContext(CustomerContext);

    const { SALDO_DISPONIVEL, SALDO_LIMITE, VENCIMENTO_LIMITE_CREDITO, POTENCIAL, DATA_ULT_COMPRA } = customerDataState.value;

    return (
        <>
            <div>
                <p>
                    <b> Saldo disponível: </b>
                    {SALDO_DISPONIVEL.toLocaleString("pt-br", { currency: "BRL", style: "currency" })} |
                    <b> Saldo limite: </b>
                    {SALDO_LIMITE.toLocaleString("pt-br", { currency: "BRL", style: "currency" })}
                </p>
                <p>
                    <b> Vencimento do limite de crédito: </b>
                    {VENCIMENTO_LIMITE_CREDITO ? new Date(VENCIMENTO_LIMITE_CREDITO).toLocaleDateString() : "n/d"}
                </p>
                <p>
                    <b> Potêncial: </b>
                    {POTENCIAL.toLocaleString("pt-br", { currency: "BRL", style: "currency" })} |
                    <b> Data ult. compra: </b>
                    {DATA_ULT_COMPRA && new Date(DATA_ULT_COMPRA).toLocaleDateString()}
                </p>
            </div>
            <PurchasesTable />
        </>
    );
}

export default CustomerPurchases;