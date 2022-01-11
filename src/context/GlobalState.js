import React, { useReducer, useCallback } from "react";

import MovieContext from "./movies-context";
import {
  movieReducer,
  ADD_MOVIES,
  ADD_GENRES,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
  SET_KEYWORD,
  SET_YEAR,
  SET_LOADING,
} from "./reducers";

const TMDB_GET_POPULAR_MOVIES_URL =
  process.env.REACT_APP_TMDB_GET_POPULAR_MOVIES_URL;
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
const TMDB_GET_GENRES_LIST_URL = process.env.REACT_APP_TMDB_GET_GENRES_LIST_URL;

const GlobalState = (props) => {
  const [movieState, dispatch] = useReducer(movieReducer, {
    isLoading: false,
    keyword: "",
    year: 0,
    results: [],
    page: 1,
    totalCount: 0,
    totalPages: 0,
    genreOptions: [],
    ratingOptions: [
      { id: 7.5, name: 7.5 },
      { id: 8, name: 8 },
      { id: 8.5, name: 8.5 },
      { id: 9, name: 9 },
      { id: 9.5, name: 9.5 },
      { id: 10, name: 10 },
    ],
    languageOptions: [
      { id: "GR", name: "Greek" },
      { id: "EN", name: "English" },
      { id: "RU", name: "Russian" },
      { id: "PO", name: "Polish" },
    ],
  });

  const fetchMovies = useCallback(
    async (page) => {
      dispatch({ type: SET_LOADING });
      let url = `${TMDB_GET_POPULAR_MOVIES_URL}?api_key=${TMDB_KEY}&language=en=US&page=${page}`;
      if (movieState.keyword) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${movieState.keyword}&page=${page}`;
        if (movieState.year) url += `&year=${movieState.year}`;
      }
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetching movies failed!");
        const data = await res.json();
        dispatch({
          type: ADD_MOVIES,
          movies: data.results,
          totalResults: data.total_results,
          totalPages: data.total_pages,
          page,
        });
      } catch (err) {
        console.error(err);
      }
      dispatch({ type: SET_LOADING });
    },
    [movieState.keyword, movieState.year]
  );

  const fetchGenres = useCallback(async () => {
    try {
      const res = await fetch(
        `${TMDB_GET_GENRES_LIST_URL}?api_key=${TMDB_KEY}`
      );
      if (!res.ok) throw new Error("Fetching genres failed!");
      const data = await res.json();
      dispatch({ type: ADD_GENRES, genres: data.genres });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const changePage = (page) => {
    if (typeof page === "number") dispatch({ type: SET_PAGE, page });
    if (page === "next") dispatch({ type: NEXT_PAGE });
    else if (page === "prev") dispatch({ type: PREV_PAGE });
    else dispatch({ type: NEXT_PAGE });
  };

  const setKeyword = (keyword) => dispatch({ type: SET_KEYWORD, keyword });
  const setYear = (year) => dispatch({ type: SET_YEAR, year });

  return (
    <MovieContext.Provider
      value={{
        ...movieState,
        fetchMovies: fetchMovies,
        fetchGenres: fetchGenres,
        changePage: changePage,
        setKeyword: setKeyword,
        setYear: setYear,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default GlobalState;
