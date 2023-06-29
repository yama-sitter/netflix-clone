import { Movies as PresentationalMovies } from "../presentation/Movies";
import * as hooks from "../../hooks/useMovies";
import type { UseMoviesFn } from "../../hooks/useMovies";

function renderMovies(title: string, useMoviesFn: UseMoviesFn) {
	const movies = useMoviesFn();
	return <PresentationalMovies title={title} movies={movies} />;
}

function NetflixOriginalMovies() {
	return renderMovies(
		"Netflix Original Movies",
		hooks.useNetflixOriginalMovies,
	);
}
function TrendMovies() {
	return renderMovies("Trend Movies", hooks.useTrendMovies);
}
function TopRatedMovies() {
	return renderMovies("Top Rated Movies", hooks.useTopRatedMovies);
}
function ActionMovies() {
	return renderMovies("Action Movies", hooks.useActionMovies);
}
function ComedyMovies() {
	return renderMovies("Comedy Movies", hooks.useComedyMovies);
}
function HorrorMovies() {
	return renderMovies("Horror Movies", hooks.useHorrorMovies);
}
function RomanceMovies() {
	return renderMovies("Romance Movies", hooks.useRomanceMovies);
}
function DocumentMovies() {
	return renderMovies("Document Movies", hooks.useDocumentMovies);
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
