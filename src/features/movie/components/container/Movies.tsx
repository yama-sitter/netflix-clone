import { Movies as PresentationalMovies } from "../presentation/Movies";
import { MoviesLayout } from "../presentation/MoviesLayout";
import * as api from "../../api";

const netflixOriginalMoviesResource = api.fetchNetflixOriginalMovies();
const trendMoviesResource = api.fetchTrendMovies();
const topRatedMoviesResource = api.fetchTopRatedMovies();
const actionMoviesResource = api.fetchActionMovies();
const comedyMoviesResource = api.fetchComedyMovies();
const horrorMoviesResource = api.fetchHorrorMovies();
const romanceMoviesResource = api.fetchRomanceMovies();
const documentMoviesResource = api.fetchDocumentMovies();

const resourceMap = {
  "netflix-original": {
    title: "Netflix Original Movies",
    resource: netflixOriginalMoviesResource,
  },
  trend: {
    title: "Trend Movies",
    resource: trendMoviesResource,
  },
  "top-rated": {
    title: "Top Rated Movies",
    resource: topRatedMoviesResource,
  },
  action: {
    title: "Action Movies",
    resource: actionMoviesResource,
  },
  comedy: {
    title: "Comedy Movies",
    resource: comedyMoviesResource,
  },
  horror: {
    title: "Horror Movies",
    resource: horrorMoviesResource,
  },
  romance: {
    title: "Romance Movies",
    resource: romanceMoviesResource,
  },
  document: {
    title: "Document Movies",
    resource: documentMoviesResource,
  },
} as const;

export type Type = keyof typeof resourceMap;
export type Props = {
  type: Type;
  large?: boolean;
};

export function Movies({ type, large }: Props) {
  const { title, resource } = resourceMap[type];
  return (
    <MoviesLayout title={title} large={large}>
      <PresentationalMovies resource={resource} large={large} />
    </MoviesLayout>
  );
}
