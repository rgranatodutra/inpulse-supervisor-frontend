import { FadeLoader } from "react-spinners";
import cssVars from "../../utils/cssVariables.vars";

const LoadingSpinner = () => {
    return (
        <FadeLoader
            className="loading_spinner"
            color={cssVars.colorGrey[3]}
        />
    )
}

export default LoadingSpinner;