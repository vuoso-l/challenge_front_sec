import React from "react";
import styled, { keyframes } from "styled-components";

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

const ErrorImg = styled.img`
  border-radius: 15px;
  height: 250px;
  animation: ${rotateImage} 3s infinite;
`;

const ErrorComponent = () => {
  return (
    <section>
      <h2>Inconvenientes técnicos, no se puede acceder a las imágenes</h2>
      <h2>Disculpen las molestias!</h2>
      <ErrorImg
        src="//cdn.shopify.com/s/files/1/0254/2947/5433/t/12/assets/new_logo-black.svg?v=15514233714370248417?nocache=0.4027801373597353"
        alt="Logo"
      ></ErrorImg>
    </section>
  );
};

export default ErrorComponent;
