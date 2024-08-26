import { FaBullhorn, FaChartArea, FaDesktop, FaGear, FaHeadset, FaToolbox, FaUsers } from "react-icons/fa6";
import { NagivationMenuButton } from "./types";

const menuOptions: Array<NagivationMenuButton> = [
	{
		id: 1,
		icon: <FaUsers />,
		text: "Clientes",
		path: "/clientes",
		subMenu: {
			options: [
				{ text: "Clientes", path: "/clientes" },
				{ text: "Grupos", path: "/clientes/grupos" },
				{ text: "Segmentos", path: "/clientes/segmentos" },
				{ text: "Cargos", path: "/clientes/cargos" },
				{ text: "Origens", path: "/clientes/origens" },
				{ text: "Marcas", path: "/clientes/marcas" },
			],
		},
	},
	{
		id: 2,
		icon: <FaHeadset />,
		text: "Operadores",
		path: "/operadores",
		subMenu: {
			options: [
				{ text: "Operadores", path: "/operadores" },
				{ text: "Grupos", path: "/operadores/grupos" },
				{ text: "Turnos", path: "/operadores/turnos" },
				{ text: "Pausas", path: "/operadores/pausas" },
				{ text: "Metas", path: "/operadores/metas" },
				{ text: "Vendas", path: "/operadores/vendas" },
			],
		},
	},
	{
		id: 3,
		icon: <FaBullhorn />,
		text: "Campanhas",
		path: "/campanhas",
		subMenu: {
			options: [
				{ text: "Unidades", path: "/campanhas/unidades" },
				{ text: "Campanhas", path: "/campanhas" },
				{ text: "Resultados", path: "/campanhas/resultados" },
				{ text: "Ordem", path: "/campanhas/ordem" },
			],
		},
	},
	{
		id: 4,
		icon: <FaGear />,
		text: "Outros Cadastros",
		path: "/outros",
		subMenu: {
			options: [
				{ text: "Exceções", path: "/outros/excecoes/clientes" },
				{ text: "Cidades", path: "/outros/cidades" },
				{ text: "Estados", path: "/outros/estados" },
			],
		},
	},
	{
		id: 5,
		icon: <FaDesktop />,
		text: "Monitor",
		path: "/monitor",
		subMenu: {
			options: [
				{ text: "Agenda", path: "/monitor/agenda" },
				{ text: "Pausas realizadas", path: "/monitor/pausas_realizadas" },
				{ text: "Chamadas recebidas", path: "/monitor/chamadas_recebidas" },
				{ text: "Recompra a expirar", path: "/monitor/recompra_a_expirar" },
				{ text: "Fila de atendimento", path: "/monitor/fila_de_atendimento" },
				{ text: "Clientes a bloquear", path: "/monitor/clientes_a_bloquear" },
			],
		},
	},
	{
		id: 6,
		icon: <FaToolbox />,
		text: "Ferramentas",
		path: "/ferramentas",
		subMenu: {
			options: [
				{ text: "Importador", path: "/ferramentas/importador" },
				{ text: "Configurações", path: "/ferramentas/configuracoes" },
				{ text: "Rotinas", path: "/ferramentas/rotinas" },
				{ text: "Funcionalidades Telefonicas", path: "/ferramentas/funcionalidades_telefonicas" },
				{ text: "Exportar alterações nos clientes", path: "/ferramentas/exportar_alteracoes_nos_clientes" },
				{ text: "Transferências de clientes", path: "/ferramentas/funcionalidades_telefonicas" },
			],
		},
	},
	{
		id: 7,
		icon: <FaChartArea />,
		text: "Relatórios",
		path: "/relatorios",
		subMenu: {
			options: [
				{ text: "Construtor de relatórios", path: "/relatorios/construtor" },
				{ text: "Análise de mailing", path: "/relatorios/analise_de_mailing" },
				{ text: "Bilhetagem", path: "/relatorios/bilhetagem" },
				{ text: "Curva ABC de ligações", path: "/relatorios/curva_abc_de_ligacoes" },
				{ text: "Produtividade", path: "/relatorios/produtividade" },
				{ text: "Propostas", path: "/relatorios/propostas" },
				{ text: "Ordem das ligações", path: "/relatorios/ordem_das_ligacoes" },
				{ text: "Pesquisa de satisfação", path: "/relatorios/pesquisa_de_satisfacao" },
				{ text: "Régua por carteira", path: "/relatorios/regua_por_carteira" },
				{ text: "Pausas realizadas", path: "/relatorios/pausas_realizadas" },
				{ text: "Análise de campanhas", path: "/relatorios/analise_de_campanhas" },
			],
		},
	},
];

export default menuOptions;
