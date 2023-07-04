import { Suspense, PropsWithChildren } from "react";
import { Movies as PresentationalMovies } from "../presentation/Movies";
import * as api from "../../api";
import type { MoviesResource } from "../../types";

const netflixOriginalMoviesResource = api.fetchNetflixOriginalMovies();
const trendMoviesResource = api.fetchTrendMovies();
const topRatedMoviesResource = api.fetchTopRatedMovies();
const actionMoviesResource = api.fetchActionMovies();
const comedyMoviesResource = api.fetchComedyMovies();
const horrorMoviesResource = api.fetchHorrorMovies();
const romanceMoviesResource = api.fetchRomanceMovies();
const documentMoviesResource = api.fetchDocumentMovies();

function MoviesWrapper({ children }: PropsWithChildren) {
	return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
}

function renderMovies(title: string, resource: MoviesResource) {
	return (
		<MoviesWrapper>
			<PresentationalMovies title={title} resource={resource} />
		</MoviesWrapper>
	);
}

export function NetflixOriginalMovies() {
	return renderMovies("Netflix Original Movies", netflixOriginalMoviesResource);
}

function TrendMovies() {
	return renderMovies("Trend Movies", trendMoviesResource);
}
function TopRatedMovies() {
	return renderMovies("Top Rated Movies", topRatedMoviesResource);
}
function ActionMovies() {
	return renderMovies("Action Movies", actionMoviesResource);
}
function ComedyMovies() {
	return renderMovies("Comedy Movies", comedyMoviesResource);
}
function HorrorMovies() {
	return renderMovies("Horror Movies", horrorMoviesResource);
}
function RomanceMovies() {
	return renderMovies("Romance Movies", romanceMoviesResource);
}
function DocumentMovies() {
	return renderMovies("Document Movies", documentMoviesResource);
}

const movieTypes = {
	"netflix-original": <NetflixOriginalMovies />,
	trend: <TrendMovies />,
	"top-rated": <TopRatedMovies />,
	action: <ActionMovies />,
	comedy: <ComedyMovies />,
	horror: <HorrorMovies />,
	romance: <RomanceMovies />,
	document: <DocumentMovies />,
} as const;

export type Type = keyof typeof movieTypes;
export type Props = {
	type: Type;
};

export function Movies({ type }: Props) {
	return movieTypes[type];
}
