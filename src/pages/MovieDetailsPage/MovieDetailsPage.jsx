import { Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Layout } from './MovieDetailsPage.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import { useRequest } from 'hooks/useRequest';
import { searchMoviesDetails } from 'services/api';
import { BackToLink } from 'components/BackToLink/BackToLink';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, error, isLoading] = useRequest(searchMoviesDetails, movieId);

  const location = useLocation();
  const backToLinkHref = location.state?.from ?? '/movies';
  return (
    <main>
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {movie && (
        <Layout>
          <BackToLink to={backToLinkHref}>Go back</BackToLink>
          <MovieInfo movie={movie} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Layout>
      )}
    </main>
  );
};

export default MovieDetails;
