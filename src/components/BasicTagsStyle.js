import styled from "styled-components";
import { device } from "../deviceSize";

const H2 = styled.h2`
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

const H4 = styled.h4`
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

const H4ShopCart = styled.h4`
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

const Img = styled.img`
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

const ElementCardImg = styled(Img)`
  &:hover {
    cursor: pointer;
  }
`;

const GralButton = styled.button`
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 1px 0;
  color: white;
  background: black;
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

const AddButton = styled(GralButton)`
  background: #0000ffb0;
`;

const DeleteButton = styled(GralButton)`
  background: red;
`;

export {
  H2,
  H4,
  H4ShopCart,
  Img,
  ElementCardImg,
  GralButton,
  AddButton,
  DeleteButton,
};
