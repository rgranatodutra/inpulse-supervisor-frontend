import { useEffect } from "react";
import { FaClock, FaNoteSticky, FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import { defaultInput100, defaultSelect100 } from "../../../../components-variants/defaultInputs";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { PauseReason } from "../../../../interfaces/PauseReason.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import PauseCard from "./PauseCard";
import StyledOperatorsPausesPage from "./style";

const OperatorsPausesPage = () => {
	const pauses = useCustomState<Array<PauseReason>>([]);
	const newPause = useCustomState<Partial<PauseReason>>({ TEMPO_MAX_SEG: 600 });

	const updateOnEdit = (data: PauseReason) => {
		pauses.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}
				return v;
			})
		);
	};

	const updateOnDelete = (data: PauseReason) => {
		pauses.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addPause = () => {
		const PauseToAdd = {
			...newPause.value,
			DESCRICAO: newPause.value.DESCRICAO?.trim(),
		};

		useCustomRequest<{ message: String; data: PauseReason }, Partial<PauseReason>>({
			endpoint: "/pauses",
			method: "post",
			service: "users",
			requestData: PauseToAdd,
			onSuccess: (responseData) => {
				const newPauses = [...pauses.value, responseData.data];
				pauses.set(newPauses);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: PauseReason[] }, undefined>({
			endpoint: "/pauses?perPage=9999",
			method: "get",
			service: "users",
			onSuccess: (responseData) => {
				pauses.set(responseData.data);
			},
		});
	}, []);

	const disabled =
		!newPause.value.DESCRICAO?.trim() ||
		!((newPause.value.DESCRICAO.trim().length || 0) < 25) ||
		!newPause.value.PRODUTIVIDADE ||
		!newPause.value.TEMPO_MAX_SEG ||
		!(newPause.value.TEMPO_MAX_SEG > 0);

	return (
		<StyledOperatorsPausesPage>
			<h2> Operadores {"->"} Pausas </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Motivo / Descrição </h3>
					<Input
						{...defaultInput100}
						leftIcon={<FaNoteSticky />}
						onChange={(e) => newPause.set((prev) => ({ ...prev, DESCRICAO: e.target.value }))}
						placeholder="Digite o motivo da pausa aqui..."
					/>
				</div>
				<div style={{ width: "10rem" }}>
					<h3> Tempo Limite (seg.)</h3>
					<Input
						{...defaultInput100}
						leftIcon={<FaClock />}
						defaultValue={600}
						min={1}
						onChange={(e) => newPause.set((prev) => ({ ...prev, TEMPO_MAX_SEG: +e.target.value }))}
						type="number"
					/>
				</div>
				<div style={{ width: "10rem" }}>
					<h3> Produtiva </h3>
					<Select
						{...defaultSelect100}
						onChange={(e) => newPause.set((prev) => ({ ...prev, PRODUTIVIDADE: e || undefined }))}
						options={[
							{ name: "Sim", value: "SIM" },
							{ name: "Não", value: "NAO" },
						]}
						defaultValue={{ name: "Não", value: "NAO" }}
					/>
				</div>

				<ButtonType2 disabled={disabled} type="button" onClick={() => addPause()}>
					<FaUsersLine />
					Adicionar Turno
				</ButtonType2>
			</form>
			<ul>
				{pauses.value.map((pause) => {
					return (
						<PauseCard
							key={`shift_${pause.CODIGO}`}
							pauseData={pause}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledOperatorsPausesPage>
	);
};

export default OperatorsPausesPage;
