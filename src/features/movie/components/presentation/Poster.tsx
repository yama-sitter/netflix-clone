import { TMDB_IMAGE_BASE_URL } from "../../../../config";
import { Movie } from "../../types";
import styles from "./Poster.module.scss";

export type Props = {
	movie: Movie;
	large?: boolean;
};

export function Poster({ movie, large = false }: Props) {
	const path = large ? movie.posterPath : movie.backdropPath;
	if (path === null) {
		return null;
	}

	const className = large
		? `${styles.Poster} ${styles["Poster-large"]}`
		: styles.Poster;

	return (
		<img
			className={className}
			src={`${TMDB_IMAGE_BASE_URL}${path}`}
			alt={movie.name}
			loading="lazy"
		/>
	);
}
