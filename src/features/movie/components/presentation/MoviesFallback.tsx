import styles from "./MoviesFallback.module.scss";

export type Props = {
	message: string;
	large?: boolean;
};

export function MoviesFallback({ message, large = false }: Props) {
	const className = large
		? `${styles.MoviesFallback} ${styles["MoviesFallback-large"]}`
		: styles.MoviesFallback;

	console.log(`large: ${large}`);
	console.log(`className: ${className}`);

	return (
		<div className={className}>
			<p>{message}</p>
		</div>
	);
}
