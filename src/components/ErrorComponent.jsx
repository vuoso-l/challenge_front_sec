import styled, { keyframes } from "styled-components";

import { H2Style } from "../styledComponent/BasicTagsStyle";
import { device } from "../styleAux/deviceSize";

const rotateImage = keyframes`
0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
`;

const ErrorContainer = styled.div`
  position: relative;
  padding: 20px 0;
  @media ${device.tablet} {
    padding: 100px 50px;
  }
`;

const ErrorImg = styled.img`
  border-radius: 15px;
  height: 250px;
  animation: ${rotateImage} 3s infinite;
  @media ${device.tablet} {
    position: inherit;
    top: calc(50% - 125px);
    left: calc(50% - 300px);
  }
`;

const ErrorComponent = () => {
  return (
    <ErrorContainer>
      <H2Style>
        Inconvenientes técnicos, no se puede acceder a las imágenes
      </H2Style>
      <H2Style>Disculpen las molestias!</H2Style>
      <ErrorImg
        src="//cdn.shopify.com/s/files/1/0254/2947/5433/t/12/assets/new_logo-black.svg?v=15514233714370248417?nocache=0.4027801373597353"
        alt="Logo"
      />
    </ErrorContainer>
  );
};

export default ErrorComponent;
