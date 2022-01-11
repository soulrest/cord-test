import React, { useContext } from "react";
import styled from "styled-components";

import MovieContext from "../../context/movies-context";
import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

const Discover = () => {
  const ctx = useContext(MovieContext);

  // Write a function to preload the popular movies when page loads & get the movie genres
  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>
      {/* MobilePageTitle should become visible on small screens & mobile devices*/}
      <MovieFilters>
        <SearchFilters
          setKeyword={ctx.setKeyword}
          setYear={ctx.setYear}
          genres={ctx.genreOptions}
          ratings={ctx.ratingOptions}
          languages={ctx.languageOptions}
        />
      </MovieFilters>
      <MovieResults>
        {!ctx.isLoading && ctx.totalCount > 0 && (
          <TotalCounter>{ctx.totalCount} movies</TotalCounter>
        )}
        <MovieList
          isLoading={ctx.isLoading}
          movies={ctx.results}
          totalCount={ctx.totalCount}
          page={ctx.page}
          changePage={ctx.changePage}
          totalPages={ctx.totalPages}
        />
      </MovieResults>
    </DiscoverWrapper>
  );
};

const DiscoverWrapper = styled.main`
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 15px;
  padding: 0 45px 20px 45px;
  @media ${(props) => props.theme.media.phone} {
    display: block;
    padding: 0 25px;
  }
`;

const TotalCounter = styled.div`
  font-size: 14px;
  font-weight: 100;
  @media ${(props) => props.theme.media.phone} {
    display: block;
    margin-top: 80px;
  }
`;

const MovieResults = styled.div`
  grid-column: 1;
  grid-row: 1;
  @media ${(props) => props.theme.media.phone} {
  }
`;

const MovieFilters = styled.div`
  padding-top: 33px;
  grid-column: 2;
  grid-row: 1;
  @media ${(props) => props.theme.media.phone} {
    padding-top: 0;
  }
`;

const MobilePageTitle = styled.header`
  font-weight: 400;
  font-size: 26px;
  position: absolute;
  top: 15px;
  left: 80px;
  color: black;
  @media ${(props) => props.theme.media.laptop} {
    display: none;
  }
`;

export default Discover;
