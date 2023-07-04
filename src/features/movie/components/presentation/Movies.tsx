import { MoviesResource } from "../../types";
import { Poster } from "./Poster";
import styles from "./Movies.module.scss";

export type Props = {
	title: string;
	resource: MoviesResource;
	large?: boolean;
};

export function Movies({ title, resource, large = false }: Props) {
	const movies = resource.getOrThrow();

	if (movies.length === 0) {
		return null;
	}

	return (
		<div className={styles.Movies}>
			<h2>{title}</h2>
			<div className={styles["Movies-posters"]}>
				{movies.map((movie) => (
					<Poster key={movie.id} movie={movie} large={large} />
				))}
			</div>
		</div>
	);
}
