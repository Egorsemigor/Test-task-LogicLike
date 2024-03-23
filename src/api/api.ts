import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

class Api {
  private instance: AxiosInstance;
  private server_url = "https://logiclike.com/docs";

  constructor() {
    this.instance = axios.create({
      baseURL: this.server_url,
      timeout: 15000,
    });
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleError(error: AxiosError): Promise<never> {
    if (error.response) {
      // Ошибка пришла с ответом (например, статус код не в диапазоне 2xx)
      console.error("Request error => :", error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Запрос был сделан, но нет ответа (например, нет интернет-соединения)
      // console.error('No response received:', error.request);
      return Promise.reject("No response received");
    } else {
      // Произошла ошибка при настройке запроса (например, неверный URL)
      // console.error('Request setup error:', error.message);
      return Promise.reject(error.message);
    }
  }

  public async get<T>(url: string): Promise<T> {
    try {
      const response = await this.instance.get<T>(url);
      return this.handleResponse(response);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  public async post<T>(url: string, data?: any): Promise<T> {
    try {
      const response = await this.instance.post<T>(url, data);
      return this.handleResponse(response);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  public async put<T>(url: string, data?: any): Promise<T> {
    try {
      const response = await this.instance.put<T>(url, data);
      return this.handleResponse(response);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  public async patch<T>(url: string, data?: any): Promise<T> {
    try {
      const response = await this.instance.patch<T>(url, data);
      return this.handleResponse(response);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  public async delete(url: string): Promise<void> {
    try {
      await this.instance.delete(url);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
}

export default new Api();
