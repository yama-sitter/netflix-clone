import { Loadable } from "./lib/loadable";

type SnakeToCamelCase<T extends string> = T extends `${infer R}_${infer U}`
	? `${R}${Capitalize<SnakeToCamelCase<U>>}`
	: T;
type SnakeToCamel<T extends object> = {
	[K in keyof T as `${SnakeToCamelCase<string & K>}`]: T[K] extends object
		? SnakeToCamel<T[K]>
		: T[K];
};

export type Response<T> = {
	page: number;
	results: T;
};

export type MovieResponseRow = {
	id: string;
	name: string;
	title: string;
	original_name: string;
	poster_path: string;
	backdrop_path: string;
};
export type MovieResponse = Response<MovieResponseRow[]>;
export type Movie = SnakeToCamel<MovieResponseRow>;

export type MoviesResource = Loadable<Movie[]>;
