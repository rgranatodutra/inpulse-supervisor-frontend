import { RenderingPage } from '../../routes';
import useCustomState from '../../utils/customState.hook';
import Header from './Header';
import Menu from './Menu';
import StyledMainPage from './style'

const MainPage = () => {
	const navigationMenuState = useCustomState<boolean>(false);

	return (
		<StyledMainPage $displayNavigationMenu={navigationMenuState.value}>
			<Header navigationMenuState={navigationMenuState} />
			<Menu navigationMenuState={navigationMenuState} />
			<RenderingPage />
		</StyledMainPage>
	)
}

export default MainPage
