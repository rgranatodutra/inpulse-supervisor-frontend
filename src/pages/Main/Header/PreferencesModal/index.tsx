import { useContext } from "react";

import { defaultInput } from "../../../../components-variants/defaultInputs";
import Modal from "../../../../components/Modal";
import Select from "../../../../components/Select";
import { GlobalContext } from "../../../../contexts/global";
import StyledRoleModal from "./style";

function PreferencesModal() {
	const { modalState, darkModeState } = useContext(GlobalContext);

	function onDarkModeSwap(e: boolean | null) {
		if (e) {
			darkModeState.set(() => {
				localStorage.setItem("@inpulse/dark-mode", "1");
				return e;
			});
		} else if (e === false) {
			darkModeState.set(() => {
				localStorage.setItem("@inpulse/dark-mode", "0");
				return e;
			});
		}
	}

	const defaultDarkMode = darkModeState.value ? "Modo escuro" : "Modo claro";

	return (
		<Modal modalState={modalState} title="Editar Preferencias">
			<StyledRoleModal>
				<Select
					{...defaultInput}
					options={[
						{ name: "Modo claro", value: false },
						{ name: "Modo escuro", value: true },
					]}
					placeholder={defaultDarkMode}
					onChange={(e) => onDarkModeSwap(e)}
				/>
			</StyledRoleModal>
		</Modal>
	);
}

export default PreferencesModal;
