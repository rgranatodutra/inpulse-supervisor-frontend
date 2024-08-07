import { FaAngleDown } from "react-icons/fa6";
import menuOptions from "./menuOptions";
import StyledNavigationMenu, { StyledNavigationMenuButton } from "./style";
import useCustomState, { CustomState } from "../../../utils/customState.hook";
import { useLocation } from "react-router-dom";
import NavigationSubMenu from "./SubMenu";

type NavigationMenuProps = {
	navigationMenuState: CustomState<boolean>;
}

const NavigationMenu = ({ navigationMenuState }: NavigationMenuProps) => {
	const menuOptionsState = useCustomState<typeof menuOptions>(menuOptions);
	const selectedOptionIdState = useCustomState<number>(0);

	const location = useLocation();
	const currentPage = location.pathname;

	return (
		<StyledNavigationMenu>
			{
				menuOptionsState.value.map((option) => (
					<StyledNavigationMenuButton
						key={`menu_option_${option.id}`}
					>
						<button
							onClick={() => {
								selectedOptionIdState.set(selectedOptionIdState.value === option.id ? 0 : option.id);
								navigationMenuState.set(true);
							}}
							className={currentPage.includes(option.path) ? "selected" : ""}
						>
							<>{option.icon}</>
							<p>{option.text}</p>
							{
								option.subMenu && navigationMenuState.value &&
								<FaAngleDown className="angle_down" />
							}
						</button>
						{
							option.subMenu && (
								<NavigationSubMenu
									option={option}
									selectedOptionIdState={selectedOptionIdState}
									$displaySubMenu={selectedOptionIdState.value === option.id}
								/>
							)
						}
					</StyledNavigationMenuButton>
				))
			}
		</StyledNavigationMenu>
	);
}

export default NavigationMenu;