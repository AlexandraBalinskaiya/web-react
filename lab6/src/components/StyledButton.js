// StyledButton.js
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.primary ? '#007bff' : '#28a745'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.primary ? '#0056b3' : '#218838'};
  }
`;

export default StyledButton;
