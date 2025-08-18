import styles from './ExpandingCard.module.css';

export const ExpandingCard = ({}) => {
  return (
    <div className={styles.card}>
      <p>
        <span>123132</span>
      </p>
      <p>
        <span>123</span>
      </p>
      <p>
        <span>HOVER ME</span>
      </p>
    </div>
  );
};
