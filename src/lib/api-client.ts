import axios, { AxiosError } from "axios";
export type { AxiosRequestConfig as Config } from "axios";

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
		function (response) {
			return response;
		},
		function (error: AxiosError) {
			Promise.reject(new FetchError(error.message));
		},
	);

	return client;
}
