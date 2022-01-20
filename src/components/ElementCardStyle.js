import styled from "styled-components";
import { device } from "../styleAux/deviceSize";

export const ElementCardStyle = styled.section`
  display: ${({ isOpen }) => (!isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: white;
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 65%;
  }
  @media ${device.tablet} {
    justify-content: space-around;
    width: 45%;
    height: 450px;
  }
  @media ${device.laptop} {
    width: 40%;
  }
`;
