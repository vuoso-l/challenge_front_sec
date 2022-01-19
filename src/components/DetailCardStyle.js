import styled from "styled-components";

const DetailContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DetailCardStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: white;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
  h4 {
    font-weight: bold;
  }
  img {
    width: 100%;
    height: 350px;
  }
`;

export { DetailContainer, DetailCardStyle}