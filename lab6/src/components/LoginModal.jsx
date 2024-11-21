// LoginModal.jsx
import React, { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { UserContext } from '../contexts/UserContext';
import styles from './LoginModal.module.css';

function LoginModal({ show, handleClose, onLoginSuccess }) {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Реалізуйте логіку аутентифікації тут
    login(email);
    onLoginSuccess();
  };

  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2>Вхід</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Пароль:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.loginButton}>Увійти</button>
              <button type="button" onClick={handleClose} className={styles.closeButton}>Закрити</button>
            </div>
          </form>
        </div>
      </div>
    </CSSTransition>
  );
}

export default LoginModal;
