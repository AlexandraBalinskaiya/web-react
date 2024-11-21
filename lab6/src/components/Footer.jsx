// Footer.jsx
import React from 'react';
import StyledFooter from './StyledFooter';

function Footer() {
  return (
    <StyledFooter>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Контакти</h4>
          <p>Телефон: +38 (012) 345-67-89</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-column">
          <h4>Про нас</h4>
          <p>Інформація про компанію, політика конфіденційності</p>
        </div>
        <div className="footer-column">
          <h4>Соціальні мережі</h4>
          <p>Facebook | Instagram | Twitter</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 Інтернет-магазин одягу та взуття.
      </div>
    </StyledFooter>
  );
}

export default Footer;
