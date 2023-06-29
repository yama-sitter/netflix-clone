import axios, { AxiosRequestConfig } from "axios";
import { MovieResponse, MovieResponseRow, Movie } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
	baseURL: BASE_URL,
});

type Params = {
	api_key?: string;
} & AxiosRequestConfig["params"];

const defaultParams: Params = {
	api_key: API_KEY,
};

function convertResultToMovie({
	id,
	name,
	title,
	original_name: originalName,
	poster_path: posterPath,
	backdrop_path: backdropPath,
}: MovieResponseRow) {
	return {
		id,
		name,
		title,
		originalName,
		posterPath,
		backdropPath,
	};
}

async function fetchMovies(
	path: string,
	params: Params = {},
): Promise<Movie[]> {
	const response = await client.get<MovieResponse>(path, {
		params: {
			...defaultParams,
			...params,
		},
	});
	return response.data.results.map(convertResultToMovie);
}

export function fetchNetflixOriginalMovies() {
	return fetchMovies("/discover/tv", {
		with_networks: 213,
	});
}
export function fetchTrendMovies() {
	return fetchMovies("/trending/all/week", {
		language: "en-us",
	});
}
export function fetchTopRatedMovies() {
	return fetchMovies("/discover/tv", {
		language: "en-us",
	});
}
export function fetchActionMovies() {
	return fetchMovies("/discover/tv", {
		with_genres: 28,
	});
}
export function fetchComedyMovies() {
	return fetchMovies("/discover/tv", {
		with_genres: 35,
	});
}
export function fetchHorrorMovies() {
	return fetchMovies("/discover/tv", {
		with_genres: 27,
	});
}
export function fetchRomanceMovies() {
	return fetchMovies("/discover/tv", {
		with_genres: 10749,
	});
}
export function fetchDocumentMovies() {
	return fetchMovies("/discover/tv", {
		with_genres: 99,
	});
}
