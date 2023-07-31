import { MoviesResource } from "../../types";
import { Poster } from "./Poster";
import styles from "./Movies.module.scss";

export type Props = {
  resource: MoviesResource;
  large?: boolean;
};

export function Movies({ resource, large = false }: Props) {
  const movies = resource.read();

  if (movies.length === 0) {
    throw new Error("No data available.");
  }

  return (
    <div className={styles.Movies}>
      {movies.map((movie) => (
        <Poster key={movie.id} movie={movie} large={large} />
      ))}
    </div>
  );
}
