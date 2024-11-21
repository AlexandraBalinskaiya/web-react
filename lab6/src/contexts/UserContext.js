import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Автоматичне зчитування профілю з localStorage при завантаженні
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile && storedProfile.email) {
      setUser(storedProfile.email); // Встановлюємо email як ім'я користувача
    }
  }, []);

  const login = (email) => {
    setUser(email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userProfile'); // Видалення профілю при виході
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
