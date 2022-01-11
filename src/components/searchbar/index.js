import React from "react";
import styled from "styled-components";

import FilterIcon from "../../images/filter-icon.png";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

const SearchBar = (props) => {
  const { search, calendar, searchInputChange, filterIcon } = props;
  const icon = search ? SearchIcon : calendar ? CalendarIcon : "";

  const handleChange = (e) => {
    searchInputChange(e.target.value);
  };

  return (
    <>
      <StyledSearchBar
        {...props}
        icon={icon}
        filterIcon={filterIcon}
        onChange={handleChange}
      />
      {search && (
        <FilterSignWrapper>
          <FilterSign src={FilterIcon} />
        </FilterSignWrapper>
      )}
    </>
  );
};

const StyledSearchBar = styled.input`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 18px;
  padding: 15px 15px 15px ${({ icon }) => (icon !== "" ? "30px" : "15px")};
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: ${(props) => props.fontWeight || 100};
  font-size: ${(props) => props.fontSize || "15px"};
  width: 100%;
  min-width: 200px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.primaryColor};
  }
  @media ${(props) => props.theme.media.phone} {
    width: 85%;
    min-width: none;
    float: left;
    padding: 15px 15px 15px ${({ icon }) => (icon !== "" ? "45px" : "15px")};
    background-size: 26px;
    font-size: 25px;
    font-weight: 100;
  }
`;

const FilterSign = styled.img`
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};
  padding-bottom: 15px;
`;

const FilterSignWrapper = styled.div`
  padding-left: 20px;
  vertical-align: middle;
  line-height: 112px;
  float: right;
  width: 15%;
  @media ${(props) => props.theme.media.laptop} {
    display: none;
  }
`;

export default SearchBar;
