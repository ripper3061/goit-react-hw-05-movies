import { useParams } from 'react-router-dom';
import {
  Layout,
  ReviewList,
  ReviewItem,
  ReviewAvtor,
} from './MovieReviews.styled';
import { useRequest } from 'hooks/useRequest';
import { searchMovieReviews } from 'services/api';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, error] = useRequest(searchMovieReviews, movieId);

  return (
    <Layout>
      {error && <p>{error}</p>}
      {movieReviews?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {movieReviews?.length > 0 && (
        <ReviewList>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAvtor>Author: {author}</ReviewAvtor>
                <p>{content}</p>
              </ReviewItem>
            );
          })}
        </ReviewList>
      )}
    </Layout>
  );
};

export default MovieReviews;
