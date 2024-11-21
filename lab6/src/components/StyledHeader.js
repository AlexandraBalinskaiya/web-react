// StyledHeader.js
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #343a40;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  nav {
    display: flex;
    gap: 15px;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledHeader;
