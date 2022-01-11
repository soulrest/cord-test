import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

import Checkbox from "../checkbox";

const ExpandableFilter = (props) => {
  const [filtersShown, setFiltersShown] = useState(false);
  const { genres, expandLabel } = props;
  // You need to create your own checkbox component with a custom checkmark
  return (
    <>
      <ExpandButton
        sign={filtersShown}
        onClick={() => setFiltersShown(!filtersShown)}
      >
        {expandLabel}
      </ExpandButton>
      <Scale filtersShown={filtersShown}>
        {filtersShown &&
          genres.map((genre) => <Checkbox key={genre.id} label={genre.name} />)}
      </Scale>
    </>
  );
};

const scaleAnimation = keyframes`
  0% {
    transform: scaleY(0)
  }
  50% {
    transform: scaleY(0.5);
  }
  100% {
    transform: scaleY(1)
  }
`;

const Scale = styled.div`
  animation: ${({ filtersShown }) =>
    filtersShown &&
    css`
      ${scaleAnimation} .2s linear forwards;
    `};
`;

const ExpandButton = styled.div`
  position: relative;
  padding: 10px 30px;
  width: fit-content;
  cursor: pointer;
  &:before {
    content: "+";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 30px;
    font-weight: 100;
  }
  ${(props) =>
    props.sign &&
    css`
      &:before {
        content: "–";
      }
    `}
`;

export default ExpandableFilter;
