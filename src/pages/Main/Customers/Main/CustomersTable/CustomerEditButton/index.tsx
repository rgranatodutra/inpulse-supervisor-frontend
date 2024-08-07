import { Link } from "react-router-dom";
import cssVars from "../../../../../../utils/cssVariables.vars";
import { FaUserGear } from "react-icons/fa6";

type Props = {
    customerId: number;
}

const CustomerEditButton = ({ customerId }: Props) => {
    return (
        <Link
            to={`/clientes/${customerId}`}
            title={`Editar cliente ID: ${customerId}`}
            style={{
                fontSize: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: cssVars.colorGrey[2],
                cursor: "pointer",
            }}
        >
            <FaUserGear style={{ pointerEvents: "none" }} />
        </Link>
    );
}

export default CustomerEditButton;