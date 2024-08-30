import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaCheck, FaX } from "react-icons/fa6";
import { useCustomRequest } from "../../../../api";
import { Campaign } from "../../../../interfaces/Campaign.type";
import { City } from "../../../../interfaces/City.type";
import { parameters } from "../../../../interfaces/Parameters.type";
import { Segment } from "../../../../interfaces/Segment.type";
import { UFState } from "../../../../interfaces/UFState.type";
import { ButtonType2 } from "../../../../styles/buttons.style";
import useCustomState from "../../../../utils/customState.hook";
import CampaignCard from "./Cards/CampaignCard";
import CityCard from "./Cards/CityCard";
import FinalOrderCard from "./Cards/FinalOrderCard";
import SegmentCard from "./Cards/SegmentCard";
import StateCard from "./Cards/StateCard";
import StyledCustomersCitysPage from "./style";

const OrderPage = () => {
	const currentPage = useCustomState<number>(1);

	const citiesState = useCustomState<Array<City>>([]);
	const ogCitiesState = useCustomState<Array<City>>([]);

	const ufState = useCustomState<Array<UFState>>([]);
	const ogUfState = useCustomState<Array<UFState>>([]);

	const segmentState = useCustomState<Array<Segment>>([]);
	const ogSegmentState = useCustomState<Array<Segment>>([]);

	const campaignsState = useCustomState<Array<Campaign>>([]);
	const ogCampaignsState = useCustomState<Array<Campaign>>([]);

	const parametersState = useCustomState<Array<parameters>>([]);
	const ogParametersState = useCustomState<Array<parameters>>([]);
	const parametersOrderState = useCustomState<string[]>([]);

	useEffect(() => {
		useCustomRequest<{ message: String; data: City[] }, undefined>({
			endpoint: "/cities?perPage=10000",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				ogCitiesState.set(responseData.data);
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
				ogUfState.set(responseData.data);
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
				ogSegmentState.set(responseData.data);
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
				ogCampaignsState.set(responseData.data);
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
		useCustomRequest<{ message: String; data: parameters[] }, undefined>({
			endpoint: "/parameterss?perPage=9999",
			method: "get",
			service: "campaigns",
			onSuccess: (responseData) => {
				parametersState.set(responseData.data);
				ogParametersState.set(responseData.data);
				parametersOrderState.set(responseData.data[0].SEQUENCIADEORDENACAO.split(","));
			},
		});
	}, []);

	function addOrder() {
		const alteredCampaigns = campaignsState.value.filter(
			(OCS) => !ogCampaignsState.value.some((CS) => OCS.CODIGO === CS.CODIGO && OCS.PRIORIDADE === CS.PRIORIDADE)
		);

		const alteredUfs = ogUfState.value.filter(
			(OCS) => !ufState.value.some((CS) => OCS.NOME === CS.NOME && OCS.ORDEM === CS.ORDEM)
		);

		const alteredSegments = ogSegmentState.value.filter(
			(OCS) => !segmentState.value.some((CS) => OCS.CODIGO === CS.CODIGO && OCS.ordem === CS.ordem)
		);

		const alteredCities = ogCitiesState.value.filter(
			(OCS) => !citiesState.value.some((CS) => OCS.CODIGO === CS.CODIGO && OCS.ORDEM === CS.ORDEM)
		);

		console.log(alteredCampaigns);
	}

	function resetOrder() {
		campaignsState.set(
			ogCampaignsState.value.sort((a, b) => {
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
		segmentState.set(
			ogSegmentState.value.sort((a, b) => {
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
		ufState.set(
			ogUfState.value.sort((a, b) => {
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
		citiesState.set(
			ogCitiesState.value.sort((a, b) => {
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
		parametersState.set(ogParametersState.value);
		parametersOrderState.set(ogParametersState.value[0].SEQUENCIADEORDENACAO.split(","));
	}

	return (
		<StyledCustomersCitysPage>
			<div className="ul-div campaigns">
				<h2>Campanhas</h2>
				<ul>
					{campaignsState.value.map((campaign, index) => {
						return (
							<CampaignCard
								index={index}
								key={`campaign${campaign.CODIGO}`}
								campaignData={campaign}
								campaignsState={campaignsState}
							/>
						);
					})}
				</ul>
			</div>
			<div className="ul-div cities">
				<h2>Cidades</h2>
				<div className="pagination">
					<h2>
						{currentPage.value > 1 && (
							<button onClick={() => currentPage.set((prev) => prev - 1)}>
								<FaAngleLeft />
							</button>
						)}
						{currentPage.value} / {Math.ceil(citiesState.value.length / 50)}
						{currentPage.value < Math.ceil(citiesState.value.length / 50) && (
							<button onClick={() => currentPage.set((prev) => prev + 1)}>
								<FaAngleRight />
							</button>
						)}
					</h2>
				</div>
				<ul>
					{citiesState.value.slice((currentPage.value - 1) * 50, currentPage.value * 50).map((city, index) => {
						return <CityCard key={`city_${city.CODIGO}`} cityData={city} citiesState={citiesState} index={index} />;
					})}
				</ul>
			</div>
			<div className="ul-div states">
				<h2>Estados</h2>
				<ul>
					{ufState.value.map((state, index) => {
						return <StateCard key={`state${state.NOME}`} stateData={state} ufState={ufState} index={index} />;
					})}
				</ul>
			</div>
			<div className="ul-div segments">
				<h2>Segmentos</h2>
				<ul>
					{segmentState.value.map((segment, index) => {
						return (
							<SegmentCard
								key={`segment${segment.CODIGO}`}
								segmentData={segment}
								segmentState={segmentState}
								index={index}
							/>
						);
					})}
				</ul>
			</div>

			<div className="ul-div final">
				<h2>Ordem final</h2>
				<ul>
					{parametersOrderState.value.map((param) => {
						return (
							<FinalOrderCard
								key={`param${param}`}
								paramData={param}
								paramState={parametersState}
								paramOrderState={parametersOrderState}
							/>
						);
					})}
				</ul>
			</div>
			<div className="buttons">
				<ButtonType2 onClick={addOrder}>
					<FaCheck />
					Salvar
				</ButtonType2>
				<ButtonType2 onClick={resetOrder}>
					<FaX />
					Reverter
				</ButtonType2>
			</div>
		</StyledCustomersCitysPage>
	);
};

export default OrderPage;
