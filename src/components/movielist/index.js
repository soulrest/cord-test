import styled from "styled-components";

import MovieItem from "../movieitem";
import Pagination from "../pagination";
import LoadingSpinner from "../loadingspinner";

const MovieList = (props) => {
  const { movies, totalCount, page, changePage, totalPages, isLoading } = props;
  const PageSize = movies.length;

  return (
    <MoviesWrapper>
      {/* Finish the MovieItem component and use it here to display the movie results */}
      {isLoading && <LoadingSpinner />}
      {!isLoading &&
        movies.map((movie) => (
          <MovieItem
            id={movie.id}
            key={movie.id}
            title={movie.title}
            genres={movie.genres}
            overview={movie.overview}
            image={movie.poster}
            releaseDate={movie.releaseDate}
            vote={movie.vote}
          />
        ))}
      {!isLoading && (
        <Pagination
          currentPage={page}
          totalCount={totalCount}
          pageSize={PageSize}
          changePage={changePage}
          totalPages={totalPages}
        />
      )}
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  position: relative;
`;

export default MovieList;
