import axios from 'axios';

const API_KEY = '28517be34464930944e2079a9d45f661';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const searchPopularMovies = async (params = {}, signal) => {
  console.log(signal);
  const response = await axios.get('trending/movie/day', {
    params: {
      page: 1,
      api_key: API_KEY,
      ...params,
    },
    signal,
  });
  return response.data.results;
};
