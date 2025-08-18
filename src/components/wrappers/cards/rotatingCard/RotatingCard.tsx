import type { HTMLAttributes } from 'react';
import styles from './RotatingCard.module.css';

interface RotatingCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  descTop: string;
  descBott: string;
}

export const RotatingCard: React.FC<RotatingCardProps> = ({
  title,
  descTop,
  descBott,
  ...props
}) => {
  return (
    <div {...props} className={`${styles.card} ${props.className ? props.className : ''}`}>
      <p className={styles.heading}>{title}</p>
      <p>{descTop}</p>
      <p>{descBott}</p>
    </div>
  );
};
