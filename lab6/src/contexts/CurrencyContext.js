// CurrencyContext.js
import { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('UAH');
  const [exchangeRate, setExchangeRate] = useState(1);

  const switchCurrency = (newCurrency) => {
    if (newCurrency === 'USD') {
      setCurrency('USD');
      setExchangeRate(0.027);
    } else {
      setCurrency('UAH');
      setExchangeRate(1);
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, exchangeRate, switchCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}
