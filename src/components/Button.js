import styled from "styled-components";

const GralButton = styled.button`
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 1px 0;
  color: white;
  background: black;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const AddButton = styled(GralButton)`
  background: #0000ffb0;
`;

const DeleteButton = styled(GralButton)`
  background: red;
`;

export { GralButton, AddButton, DeleteButton };
