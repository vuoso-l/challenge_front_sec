import styled from "styled-components";
import { device } from "../deviceSize";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 90%;
  padding: 20px 0px;
  margin-top: 30px;
  box-shadow: 3px 3px 10px grey;
  border-radius: 20px;
  background: radial-gradient(#3f87a6, rgb(61, 61, 240));
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
