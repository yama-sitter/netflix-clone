import { Suspense } from "react";
import { Banner as PresentationalBanner } from "../presentation/Banner";
import { BannerFallback } from "../presentation/BannerFallback";
import { fetchNetflixOriginalMovies } from "../../api";

const resource = fetchNetflixOriginalMovies();

export function Banner() {
  return (
    <Suspense fallback={<BannerFallback />}>
      <PresentationalBanner resource={resource} />
    </Suspense>
  );
}
