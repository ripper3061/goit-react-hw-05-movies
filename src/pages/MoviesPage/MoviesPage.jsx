import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useRequest } from 'hooks/useRequest';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByQuery } from 'services/api';
import { Layout } from './MoviesPage.styled';
import { Loader } from 'components/Loader/Loader';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  const [movies, error, isLoading] = useRequest(searchMoviesByQuery, query);

  return (
    <Layout>
      <SearchForm onSubmit={handleSubmit} />
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {movies?.length === 0 && <p>We didn't find any movie for this query.</p>}
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </Layout>
  );
};

export default MoviesPage;
