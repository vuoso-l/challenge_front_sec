import styled from "styled-components";

export const ElementCardStyle = styled.section`
  display: ${({ isOpen }) => (!isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 450px;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: white;
  h4 {
    font-weight: bold;
  }
  img {
    width: 100%;
    height: 300px;
    &:hover {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
