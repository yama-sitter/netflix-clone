import { useState, useEffect } from "react";
import * as api from "../lib/api";
import { Movie } from "../types";

function useMovies(fetcher: () => Promise<Movie[]>) {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		(async () => {
			// TODO: handle error
			const movies = await fetcher();
			setMovies(movies);
		})();
	}, [fetcher]);

	return movies;
}

export type UseMoviesFn = () => ReturnType<typeof useMovies>;

export function useNetflixOriginalMovies() {
	return useMovies(api.fetchNetflixOriginalMovies);
}
export function useTrendMovies() {
	return useMovies(api.fetchTrendMovies);
}
export function useTopRatedMovies() {
	return useMovies(api.fetchTopRatedMovies);
}
export function useActionMovies() {
	return useMovies(api.fetchActionMovies);
}
export function useComedyMovies() {
	return useMovies(api.fetchComedyMovies);
}
export function useHorrorMovies() {
	return useMovies(api.fetchHorrorMovies);
}
export function useRomanceMovies() {
	return useMovies(api.fetchRomanceMovies);
}
export function useDocumentMovies() {
	return useMovies(api.fetchDocumentMovies);
}
