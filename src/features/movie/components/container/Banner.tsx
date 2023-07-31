import { Banner as PresentationalBanner } from '../presentation/Banner'
import { fetchNetflixOriginalMovies } from '../../api';

const resource = fetchNetflixOriginalMovies();

export function Banner() {
  return <PresentationalBanner resource={resource} />
}
