import { useNavigate } from "react-router-dom";
import { CustomState } from "../../../../utils/customState.hook";
import { NagivationMenuButton } from "../types";
import StyledNavigationSubMenu, { StyledNavigationSubMenuProps } from "./styles";
import { FaXmark } from "react-icons/fa6";

type NavigationSubMenuProps = {
    option: NagivationMenuButton;
    selectedOptionIdState: CustomState<number>;
} & StyledNavigationSubMenuProps;

const NavigationSubMenu = ({
    option,
    selectedOptionIdState,
    $displaySubMenu
}: NavigationSubMenuProps) => {
    const navigate = useNavigate();
    const currentPage = location.pathname;

    const onClickOption = (path: string) => () => {
        selectedOptionIdState.reset();
        navigate(path);
    }

    return (
        <StyledNavigationSubMenu $displaySubMenu={$displaySubMenu}>
            <header>
                <div>

                    {option.icon}
                    <p>{option.text}</p>
                </div>
                <button onClick={selectedOptionIdState.reset}>
                    <FaXmark />
                </button>
            </header>
            {
                option.subMenu!.options.map((o, i) => (
                    <button
                        key={`menu_option_${option.id}/${i}`}
                        onClick={onClickOption(o.path)}
                        className={currentPage === o.path ? "selected" : ""}
                    >
                        <p> {o.text} </p>
                    </button>
                ))
            }
        </StyledNavigationSubMenu>
    );
}

export default NavigationSubMenu;