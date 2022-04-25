import styled, { keyframes } from "styled-components";

const rotateLoadingRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingRingsDiv = styled.div`
  position: relative;
  padding: 20px 0;
`;

const LoadingRings = styled.div`
  width: 64px;
  height: 64px;
  margin: 8px;
  position: inherit;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  border-top: 10px solid grey;
  border-right: 8px solid #00bfff;
  border-bottom: 8px solid #00bfff;
  border-left: 8px solid #00bfff;
  border-radius: 50%;
  animation: ${rotateLoadingRing} 1.2s infinite;
`;

const Loader = () => {
  return (
    <LoadingRingsDiv>
      <LoadingRings />
    </LoadingRingsDiv>
  );
};

export default Loader;
