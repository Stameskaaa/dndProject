import { ModalDialog } from '../../ModalDialog/ModalDialog';
import styles from './PayCard.module.css';

export interface PayCardProps {
  title: string;
  description: string;
  price: number | null;
}

export const PayCard: React.FC<PayCardProps> = ({ title, description, price }) => {
  return (
    <div
      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.7)' }}
      className={` text-text-primary  shadow-5xl rounded-2xl bg-brand-400 relative h-full ${styles.card}`}>
      <div className="p-6 sm:px-8 flex flex-col gap-2">
        <h2 className="text-lg font-medium ">
          {title}
          <span className="sr-only ">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold  sm:text-3xl">
            {' '}
            {price ? 'Бесплатно' : `${price} Р`}{' '}
          </strong>

          <span className="text-sm font-medium">/ месяц</span>
        </p>

        <ModalDialog />
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium sm:text-xl">За что платим бля:</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
