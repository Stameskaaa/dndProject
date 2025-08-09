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
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium ">
          {title}
          <span className="sr-only ">Plan</span>
        </h2>

        {/* <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold  sm:text-3xl">
            {' '}
            {price ? 'Бесплатно' : `${price} Р`}{' '}
          </strong>

          <span className="text-sm font-medium">/ месяц</span>
        </p>

        <a
          className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
          href="#">
          Оплатить
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium sm:text-xl">За что платим бля:</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
