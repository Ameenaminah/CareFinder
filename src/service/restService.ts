import axios, { AxiosResponse } from "axios";

export interface IRestService {
  get<TResponse>(
    url: string,
    headers?: Record<string, string>
  ): Promise<TResponse | null>;

  post<TResponse, TData>(
    url: string,
    data: TData,
    headers?: Record<string, string>
  ): Promise<TResponse | null>;

  put<TResponse, TData>(
    url: string,
    data: TData,
    headers?: Record<string, string>
  ): Promise<TResponse>;

  delete(url: string, headers?: Record<string, string>): Promise<AxiosResponse>;

  
}

export class RestService implements IRestService {
  constructor(private readonly baseUrl: string) {}

  async get<TResponse>(
    url: string,
    headers: Record<string, string>
  ): Promise<TResponse> {
    try {
      const fullUrl = this.getFullUrl(url);

      const response = await axios.get<TResponse>(fullUrl, { headers });

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async post<TResponse, TData>(
    url: string,
    data: TData,
    headers: Record<string, string>
  ): Promise<TResponse> {
    try {
      const fullUrl = this.getFullUrl(url);

      const response = await axios.post<TResponse>(fullUrl, data, { headers });

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async put<TResponse, TData>(
    url: string,
    data: TData,
    headers: Record<string, string>
  ): Promise<TResponse> {
    try {
      const fullUrl = this.getFullUrl(url);

      const response = await axios.put<TResponse>(fullUrl, data, { headers });

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(
    url: string,
    headers?: Record<string, string>
  ): Promise<AxiosResponse> {
    try {
      const fullUrl = this.getFullUrl(url);
      const response = await axios.delete(fullUrl, { headers });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private getFullUrl(url: string): string {
    return `${this.baseUrl}${url}`;
  }

  // async request(
  //   method: string,
  //   url: string,
  //   data: any,
  //   headers: Record<string, string> = {}
  // ): Promise<AxiosResponse> {
  //   const fullUrl = `${this.baseUrl}${url}`;
  //   return axios.request({
  //     method,
  //     url: fullUrl,
  //     data,
  //     headers,
  //   } as AxiosRequestConfig);
  // }
}
