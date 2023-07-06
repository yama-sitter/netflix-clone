import { Suspense } from "react";
import { TMDB_IMAGE_BASE_URL } from "../../../../config";
import { SuspenseImage } from "../../../../components/SuspenseImage";
import { PosterFallback } from "./PosterFallback";
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
		<Suspense fallback={<PosterFallback large={large} />}>
			<SuspenseImage
				className={className}
				src={`${TMDB_IMAGE_BASE_URL}${path}`}
				alt={movie.name}
				loading="lazy"
			/>
		</Suspense>
	);
}
