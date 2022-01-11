import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import MovieContext from "./context/movies-context";
import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";

let isInitial = true;

const App = (props) => {
  const {
    fetchMovies,
    fetchGenres,
    page,
    year,
    keyword,
    genreOptions: genres,
  } = useContext(MovieContext);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      fetchGenres();
    }
    fetchMovies(page);
  }, [fetchGenres, fetchMovies, page, genres, year, keyword]);

  return (
    <Router>
      <PageContainer>
        <SideNavBar {...props} />
        <ContentWrapper>
          <Switch>
            <Route path="/discover" component={Discover} {...props} />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
};

const ContentWrapper = styled.main`
  padding-left: 260px;
  margin-top: 50px;
  @media ${(props) => props.theme.media.phone} {
    padding-left: 0;
  }
`;

const PageContainer = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  height: 100vh;
`;

export default App;
