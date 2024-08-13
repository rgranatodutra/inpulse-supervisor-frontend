import { ReactNode, createContext } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { User } from "../../interfaces/User.type";
import useCustomState, { CustomState } from "../../utils/customState.hook";
import OperatorEmail from "./OperatorEmail";
import OperatorSIP from "./OperatorSIP";

type OperatorContextProps = {
	formSections: Array<FormSectionButton>;
	renderingSectionState: CustomState<number>;
	operatorDataState: CustomState<User>;
	loadingState: CustomState<boolean>;
};

type OperatorProviderProps = {
	children: ReactNode;
};

type FormSectionButton = {
	id: number;
	button: ReactNode;
	component: ReactNode;
	mode: "edit" | "create" | "both";
};

const OperatorContext = createContext<OperatorContextProps>({} as OperatorContextProps);

const OperatorProvider = ({ children }: OperatorProviderProps) => {
	const formSections: Array<FormSectionButton> = [
		{
			id: 1,
			button: (
				<>
					{" "}
					<FaEnvelope /> E-mail{" "}
				</>
			),
			component: <OperatorEmail />,
			mode: "both",
		},
		{
			id: 2,
			button: (
				<>
					{" "}
					<FaPhone /> SIP{" "}
				</>
			),
			component: <OperatorSIP />,
			mode: "both",
		},
	];

	// Custom States
	const renderingSectionState = useCustomState<number>(1);
	const operatorDataState = useCustomState<User>({} as User);
	const loadingState = useCustomState<boolean>(false);

	return (
		<OperatorContext.Provider
			value={{
				formSections,
				renderingSectionState,
				operatorDataState,
				loadingState,
			}}
		>
			{children}
		</OperatorContext.Provider>
	);
};

export { OperatorContext, OperatorProvider };
