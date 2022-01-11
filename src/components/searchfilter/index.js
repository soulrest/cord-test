import React from "react";
import styled, { css } from "styled-components";

import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

const SearchFilters = (props) => {
  const { genres, ratings, languages, setKeyword, setYear } = props;

  let timeoutId;

  const handleKeywordChange = (keyword) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setKeyword(keyword), 1500);
  };

  const handleYearChange = (year) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setYear(year), 1500);
  };

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
        <SearchBar
          search
          placeholder="Search for movies"
          searchInputChange={handleKeywordChange}
          fontWeight="700"
        />
        <SearchBar
          className="search_year_input"
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          placeholder="Year of release"
          calendar
          fontWeight="200"
          searchInputChange={handleYearChange}
        />
      </SearchFiltersCont>
      <SearchFiltersCont className="expandable_filters">
        <CategoryTitle>Movies</CategoryTitle>
        {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
        {genres.length > 0 && (
          <ExpandableFilter expandLabel="Select genre(s)" genres={genres} />
        )}
        {ratings.length > 0 && (
          <ExpandableFilter expandLabel="Select min. vote" genres={ratings} />
        )}
        {languages.length > 0 && (
          <ExpandableFilter expandLabel="Select language" genres={languages} />
        )}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  @media ${(props) => props.theme.media.phone} {
    background-color: transparent;
    padding: 25px 0;
  }
  &.expandable_filters,
  &.search_inputs_cont > input.search_year_input {
    @media ${(props) => props.theme.media.phone} {
      display: none;
    }
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;

export default SearchFilters;
