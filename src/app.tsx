import { useContext } from "react";
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import { GlobalContext } from "./contexts/global";
import GlobalStyles from "./styles/global.style";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const { darkModeState, userState, modalState } = useContext(GlobalContext);
	const isAuthenticated: boolean = Boolean(userState.value);

	return (
		<>
			<GlobalStyles darkMode={darkModeState.value} />
			<ToastContainer />
			{
				isAuthenticated ?
					<MainPage />
					:
					<LoginPage />
			}
			{modalState.value}
		</>
	);
}

export default App;