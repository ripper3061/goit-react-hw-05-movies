import HeaderPage from 'pages/HeaderPage';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderPage />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<p>One Movie</p>}>
          <Route path="cast" element={<p>One Movie Cast</p>} />
          <Route path="reviews" element={<p>One Movie Review</p>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
