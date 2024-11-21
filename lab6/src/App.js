// App.js
import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import LoginModal from './components/LoginModal';
import ProductDetail from './components/ProductDetail';
import ProductsGrid from './components/ProductsGrid';
import DebugWindow from './components/DebugWindow';
import { UserContext } from './contexts/UserContext';
import { CurrencyContext } from './contexts/CurrencyContext';
import useNavigationHistory from './hooks/useNavigationHistory';
import styles from './App.module.css';

function App() {
  const { user, login, logout } = useContext(UserContext);
  const { exchangeRate } = useContext(CurrencyContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { history } = useNavigationHistory();

  const products = [
    { id: 1, name: 'Куртка', priceUAH: 1200, image: '/images/jacket.jpg', description: 'Зимова куртка з високоякісного матеріалу.' },
    { id: 2, name: 'Кросівки', priceUAH: 1500, image: '/images/sneakers.jpg', description: 'Комфортні кросівки для повсякденного носіння.' },
    { id: 3, name: 'Штани', priceUAH: 800, image: '/images/pants.jpg', description: 'Легкі штани, зручні для активного відпочинку.' },
  ];

  const handleAuth = () => {
    if (user) {
      logout();
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
  };

  return (
    <div className={styles.app}>
      <Header toggleLogin={handleAuth} />
      <LoginModal
        show={showLoginModal}
        handleClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CurrencyConverter />
                <ProductsGrid products={products} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </main>
      <DebugWindow history={history} />
      <Footer />
    </div>
  );
}

export default App;
