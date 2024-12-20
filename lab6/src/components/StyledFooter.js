// StyledFooter.js
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #3b6b52;
  color: white;
  padding: 20px;
  font-size: 14px;

  .footer-links {
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    margin: 0 auto 20px;
  }

  .footer-column h4 {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .footer-column p {
    margin: 5px 0;
  }

  .footer-bottom {
    font-size: 12px;
    color: #ddd;
  }
`;

export default StyledFooter;
