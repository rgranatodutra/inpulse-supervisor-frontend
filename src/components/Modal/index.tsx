import { ReactNode } from "react";
import { FaXmark } from "react-icons/fa6";
import { CustomState } from "../../utils/customState.hook";
import StyledModal from "./style";

type ModalProps = {
	children?: ReactNode;
	title: string;
	modalState: CustomState<any>;
	onClose?: () => void;
};

const Modal = ({ children, title, modalState, onClose }: ModalProps) => {
	return (
		<StyledModal>
			<div>
				<header>
					<h1> {title} </h1>
					<button
						onClick={() => {
							modalState.reset();
							onClose ? onClose() : null;
						}}
					>
						<FaXmark />
					</button>
				</header>
				<div>{children}</div>
			</div>
		</StyledModal>
	);
};

export default Modal;
