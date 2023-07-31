import { Suspense, PropsWithChildren } from "react";
import { ErrorBoundary } from "../../../../components/ErrorBoundary";
import { MoviesFallback } from "./MoviesFallback";
import styles from "./MoviesLayout.module.scss";

export type Props = {
  title: string;
  large?: boolean;
};

export function MoviesLayout({
  title,
  large,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={styles.MoviesLayout}>
      <h2>{title}</h2>
      <ErrorBoundary
        fallback={<MoviesFallback message="No data." large={large} />}
      >
        <Suspense
          fallback={<MoviesFallback message="Loading..." large={large} />}
        >
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
