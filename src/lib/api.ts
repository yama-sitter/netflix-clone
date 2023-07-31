import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig } from "axios";

export type Params = AxiosRequestConfig["params"];

export class FetchError extends Error {
  static {
    this.prototype.name = "FetchError";
  }
}

export function createClient({ baseURL }: { baseURL: string }) {
  const client = axios.create({
    baseURL,
  });

  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      Promise.reject(new FetchError(error.message));
    },
  );

  return client;
}
