import { useQuery } from "@tanstack/react-query";

// doc https://developers.themoviedb.org/3/trending/get-trending
// https://www.themoviedb.org/documentation/api/discover

const API = process.env.NEXT_PUBLIC_THE_MOVIE_DB_API;
const URL = `https://api.themoviedb.org/3`;

export const fetchDataTrendingWeek = async () => {
  const response = await fetch(`${URL}/trending/all/week?api_key=${API}`);
  return response.json();
};

export const fetchDataTrendingDay = async () => {
  const response = await fetch(`${URL}/trending/all/day?api_key=${API}`);
  return response.json();
};

export const fetchDataTheatres = async () => {
  const response = await fetch(
    `${URL}/discover/movie?api_key=${API}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  );
  return response.json();
};

export const fetchDataMorePopularMovies = async () => {
  const response = await fetch(
    `${URL}/discover/movie?api_key=${API}&language=es&sort_by=popularity.desc`,
  );
  return response.json();
};

export const fetchDataHighestRatedMovies = async () => {
  const response = await fetch(
    `${URL}/discover/movie?api_key=${API}&certification_country=US&certification=R&sort_by=vote_average.desc`,
  );
  return response.json();
};

export const fetchDataMorePopularTv = async () => {
  const response = await fetch(
    `${URL}/discover/tv?api_key=${API}&language=es&sort_by=popularity.desc`,
  );
  return response.json();
};

export const fetchDataHighestRatedTv = async () => {
  const response = await fetch(
    `${URL}/discover/tv?api_key=${API}&certification_country=US&certification=R&sort_by=vote_average.desc`,
  );
  return response.json();
};

export const fetchDataMovie = async (id: string) => {
  const response = await fetch(`${URL}/movie/${id}?api_key=${API}`);
  const data = await response.json();
  return data;
};

export const fetchDataMovieCredits = async (id: string) => {
  const response = await fetch(`${URL}/movie/${id}/credits?api_key=${API}`);
  const data = await response.json();
  return data;
};

export const fetchDataPerson = async (id: string) => {
  const response = await fetch(`${URL}/person/${id}?api_key=${API}`);
  const data = await response.json();
  return data;
};

const UseReactQuery = (id: string, fetch: any) => {
  const { isLoading, isError, data, error } = useQuery([id], fetch, {
    staleTime: 60000 * 60, // 1 hora de caché
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default UseReactQuery;
