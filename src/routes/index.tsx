import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CustomerForm from "../forms/CustomerForm";
import { CustomerProvider } from "../forms/CustomerForm/context";
import OperatorForm from "../forms/OperatorForm";
import { OperatorProvider } from "../forms/OperatorForm/context";
import CampaignsPage from "../pages/Main/Campaigns/Campaigns";
import OtherCitiesPage from "../pages/Main/Campaigns/Cities";
import ExceptionsPage from "../pages/Main/Campaigns/Exceptions";
import ExceptionsCitiesTable from "../pages/Main/Campaigns/Exceptions/ExceptionsCities";
import ExceptionsClientsTable from "../pages/Main/Campaigns/Exceptions/ExceptionsClientsTable";
import ExceptionsSegmentsTable from "../pages/Main/Campaigns/Exceptions/ExceptionsSegments";
import ExceptionsStatesTable from "../pages/Main/Campaigns/Exceptions/ExceptionsStates";
import UnitsPage from "../pages/Main/Campaigns/Main";
import OrderPage from "../pages/Main/Campaigns/Order";
import ResultsPage from "../pages/Main/Campaigns/Results";
import CustomersBrandsPage from "../pages/Main/Customers/Brands";
import CustomersChangesPage from "../pages/Main/Customers/CustomersChanges";
import CustomerGroupsPage from "../pages/Main/Customers/Groups";
import CustomersPage from "../pages/Main/Customers/Main";
import CustomersOriginsPage from "../pages/Main/Customers/Origins";
import CustomersRolesPage from "../pages/Main/Customers/Roles";
import CustomerSegmentPage from "../pages/Main/Customers/Segments";
import Home from "../pages/Main/Home";
import BreaksTaken from "../pages/Main/Monitor/BreaksTaken";
import ReceptiveCalls from "../pages/Main/Monitor/ReceptiveCalls";
import MonitorSchedules from "../pages/Main/Monitor/Schedules";
import OperatorsDealsPage from "../pages/Main/Operators/Deals";
import OperatorsGoalsPage from "../pages/Main/Operators/Goals";
import OperatorsGroupsPage from "../pages/Main/Operators/Groups";
import OperatorsPage from "../pages/Main/Operators/Main";
import OperatorsPausesPage from "../pages/Main/Operators/Pauses";
import OperatorsShiftsPage from "../pages/Main/Operators/Shifts";
import TransferCostumers from "../pages/Main/Tools/transferCustomers";

const setTitle = (title: string) => (document.title = title);

export const RenderingPage = () => {
	const location = useLocation();

	useEffect(() => {
		setTitle("inPulse: " + location.pathname.replace("/", "").replace("/", " -> ").replace("_", " "));
	}, [location]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<>
				{/* Rotas de Clientes */}
				<Route path="/clientes/main" element={<CustomersPage />} />
				<Route
					path="/clientes/cadastrar"
					element={
						<CustomerProvider>
							<CustomerForm mode="create" />
						</CustomerProvider>
					}
				/>
				<Route
					path="/clientes/:customerId"
					element={
						<CustomerProvider>
							<CustomerForm mode="edit" />
						</CustomerProvider>
					}
				/>
				<Route path="/clientes/grupos" element={<CustomerGroupsPage />} />
				<Route path="/clientes/segmentos" element={<CustomerSegmentPage />} />
				<Route path="/clientes/cargos" element={<CustomersRolesPage />} />
				<Route path="/clientes/origens" element={<CustomersOriginsPage />} />
				<Route path="/clientes/marcas" element={<CustomersBrandsPage />} />
				<Route path="/clientes/alteracoes" element={<CustomersChangesPage />} />
			</>
			<>
				{/* Rotas de Operadores */}
				<Route path="/operadores/main" element={<OperatorsPage />} />
				<Route
					path="/operadores/cadastrar"
					element={
						<OperatorProvider>
							<OperatorForm mode="create" />
						</OperatorProvider>
					}
				/>
				<Route
					path="/operadores/:operatorId"
					element={
						<OperatorProvider>
							<OperatorForm mode="edit" />
						</OperatorProvider>
					}
				/>
				<Route path="/operadores/grupos" element={<OperatorsGroupsPage />} />
				<Route path="/operadores/turnos" element={<OperatorsShiftsPage />} />
				<Route path="/operadores/pausas" element={<OperatorsPausesPage />} />
				<Route path="/operadores/metas" element={<OperatorsGoalsPage />} />
				<Route path="/operadores/vendas" element={<OperatorsDealsPage />} />
			</>
			<>
				{/* Rotas de Campanhas */}
				<Route path="/campanhas/unidades" element={<UnitsPage />} />
				<Route path="/campanhas/resultados" element={<ResultsPage />} />
				<Route path="/campanhas/cadastro" element={<CampaignsPage />} />
				<Route path="/campanhas/ordem" element={<OrderPage />} />
				<Route path="/campanhas/cidades" element={<OtherCitiesPage />} />
				<Route path="/campanhas/excecoes/*" element={<ExceptionsPage />}>
					<Route path="clientes" element={<ExceptionsClientsTable />} />
					<Route path="cidades" element={<ExceptionsCitiesTable />} />
					<Route path="estados" element={<ExceptionsStatesTable />} />
					<Route path="segmentos" element={<ExceptionsSegmentsTable />} />
				</Route>
			</>

			<>
				{/* Rotas de Monitoria */}
				<Route path="/monitor/agenda" element={<MonitorSchedules />} />
				<Route path="/monitor/pausas_realizadas" element={<BreaksTaken />} />
				<Route path="/monitor/chamadas_recebidas" element={<ReceptiveCalls />} />
			</>
			<>
				{/* Rotas de Ferramentas */}
				<Route path="/ferramentas/transferencia_clientes" element={<TransferCostumers />} />
			</>
			<>
				{/* Rotas de Relatórios */}
				<Route path="/relatorios/construtor" element={<></>} />
				<Route path="/relatorios/analise_de_mailing" element={<></>} />
				<Route path="/relatorios/bilhetagem" element={<></>} />
				<Route path="/relatorios/curva_abc_de_ligacoes" element={<></>} />
				<Route path="/relatorios/produtividade" element={<></>} />
				<Route path="/relatorios/propostas" element={<></>} />
				<Route path="/relatorios/ordem_das_ligacoes" element={<></>} />
				<Route path="/relatorios/pesquisa_de_satisfacao" element={<></>} />
				<Route path="/relatorios/regua_por_carteira" element={<></>} />
				<Route path="/relatorios/pausas_realizadas" element={<></>} />
				<Route path="/relatorios/analise_de_campanhas" element={<></>} />
			</>
		</Routes>
	);
};
