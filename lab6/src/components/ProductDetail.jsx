// ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';

function ProductDetail({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className={styles.productNotFound}>Продукт не знайдено</div>;
  }

  return (
    <div className={styles.productDetail}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>Назад до товарів</button>
      <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.priceUAH} грн</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
