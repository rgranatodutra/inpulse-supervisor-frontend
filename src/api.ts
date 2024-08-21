import { RawAxiosRequestHeaders } from "axios";
import { toast } from "react-toastify";
import Services from "./services/users.service";
import { CustomState } from "./utils/customState.hook";

export type ServiceName = "users" | "customers" | "exceptions" | "monitoring" | "campaigns";

type CustomRequestOptions<TResponseData, TRequestData> = {
	method: "get" | "post" | "patch" | "put" | "delete";
	service: ServiceName;
	endpoint: `/${string}`;
	params?: Record<string, any>;
	requestHeaders?: RawAxiosRequestHeaders;
	requestData?: TRequestData;
	onSuccess: (data: TResponseData) => void;
	onError?: (error: any) => void;
	loadingState?: CustomState<boolean>;
	enableToast?: boolean;
	successToastMessage?: string;
};

export type PaginatedResponse<T> = {
	data: T;
	message: string;
	page: {
		current: number;
		next: boolean;
		previous: boolean;
	};
};

async function useCustomRequest<TResponseData, TRequestData>({
	method,
	service,
	endpoint,
	onSuccess,
	onError,
	loadingState,
	requestHeaders,
	params,
	requestData,
	enableToast,
	successToastMessage,
}: CustomRequestOptions<TResponseData, TRequestData>): Promise<void> {
	try {
		loadingState && loadingState.set(true);

		const api = Services[service];
		let response: PaginatedResponse<TResponseData> | any;

		const localToken = localStorage.getItem("@inpulse/auth-token");
		const headers = { Authorization: localToken ? `Bearer ${localToken}` : undefined, ...requestHeaders };

		switch (method) {
			case "post":
				response = await api.post<PaginatedResponse<TResponseData>>(endpoint, requestData, { headers, params });
				break;
			case "patch":
				response = await api.patch<PaginatedResponse<TResponseData>>(endpoint, requestData, { headers, params });
				break;
			case "put":
				response = await api.put<PaginatedResponse<TResponseData>>(endpoint, requestData, { headers, params });
				break;
			case "delete":
				response = await api.delete<PaginatedResponse<TResponseData>>(endpoint, { headers, params });
				break;
			default:
				response = await api.get<PaginatedResponse<TResponseData>>(endpoint, { headers, params });
				break;
		}

		onSuccess(response.data);
		enableToast && successToastMessage && toast.success(successToastMessage);
	} catch (err: any) {
		console.error(err?.response ? err.response.data : err?.message);

		console.log(err.response.data);
		if (err.response.data.errors) {
			toast.error(Object.values(err.response.data.errors[0].constraints)[0] as string);
		}

		enableToast && toast.error(err.response ? err.response.data : err?.message);
		onError && onError(err);
	} finally {
		loadingState && loadingState.set(false);
	}
}

export { useCustomRequest };
