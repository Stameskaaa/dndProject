import { Button } from '@/components/ui/button';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

const defaultContentClass =
  'rounded-lg h-full max-h-[100%] bg-brand-400 flex-1 shadow-2xl shadow-black w-full';

export const RaceCharacterPage = () => {
  const width = useWindowWidth();
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const newPath = location.pathname.replace(/\/[^\/]+\/?$/, '');
  const isModal = width < 900 || modal;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        style={{
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        className={classNames(
          'rounded-lg',
          isModal ? 'absolute inset-0 z-400 bg- h-full p-10' : 'flex-1',
        )}>
        <div className={defaultContentClass}>
          <Button onClick={() => navigate(newPath)}>Назад</Button>
          <Button
            onClick={() => {
              setModal(!modal);
            }}>
            На фулл
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
