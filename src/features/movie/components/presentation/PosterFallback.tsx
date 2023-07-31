import styles from "./Poster.module.scss";

export type Props = {
  large: boolean;
};

export function PosterFallback({ large }: { large: boolean }) {
  const className = large
    ? `${styles.Poster} ${styles["Poster-large"]}`
    : styles.Poster;
  const source = large
    ? "https://dummyimage.com/177x250/cccccc/000000.jpg&text=loading..."
    : "https://dummyimage.com/141x100/cccccc/000000.jpg&text=loading...";

  return <img className={className} src={source} alt="loading" />;
}
