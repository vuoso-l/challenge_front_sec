import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";

const DetailContainer = styled.div`
  ${displayFlex("", "column", "center", "center")};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

const DetailCardStyle = styled.section`
  ${displayFlex("flex", "column", "center", "center")};
  width: 90%;
  height: auto;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: white;
  div {
    ${displayFlex("flex", "column", "center", "center")};
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

export { DetailContainer, DetailCardStyle };
