import StyledLoginPage from "./style";
import VerticalLogoTransparentDark from "../../assets/logov_transparent_dark.png";
import Input from "../../components/Input";
import { FaLock, FaUnlock, FaUser } from "react-icons/fa6";
import useCustomState from "../../utils/customState.hook";
import { FormEvent, useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import { formToJSON } from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";

const LoginPage = () => {
    const showPassword = useCustomState<boolean>(false);
    const loadingState = useCustomState<boolean>(false);
    const { login } = useContext(GlobalContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = formToJSON(event.currentTarget) as { login: string, password: string };

        login({
            login: formData.login,
            password: formData.password,
            loadingState
        });
    };

    return (
        <StyledLoginPage>
            <div>
                <form onSubmit={handleSubmit}>
                    <img src={VerticalLogoTransparentDark} alt="logo" />
                    <h2> Painel do Supervisor </h2>
                    <Input
                        $color="rgb(221, 223, 225)"
                        $focusColor="white"
                        $padding={[1, 1]}
                        $width="20rem"
                        type="text"
                        name="login"
                        placeholder="Usuário"
                        leftIcon={null}
                        rightIcon={<FaUser />}
                        required
                    />
                    <Input
                        $color="rgb(221, 223, 225)"
                        $focusColor="white"
                        $padding={[1, 1]}
                        $width="20rem"
                        type={showPassword.value ? "text" : "password"}
                        placeholder="Senha"
                        name="password"
                        leftIcon={null}
                        rightIcon={showPassword.value ?
                            <FaUnlock onClick={() => showPassword.set(false)} style={{ cursor: "pointer" }} />
                            :
                            <FaLock onClick={() => showPassword.set(true)} style={{ cursor: "pointer" }} />
                        }
                        required
                    />
                    <button disabled={loadingState.value}>
                        {
                            loadingState.value ?
                                <LoadingSpinner /> :
                                "Entrar"
                        }
                    </button>
                </form>
            </div>
        </StyledLoginPage>
    );
}

export default LoginPage;