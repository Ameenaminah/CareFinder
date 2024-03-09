import { AxiosHeaders, AxiosRequestHeaders } from "axios";
import { RestService } from "./restService";
import { store } from "../state/store";

export class AuthorizedRestService extends RestService {
  constructor() {
    super("http://localhost:5026/api");
  }

  async get<TResponse>(
    endpoint: string,
    additionalHeaders?: AxiosRequestHeaders
  ): Promise<TResponse> {
    // const authorizationHeaderToken = await this.getAuthorizationHeaderToken();
    // if (!authorizationHeaderToken) {
    //   return null;
    // }

    // additionalHeaders = this.getDefaultHeaders(
    //   authorizationHeaderToken,
    //   additionalHeaders
    // );

    // return await super.get(endpoint, additionalHeaders);
    try {
      const authorizationHeaderToken = await this.getAuthorizationHeaderToken();

      additionalHeaders = this.getDefaultHeaders(
        authorizationHeaderToken,
        additionalHeaders
      );

      return await super.get(endpoint, additionalHeaders);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async post<TResponse, TData>(
    endpoint: string,
    data: TData,
    additionalHeaders?: AxiosRequestHeaders
  ): Promise<TResponse> {
    // const authorizationHeaderToken = await this.getAuthorizationHeaderToken();
    // if (!authorizationHeaderToken) {
    //   return null;
    // }

    // additionalHeaders = this.getDefaultHeaders(
    //   authorizationHeaderToken,
    //   additionalHeaders
    // );

    // return await super.post(endpoint, data, additionalHeaders);

    try {
      const authorizationHeaderToken = await this.getAuthorizationHeaderToken();

      additionalHeaders = this.getDefaultHeaders(
        authorizationHeaderToken,
        additionalHeaders
      );

      return await super.post(endpoint, data, additionalHeaders);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async put<TResponse, TData>(
    endpoint: string,
    data: TData,
    additionalHeaders?: AxiosRequestHeaders
  ): Promise<TResponse> {
    // const authorizationHeaderToken = await this.getAuthorizationHeaderToken();
    // if (!authorizationHeaderToken) {
    //   return null;
    // }

    // additionalHeaders = this.getDefaultHeaders(
    //   authorizationHeaderToken,
    //   additionalHeaders
    // );

    // return await super.put(endpoint, data, additionalHeaders);

    try {
      const authorizationHeaderToken = await this.getAuthorizationHeaderToken();

      additionalHeaders = this.getDefaultHeaders(
        authorizationHeaderToken,
        additionalHeaders
      );

      return await super.put(endpoint, data, additionalHeaders);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(
    endpoint: string,
    additionalHeaders?: AxiosRequestHeaders
  ): Promise<void> {
    const authorizationHeaderToken = await this.getAuthorizationHeaderToken();
    if (!authorizationHeaderToken) {
      return;
    }

    additionalHeaders = this.getDefaultHeaders(
      authorizationHeaderToken,
      additionalHeaders
    );

    return await super.delete(endpoint, additionalHeaders);
  }

  private getDefaultHeaders(
    authorizationHeaderToken: string | null,
    additionalHeaders?: AxiosRequestHeaders
  ): AxiosRequestHeaders {
    additionalHeaders ??= new AxiosHeaders();

    additionalHeaders.Authorization = authorizationHeaderToken;
    additionalHeaders.Accept = "application/json";

    return additionalHeaders;
  }

  private async getAuthorizationHeaderToken(): Promise<string | null> {
    const token = await store.getState()?.user?.value.token;
    if (!token) {
      return null;
    }

    return "Bearer " + token;
  }
}
