import axios, { AxiosRequestHeaders } from "axios";

export interface IRestService {
	get<TResponse>(
		endpoint: string,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse | null>;

	post<TResponse, TData>(
		endpoint: string,
		data: TData,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse | null>;

	put<TResponse, TData>(
		endpoint: string,
		data: TData,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse>;

	delete(endpoint: string, additionalHeaders?: AxiosRequestHeaders): Promise<void>;
}

export class RestService implements IRestService {
	constructor(private readonly baseUrl: string) {}

	async get<TResponse>(
		endpoint: string,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse> {
		try {
			const url = this.getUrl(endpoint);

			const response = await axios.get<TResponse>(url, {
				headers: additionalHeaders,
			});

			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async post<TResponse, TData>(
		endpoint: string,
		data: TData,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse> {
		try {
			const url = this.getUrl(endpoint);

			const response = await axios.post<TResponse>(url, data, {
				headers: additionalHeaders,
			});

			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async put<TResponse, TData>(
		endpoint: string,
		data: TData,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse> {
		try {
			const url = this.getUrl(endpoint);

			const response = await axios.put<TResponse>(url, data, {
				headers: additionalHeaders,
			});

			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async delete(endpoint: string, additionalHeaders?: AxiosRequestHeaders): Promise<void> {
		try {
			const url = this.getUrl(endpoint);
			const response = await axios.delete(url, { headers: additionalHeaders });
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	private getUrl(url: string): string {
		return `${this.baseUrl}${url}`;
	}
}
