import { useEffect } from "react";
import { FaCheck, FaX } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import { Campaign } from "../../../../interfaces/Campaign.type";
import { City } from "../../../../interfaces/City.type";
import { Segment } from "../../../../interfaces/Segment.type";
import { UFState } from "../../../../interfaces/UFState.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import CampaignCard from "./Cards/CampaignCard";
import CityCard from "./Cards/CityCard";
import SegmentCard from "./Cards/SegmentCard";
import StateCard from "./Cards/StateCard";
import StyledCustomersCitysPage from "./style";

const selectOptions = [
	{ name: "AC", value: "AC" },
	{ name: "AL", value: "AL" },
	{ name: "AM", value: "AM" },
	{ name: "AP", value: "AP" },
	{ name: "BA", value: "BA" },
	{ name: "CE", value: "CE" },
	{ name: "DF", value: "DF" },
	{ name: "ES", value: "ES" },
	{ name: "GO", value: "GO" },
	{ name: "MA", value: "MA" },
	{ name: "MG", value: "MG" },
	{ name: "MS", value: "MS" },
	{ name: "MT", value: "MT" },
	{ name: "PA", value: "PA" },
	{ name: "PB", value: "PB" },
	{ name: "PE", value: "PE" },
	{ name: "PI", value: "PI" },
	{ name: "PR", value: "PR" },
	{ name: "RJ", value: "RJ" },
	{ name: "RN", value: "RN" },
	{ name: "RO", value: "RO" },
	{ name: "RR", value: "RR" },
	{ name: "RS", value: "RS" },
	{ name: "SC", value: "SC" },
	{ name: "SE", value: "SE" },
	{ name: "SP", value: "SP" },
	{ name: "TO", value: "TO" },
];

const OrderPage = () => {
	const citiesState = useCustomState<Array<City>>([]);
	const ufState = useCustomState<Array<UFState>>([]);
	const segmentState = useCustomState<Array<Segment>>([]);
	const campaignsState = useCustomState<Array<Campaign>>([]);

	useEffect(() => {
		useCustomRequest<{ message: String; data: City[] }, undefined>({
			endpoint: "/cities?perPage=10000",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				citiesState.set(
					responseData.data.sort((a, b) => {
						if (a.ORDEM && b.ORDEM) {
							return a.ORDEM - b.ORDEM;
						} else if (a.ORDEM) {
							return 1;
						} else if (b.ORDEM) {
							return -1;
						}
						return 0;
					})
				);
			},
		});
		useCustomRequest<{ message: String; data: UFState[] }, undefined>({
			endpoint: "/ufStates?perPage=30",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				ufState.set(
					responseData.data.sort((a, b) => {
						if (a.ORDEM && b.ORDEM) {
							return a.ORDEM - b.ORDEM;
						} else if (a.ORDEM) {
							return 1;
						} else if (b.ORDEM) {
							return -1;
						}
						return 0;
					})
				);
			},
		});
		useCustomRequest<{ message: String; data: Segment[] }, undefined>({
			endpoint: "/segments?perPage=9999",
			method: "get",
			service: "customers",
			onSuccess: (responseData) => {
				segmentState.set(
					responseData.data.sort((a, b) => {
						if (a.ordem && b.ordem) {
							return a.ordem - b.ordem;
						} else if (a.ordem) {
							return 1;
						} else if (b.ordem) {
							return -1;
						}
						return 0;
					})
				);
			},
		});
		useCustomRequest<{ message: String; data: Campaign[] }, undefined>({
			endpoint: "/campaigns?perPage=9999",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				console.log(responseData.data);
				campaignsState.set(
					responseData.data.sort((a, b) => {
						if (a.PRIORIDADE && b.PRIORIDADE) {
							return a.PRIORIDADE - b.PRIORIDADE;
						} else if (a.PRIORIDADE) {
							return 1;
						} else if (b.PRIORIDADE) {
							return -1;
						}
						return 0;
					})
				);
			},
		});
	}, []);

	/* function addCity() {
		useCustomRequest<{ message: String; data: City }, Partial<City>>({
			endpoint: "/cities",
			method: "post",
			service: "campaigns",
			requestData: newCity.value,
			onSuccess: (responseData) => {
				const newCitys = [...citiesState.value, responseData.data];
				citiesState.set(newCitys);
				toast.success("Cidade adicionada com sucesso");
			},
		});
	} */

	return (
		<StyledCustomersCitysPage>
			<div className="top">
				<div className="ul-div">
					<h2>Campanhas</h2>
					<ul>
						{campaignsState.value.map((campaign) => {
							return <CampaignCard key={`campaign${campaign.CODIGO}`} campaignData={campaign} />;
						})}
					</ul>
				</div>
				<div className="ul-div">
					<h2>Cidades</h2>
					<ul>
						{citiesState.value.map((city) => {
							return <CityCard key={`city_${city.CODIGO}`} cityData={city} />;
						})}
					</ul>
				</div>
				<div className="ul-div">
					<h2>Estados</h2>
					<ul>
						{ufState.value.map((state) => {
							return <StateCard key={`state${state.ORDEM}`} stateData={state} />;
						})}
					</ul>
				</div>
				<div className="ul-div">
					<h2>Segmentos</h2>
					<ul>
						{segmentState.value.map((segment) => {
							return <SegmentCard key={`segment${segment.CODIGO}`} segmentData={segment} />;
						})}
					</ul>
				</div>
			</div>
			<div className="bottom">
				<div className="ul-div">
					<h2>Ordem de busca</h2>
					<ul>
						{ufState.value.map((state) => {
							return <StateCard key={`state${state.ORDEM}`} stateData={state} />;
						})}
					</ul>
				</div>
				<div className="ul-div">
					<h2>Ordem dos campos dinamicos</h2>
					<ul>
						{ufState.value.map((state) => {
							return <StateCard key={`state${state.ORDEM}`} stateData={state} />;
						})}
					</ul>
				</div>
				<div className="ul-div">
					<h2>Ordem final</h2>
					<ul>
						{ufState.value.map((state) => {
							return <StateCard key={`state${state.ORDEM}`} stateData={state} />;
						})}
					</ul>
				</div>
				<div className="Buttons">
					<ButtonType2>
						<FaCheck />
						Salvar
					</ButtonType2>
					<ButtonType2>
						<FaX />
						Cancelar
					</ButtonType2>
				</div>
			</div>
		</StyledCustomersCitysPage>
	);
};

export default OrderPage;
