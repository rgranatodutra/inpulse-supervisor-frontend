import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CustomState } from "../../../../utils/customState.hook";
import { NagivationMenuButton } from "../types";
import StyledNavigationSubMenu, { StyledNavigationSubMenuProps } from "./styles";

type NavigationSubMenuProps = {
	option: NagivationMenuButton;
	selectedOptionIdState: CustomState<number>;
} & StyledNavigationSubMenuProps;

const NavigationSubMenu = ({ option, selectedOptionIdState, $displaySubMenu }: NavigationSubMenuProps) => {
	const navigate = useNavigate();
	const currentPage = location.pathname;

	const onClickOption = (path: string) => () => {
		selectedOptionIdState.reset();
		navigate(path);
	};

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
			{option.subMenu!.options.map((o, i) => (
				<button
					key={`menu_option_${option.id}/${i}`}
					onClick={onClickOption(o.path)}
					className={
						currentPage.split("/").slice(0, 3).join("/").includes(o.path.split("/").slice(0, 3).join("/"))
							? "selected"
							: ""
					}
				>
					<p> {o.text} </p>
				</button>
			))}
		</StyledNavigationSubMenu>
	);
};

export default NavigationSubMenu;
