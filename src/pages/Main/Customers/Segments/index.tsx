import { useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { Segment } from "../../../../interfaces/Segment.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import cssVars from "../../../../utils/cssVariables.vars";
import useCustomState from "../../../../utils/customState.hook";
import SegmentCard from "./SegmentCard";
import StyledCustomerSegmentPage from "./style";

const CustomerSegmentPage = () => {
	const segments = useCustomState<Array<Segment>>([]);
	const newSegment = useCustomState<Partial<Segment>>({
		NOME: "",
		COD_UNIDADE: null,
	});
	const units = useCustomState<Array<{ CODIGO: number; DESCRICAO: string }>>([
		{ CODIGO: 1, DESCRICAO: "TESTE1" },
		{ CODIGO: 2, DESCRICAO: "TESTE2" },
	]);
	const addSegmentButtonDisabled = useCustomState(true);
	const updateOnEdit = (data: Segment) => {
		segments.set((prev) =>
			prev.map((v) => {
				if (v.CODIGO === data.CODIGO) {
					return data;
				}

				return v;
			})
		);
	};

	const updateOnDelete = (data: Segment) => {
		segments.set((prev) => prev.filter((v) => v.CODIGO != data.CODIGO));
	};

	const addSegment = () => {
		const segmentToAdd = {
			...newSegment.value,
			NOME: newSegment.value.NOME?.trim(),
		};

		console.log(segmentToAdd);

		useCustomRequest<{ message: String; data: Segment }, Partial<Segment>>({
			endpoint: "/segments",
			method: "post",
			service: "customers",
			requestData: segmentToAdd,
			onSuccess: (responseData) => {
				const newsegments = [...segments.value, responseData.data];
				segments.set(newsegments);
			},
		});
	};

	useEffect(() => {
		useCustomRequest<{ message: String; data: Segment[] }, undefined>({
			endpoint: "/segments?perPage=9999",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				segments.set(responseData.data);
			},
		});
	}, []);

	const inputChangeFn = (e) => {
		newSegment.set((prev) => ({ ...prev, NOME: e.target.value }));
		if (e.target.value.trim().length && addSegmentButtonDisabled.value) {
			addSegmentButtonDisabled.set(false);
		} else if (!addSegmentButtonDisabled.value && !e.target.value.trim().length) {
			addSegmentButtonDisabled.set(true);
		}
	};

	return (
		<StyledCustomerSegmentPage>
			<h2> Clientes {"->"} Segmentos </h2>
			<form>
				<div style={{ width: "20rem" }}>
					<h3> Nome do Segmento </h3>
					<Input
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 1]}
						$fontSize={1}
						$width={"100%"}
						leftIcon={null}
						rightIcon={null}
						onChange={(e) => inputChangeFn(e)}
						value={newSegment.value.NOME}
						placeholder="Digite o nome do segmento aqui..."
					/>
				</div>
				<div style={{ width: "20rem" }}>
					<h3> Unidade </h3>
					<Select
						$color={cssVars.colorGrey[3]}
						$focusColor={cssVars.colorGrey[0]}
						$borderColor={cssVars.colorGrey[5]}
						$padding={[0.5, 1]}
						$fontSize={1}
						$width={"100%"}
						onChange={(v) => newSegment.set((prev) => ({ ...prev, COD_UNIDADE: v }))}
						options={units.value.map((v) => ({
							name: v.DESCRICAO,
							value: v.CODIGO,
						}))}
						placeholder="Unidade"
					/>
				</div>
				{(addSegmentButtonDisabled.value && (
					<ButtonType2 disabled>
						<FaUsersLine />
						Adicionar Segmento
					</ButtonType2>
				)) || (
					<ButtonType2 type="button" onClick={() => addSegment()}>
						<FaUsersLine />
						Adicionar Segmento
					</ButtonType2>
				)}
			</form>
			<ul>
				{segments.value.map((segment) => {
					return (
						<SegmentCard
							key={`segment_${segment.CODIGO}`}
							segmentData={segment}
							updateOnEdit={updateOnEdit}
							updateOnDelete={updateOnDelete}
						/>
					);
				})}
			</ul>
		</StyledCustomerSegmentPage>
	);
};

export default CustomerSegmentPage;
