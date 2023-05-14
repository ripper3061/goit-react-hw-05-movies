import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink ink to="/">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};

export default Header;
