import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color } from "../styleAux/theme";

export const H2Style = styled.h2`
  text-shadow: 4px 4px 8px grey;
  font-size: 24px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 36px;
  }
`;

export const H4Style = styled.h4`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 22px;
  }
`;

export const H4ShopCart = styled.h4`
  font-size: 20px;
  background-color: white;
  border-radius: 50%;
  text-align: center;
  padding: 5px;
  margin-bottom: 5px;
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.laptop} {
    font-size: 28px;
  }
`;

export const ImgStyle = styled.img`
  width: 100%;
  height: 200px;
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 70%;
  }
  @media ${device.laptop} {
    width: 60%;
    height: 250px;
  }
`;

export const ElementCardImg = styled(ImgStyle)`
  &:hover {
    cursor: pointer;
  }
`;

export const GralButton = styled.button`
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 1px 0;
  color: white;
  background-color: black;
  font-size: 14px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const AddButton = styled(GralButton)`
  background-color: ${color.addBtn};
`;

export const DeleteButton = styled(GralButton)`
  background-color: red;
`;

export const SelectStyle = styled.select`
  font-size: 14px;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid;
  border-radius: 10px;
  color: white;
  background-color: ${color.addBtn};
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const OptionStyle = styled.option`
  font-size: 10px;
  padding: 10px 0;
  margin-top: 5px;
  border: 1px solid;
  border-radius: 10px;
  color: white;
  background-color: ${color.addBtn};
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`;
