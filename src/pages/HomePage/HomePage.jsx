import { MoviesList } from 'components/MoviesList/MoviesList';
import { useRequest } from 'hooks/useRequest';
import { searchPopularMovies } from 'services/api';
import { Layout, Header } from './HomePage.styled';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [movies, error, isLoading] = useRequest(searchPopularMovies);

  return (
    <Layout>
      <Header>Trending today</Header>
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {movies && <MoviesList movies={movies} />}
    </Layout>
  );
};

export default HomePage;
