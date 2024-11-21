// CurrencyConverter.jsx
import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';
import styles from './CurrencyConverter.module.css';
import StyledButton from './StyledButton';

function CurrencyConverter() {
  const { currency, exchangeRate, switchCurrency } = useContext(CurrencyContext);
  const [amountUAH, setAmountUAH] = useState('');
  const [amountCurrency, setAmountCurrency] = useState('');

  const handleUAHChange = (value) => {
    setAmountUAH(value);
    setAmountCurrency((value * exchangeRate).toFixed(2));
  };

  const handleCurrencyChange = (value) => {
    setAmountCurrency(value);
    setAmountUAH((value / exchangeRate).toFixed(2));
  };

  return (
    <div className={styles.converterContainer}>
      <h3>Конвертація Валюти</h3>
      <p>Курс: 1 UAH = {exchangeRate} {currency}</p>
      <div className={styles.inputs}>
        <input 
          type="number" 
          value={amountUAH} 
          onChange={(e) => handleUAHChange(e.target.value)} 
          placeholder="Сума в UAH" 
          className={styles.inputField}
        />
        <input 
          type="number" 
          value={amountCurrency} 
          onChange={(e) => handleCurrencyChange(e.target.value)} 
          placeholder="Сума у валюті" 
          className={styles.inputField}
        />
      </div>
      <StyledButton onClick={() => switchCurrency(currency === 'UAH' ? 'USD' : 'UAH')}>
        Змінити валюту
      </StyledButton>
    </div>
  );
}

export default CurrencyConverter;
