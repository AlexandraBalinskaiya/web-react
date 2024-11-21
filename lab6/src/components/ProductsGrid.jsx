// ProductsGrid.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ProductsGrid.module.css';
import './ProductsGridAnimation.css'; // Додамо окремий файл для анімацій

function ProductsGrid({ products }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleSelect = (id) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.grid}>
      <TransitionGroup component={null}>
        {products.map(product => (
          <CSSTransition
            key={product.id}
            timeout={300}
            classNames="fade"
          >
            <div className={styles.card}>
              <Link to={`/product/${product.id}`}>
                <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.priceUAH} грн</p>
              </Link>
              <button
                className={styles.selectButton}
                onClick={() => toggleSelect(product.id)}
              >
                {selectedProducts.includes(product.id) ? 'Відмінити' : 'Вибрати'}
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default ProductsGrid;
