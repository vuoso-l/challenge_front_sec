import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";

export const ElementCardStyle = styled.section`
  ${displayFlex("", "column", "center", "center")};
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  width: 80%;
  height: auto;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: white;
  div {
    ${displayFlex("flex", "row", "space-around", "center")};
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 65%;
  }
  @media ${device.tablet} {
    justify-content: space-between;
    width: 25%;
    height: 350px;
  }
  @media ${device.laptop} {
    width: 20%;
  }
`;
