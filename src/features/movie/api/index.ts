import { TMDB_API_KEY, TMDB_API_BASE_URL } from "../../../config";
import { createClient, Params as APIParams } from "../../../lib/api";
import { MovieResponse, MovieResponseRow, MoviesResource } from "../types";
import { Loadable } from "../../../lib/loadable";

type Params = {
	api_key?: string;
} & APIParams;

const client = createClient({
	baseURL: TMDB_API_BASE_URL,
});
const defaultParams: Params = {
	api_key: TMDB_API_KEY,
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

function fetchMovies(path: string, params: Params = {}): MoviesResource {
	const promise = client
		.get<MovieResponse>(path, {
			params: {
				...defaultParams,
				...params,
			},
		})
		.then(({ data }) => data.results.map(convertResultToMovie));
	return new Loadable(promise);
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
