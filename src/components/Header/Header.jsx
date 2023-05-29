import { Suspense } from 'react';
import { HeaderLayout, Layout, Link } from './Header.styled';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <Layout>
      <HeaderLayout>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderLayout>
      <Suspense fallback={'Loader'}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
