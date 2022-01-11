export const ADD_MOVIES = "ADD_POPULAR_MOVIES";
export const ADD_GENRES = "ADD_GENRES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const SET_PAGE = "SET_PAGE";
export const SET_KEYWORD = "SET_KEYWORD";
export const SET_YEAR = "SET_YEAR";
export const SET_LOADING = "SET_LOADING";

const addMovies = ({ movies, totalResults, page, totalPages }, state) => {
  const genres = [...state.genreOptions];
  const updatedMovies = movies.map((movie) => {
    let updatedGenres;
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null;
    const updatedOverview =
      movie.overview.length > 800
        ? `${movie.overview.split(" ").slice(0, 55).join(" ")}...`
        : movie.overview;
    if (genres.length > 0)
      updatedGenres = movie.genre_ids.map(
        (genre) => genres.find((el) => el.id === genre).name
      );
    return {
      genres: updatedGenres || movie.genre_ids,
      id: movie.id,
      title: movie.title,
      overview: updatedOverview,
      vote: movie.vote_average,
      releaseDate: movie.release_date,
      poster,
    };
  });
  // {"errors":["page must be less than or equal to 500"]}.
  // But API shows around 31833 pages of popular movies
  return {
    ...state,
    results: updatedMovies,
    totalCount: totalResults,
    totalPages: totalPages <= 500 ? totalPages : 500,
    page,
  };
};

const addSearchParam = ({ keyword, year }, state) => {
  if (year !== state.year && year !== undefined)
    return { ...state, page: 1, year };
  if (keyword !== state.keyword && keyword !== undefined)
    return { ...state, page: 1, keyword };
  return {
    ...state,
    keyword: keyword || state.keyword,
    year: year || state.year,
  };
};

export const movieReducer = (state, action) => {
  let { page, totalPages } = state;
  switch (action.type) {
    case ADD_MOVIES:
      return addMovies(action, state);
    case ADD_GENRES:
      return { ...state, genreOptions: action.genres };
    case NEXT_PAGE:
      if (page < totalPages) page++;
      return { ...state, page };
    case PREV_PAGE:
      if (page > 1) page--;
      return { ...state, page };
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_KEYWORD:
      return addSearchParam(action, state);
    case SET_YEAR:
      return addSearchParam(action, state);
    case SET_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};
