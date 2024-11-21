import React from 'react';
import styles from './DebugWindow.module.css';

function DebugWindow({ history }) {
  return (
    <div className={styles.debug}>
      <h3>Історія переходів:</h3>
      {history.length ? (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>Історія порожня</p>
      )}
    </div>
  );
}

export default DebugWindow;
