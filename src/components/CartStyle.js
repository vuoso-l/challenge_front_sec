import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";

export const CartContainer = styled.div`
  ${displayFlex("", "column", "", "center")};
  display: ${({ openCart }) => (openCart ? "flex" : "none")};
  position: fixed;
  z-index: 999;
  top: 40px;
  right: 100px;
  width: 45%;
  min-height: 280px;
  max-height: 480px;
  overflow-y: auto;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid black;
  button {
    position: absolute;
    top: 2px;
    right: 2px;
    border: 1px solid;
    border-radius: 10px;
    padding: 3px 5px;
    color: white;
    background-color: red;
    font-size: 16px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  @media ${device.tablet} {
    width: 20%;
    button {
      font-size: 18px;
    }
  }
  @media ${device.laptop} {
    width: 15%;
    button {
      font-size: 22px;
    }
  }
`;

export const CartStyle = styled.section`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid black;
  h5 {
    font-size: 8px;
  }
  h4 {
    font-size: 10px;
  }
  @media ${device.tablet} {
    h5 {
      font-size: 10px;
    }
    h4 {
      font-size: 12px;
    }
  }
  @media ${device.laptop} {
    h5 {
      font-size: 12px;
    }
    h4 {
      font-size: 14px;
    }
  }
`;

export const ImgContainer = styled.div`
  ${displayFlex("flex", "row", "space-around", "center")};
  width: 100%;
  padding: 5px 0px;
  img {
    width: 50%;
    height: auto;
  }
  div {
    ${displayFlex("flex", "column", "space-around", "center")};
    padding: 5px 0px;
    width: 40%;
    h5 {
      font-size: 10px;
    }
    .btn-cart {
      position: unset;
    }
  }
  @media ${device.tablet} {
    img {
      width: 40%;
    }
    h5 {
      font-size: 12px;
    }
  }
  @media ${device.laptop} {
    img {
      width: 35%;
    }
    h5 {
      font-size: 14px;
    }
  }
`;
