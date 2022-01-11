import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  padding-top: 100px;
  width: 450px;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
`;

const Spinner = styled.div`
  position: absolute;
  left: 30%;
  &:after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 10px solid black;
    border-color: black transparent black transparent;
    animation: ${spinner} 1.2s linear infinite;
  }
`;

export default LoadingSpinner;
