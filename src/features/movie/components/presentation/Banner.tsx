import { MoviesResource, Movie } from "../../types";
import { TMDB_IMAGE_BASE_URL } from "../../../../config";
import styles from "./Banner.module.scss";
import { truncate } from "../../../../lib/truncate";

export type Props = {
  resource: MoviesResource;
};

function getRandomly(movies: Movie[]): Movie {
  const index = Math.floor(Math.random() * movies.length - 1);
  return movies[index];
}

export function Banner({ resource }: Props) {
  const movies = resource.read();
  const movie = getRandomly(movies);

  const imagePath = `${TMDB_IMAGE_BASE_URL}${movie.backdropPath}`;
  const title = movie.title || movie.name || movie.originalName;
  const overview = truncate(movie.overview, 150);

  return (
    <header
      className={styles.Banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${imagePath}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles["Banner-contents"]}>
        <h1 className={styles["Banner-title"]}>{title}</h1>
        <div className={styles["Banner-buttons"]}>
          <button className={styles["Banner-button"]}>Play</button>
          <button className={styles["Banner-button"]}>My List</button>
        </div>
        <p className={styles["Banner-description"]}>{overview}</p>
      </div>
      <div className={styles["Banner-fadeBottom"]} />
    </header>
  );
}
