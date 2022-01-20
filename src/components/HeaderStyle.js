import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color } from "../styleAux/theme";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 0px 20px;
  background-color: ${color.bgPrimary};
  img {
    width: 150px;
  }
  @media ${device.laptop} {
    img {
      width: 200px;
    }
  }
`;

export { HeaderStyle };
