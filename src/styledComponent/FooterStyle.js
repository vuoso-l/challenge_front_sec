import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

const FooterStyle = styled.footer`
  ${displayFlex("flex", "column", "center", "center")};
  background-color: ${color.bgPrimary};
  width: 100%;
  max-width: 100%;
  div {
    ${displayFlex("flex", "column", "center", "flex-start")};
    width: 100%;
    ul {
      ${displayFlex("flex", "column", "center", "flex-start")};
      font-size: 16px;
      width: 100%;
      padding-bottom: 20px;
      li {
        width: 100%;
        padding: 10px 20px;
        color: white;
        font-weight: bold;
      }
    }
  }
  p {
    background-color: white;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px;
  }
  @media ${device.tablet} {
    div {
      flex-direction: row;
      ul {
        flex-direction: row;
        font-size: 18px;
        li {
          padding: 10px 10px;
        }
      }
    }
  }
  @media ${device.laptop} {
    div {
      ul {
        font-size: 22px;
        li {
          padding: 10px 20px;
        }
      }
    }
  }
`;

export { FooterStyle };
