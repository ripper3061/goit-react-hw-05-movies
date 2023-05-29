import { Link, useLocation } from 'react-router-dom';
import { Layout, InfoTitle, InfoList } from './AditionalMovieNav.styled';

export const AditionalMovieNav = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <Layout>
      <InfoTitle>Additional information</InfoTitle>
      <InfoList>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </InfoList>
    </Layout>
  );
};
