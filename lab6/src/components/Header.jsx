// Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import StyledHeader from './StyledHeader';
import StyledButton from './StyledButton'; // Використаємо стилізовану кнопку

function Header({ toggleLogin }) {
  const { user, logout } = useContext(UserContext);

  return (
    <StyledHeader>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/category/1">Категорія 1</Link>
        <Link to="/category/2">Категорія 2</Link>
      </nav>
      <StyledButton primary onClick={() => (user ? logout() : toggleLogin())}>
        {user ? `Вийти (${user})` : 'Увійти'}
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
