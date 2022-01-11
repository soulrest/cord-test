import React from "react";
import styled from "styled-components";

import noImageAvailable from "../../images/no_image_available.png";

const MovieItem = (props) => {
  const { image, title, releaseDate, overview, genres, vote } = props;
  let shortOverview = overview;
  if (overview.split(" ").length > 70)
    shortOverview = `${overview.split(" ").slice(0, 70).join(" ")}...`;
  return (
    // Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont image={image || noImageAvailable}></LeftCont>
      <RightCont>
        <div>
          <h2>{title}</h2>
          <Vote>{vote}</Vote>
          <Genres>
            {genres.map((genre) => (
              <span key={`${genre}_${Math.random()}`}>{genre}</span>
            ))}
          </Genres>
          <Overview>{shortOverview}</Overview>
        </div>
        <ReleaseDate>{releaseDate}</ReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 20px;
  margin: 15px auto;
  overflow: hidden;
`;

const LeftCont = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 250px;
  height: 250px;
  @media ${(props) => props.theme.media.phone} {
    width: 150px;
    height: 150px;
  }
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
  width: 100%;
  height: 250px;
  font-size: 12px;
  font-weight: 400;
  color: black;
  @media ${(props) => props.theme.media.phone} {
    height: auto;
  }
  h2 {
    width: 95%;
    font-weight: bold;
    font-size: 16px;
  }
`;

const ReleaseDate = styled.p`
  color: ${(props) => props.theme.colors.primaryColor};
  display: inline-block;
  font-weight: 100;
  font-size: 10px;
`;

const Overview = styled.p`
  position: relative;
  overflow: hidden;
  height: 95px;
  content: "";
  overflow: hidden;
  background: linear-gradient(#fff, #fff);
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100px;
    left: 0;
    top: 0;
    background: linear-gradient(to right bottom, transparent 155px, white),
      linear-gradient(to bottom, transparent 60px, white);
  }
`;

const Vote = styled.p`
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: white;
`;

const Genres = styled.p`
  padding: 5px 0;
  display: block;
  font-weight: 700;
  font-size: 11px;
  color: ${(props) => props.theme.colors.primaryColor};
  span {
    &:after {
      content: "|";
      display: inline-block;
      padding: 0 2px;
    }
  }
  span:last-child {
    &:after {
      content: none;
    }
  }
`;

export default MovieItem;
