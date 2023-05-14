import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <ul>
      {[
        'Film - 1',
        'Film - 2',
        'Film - 3',
        'Film - 4',
        'Film - 5',
        'Film - 6',
      ].map(film => {
        return (
          <li key={film}>
            <Link to="/movies/:movieId">{`${film}`}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
