import { FaBriefcase, FaIdCard, FaTag, FaToggleOn } from "react-icons/fa6";

import { TableColumn } from "../../../../../../components/Table/types";
import { Customer } from "../../../../../../interfaces/Customer.type";
import formatCpfCnpj from "../../../../../../utils/formatCpfCnpj.util";

const customerColumns: Array<TableColumn<Customer>> = [
	{
		key: "CODIGO",
		header: "Código",
		width: 7,
		primarykey: true,
		alignContent: "start",
		filter: {
			section: "Dados do cliente",
			type: "input",
			width: "20rem",
			icon: <FaTag />,
		},
	},
	{
		key: "COD_ERP",
		header: "Código ERP",
		width: 10,
		primarykey: true,
		format: (r) => r.COD_ERP || "N/D",
		filter: {
			section: "Dados do cliente",
			type: "input",
			width: "20rem",
			icon: <FaTag />,
		},
	},
	{
		key: "ATIVO",
		header: "Ativo",
		width: 6,
		format: (r) => (
			<div className={`customer_active_tag ${r.ATIVO === "SIM" ? "active" : "inactive"}`}>
				{r.ATIVO === "SIM" ? "Ativo" : "Inativo"}
			</div>
		),
		filter: {
			section: "Dados do cliente",
			type: "select",
			width: "20rem",
			icon: <FaToggleOn />,
			placeholder: "Status do cliente",
			options: [
				{ name: "Ativo", value: "SIM" },
				{ name: "Inativo", value: "NAO" },
				{ name: "Ambos", value: undefined },
			],
		},
	},
	{
		key: "RAZAO",
		header: "Razão Social",
		width: 20,
		format: (r) => r.RAZAO || "Não definido",
		filter: {
			section: "Dados do cliente",
			type: "input",
			width: "41rem",
			icon: <FaBriefcase />,
		},
	},
	{
		key: "CPF_CNPJ",
		header: "CPF/CNPJ",
		width: 20,
		format: (r) => (r.CPF_CNPJ ? formatCpfCnpj(r.CPF_CNPJ) : "Não definido"),
		filter: {
			section: "Dados do cliente",
			type: "input",
			width: "41rem",
			icon: <FaIdCard />,
			placeholder: "Telefone 1",
		},
	},
];

export default customerColumns;
