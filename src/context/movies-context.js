import React from "react";

export default React.createContext({
  isLoading: false,
  keyword: "",
  year: 0,
  results: [],
  page: 0,
  totalCount: 0,
  totalPages: 0,
  genreOptions: [],
  ratingOptions: [],
  languageOptions: [],
  fetchGenres: () => {},
  fetchMovies: (page) => {},
  changePage: (page) => {},
  setKeyword: (word) => {},
  setYear: (year) => {},
});
