import { FaXmark } from "react-icons/fa6";
import StyledModal from "./style";
import { ReactNode } from "react";
import { CustomState } from "../../utils/customState.hook";

type ModalProps = {
	children?: ReactNode;
	title: string;
	modalState: CustomState<any>;
};

const Modal = ({ children, title, modalState }: ModalProps) => {
	return (
		<StyledModal>
			<div>
				<header>
					<h2> {title} </h2>
					<button onClick={() => modalState.reset()}>
						<FaXmark />
					</button>
				</header>
				<div>{children}</div>
			</div>
		</StyledModal>
	);
};

export default Modal;
