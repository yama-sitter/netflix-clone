import { SnakeToCamel } from "../../../types";
import type { Resource } from "../../../lib/resource";

export type APIResponse<T> = {
  page: number;
  results: T;
};

export type MovieResponseRow = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path?: string;
  overview: string;
};
export type MovieResponse = APIResponse<MovieResponseRow[]>;
export type Movie = SnakeToCamel<MovieResponseRow>;

export type MoviesResource = Resource<Movie[]>;
