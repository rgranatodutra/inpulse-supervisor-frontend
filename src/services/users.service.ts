import axios from "axios";

const currentRoute = window.location.hostname.split(".")[0];

class Services {
	public static readonly users = axios.create({ baseURL: import.meta.env.VITE_USERS_URL + `/${currentRoute}` });
	public static readonly customers = axios.create({ baseURL: import.meta.env.VITE_CUSTOMERS_URL + `/${currentRoute}` });
	public static readonly monitoring = axios.create({
		baseURL: import.meta.env.VITE_MONITORING_URL + `/${currentRoute}`,
	});
	public static readonly campaigns = axios.create({ baseURL: import.meta.env.VITE_CAMPAIGNS_URL + `/${currentRoute}` });
	public static readonly tools = axios.create({ baseURL: import.meta.env.VITE_TOOLS_URL + `/${currentRoute}` });
}

export default Services;
