import StyledHeader from "./style";
import HorizontalLogoTransparent from "../../../assets/logoh_transparent.png";
import HorizontalLogoTransparentDark from "../../../assets/logoh_transparent_dark.png";
import { FaBars, FaCircleUser, FaXmark } from "react-icons/fa6";
import { CustomState } from "../../../utils/customState.hook";
import cssVars from "../../../utils/cssVariables.vars";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/global";

type HeaderProps = {
    navigationMenuState: CustomState<boolean>;
}

const Header = ({ navigationMenuState }: HeaderProps) => {
    const { darkModeState, userState, logout } = useContext(GlobalContext);

    const logoImage = darkModeState.value ? HorizontalLogoTransparentDark : HorizontalLogoTransparent;
    const toggleNavigationIcon = (navigationMenuState.value ?
        <FaXmark color={cssVars.colorGrey[0]} />
        :
        <FaBars color={cssVars.colorGrey[0]} />);

    const onClickToggleNavigation = () => navigationMenuState.set(prev => !prev);
    const onClickPreferences = () => {
        darkModeState.set(prev => {
            localStorage.setItem("@inpulse/dark-mode", !prev ? "1" : "0");
            return !prev;
        });

    }

    return (
        <StyledHeader>
            <a href="/">
                <div>
                    <button onClick={onClickToggleNavigation}>
                        {toggleNavigationIcon}
                    </button>
                    <img src={logoImage} alt="Logo" />
                </div>
            </a>
            <div className="user_box">
                <FaCircleUser />
                <div>
                    <p> Olá, <b> {userState.value!.NOME} </b></p>
                    <div>
                        <span onClick={onClickPreferences}>Preferências</span>
                        <span> | </span>
                        <span onClick={logout}>Saír</span>
                    </div>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header;