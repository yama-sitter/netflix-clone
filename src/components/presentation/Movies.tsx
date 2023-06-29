import { Movie } from "../../types";

export type Props = {
	title: string;
	movies: Movie[];
	isLargeRow?: string;
};

export function Movies({ title, movies }: Props) {
	// console.log(movies);
	return <div className="Row" />;
}
