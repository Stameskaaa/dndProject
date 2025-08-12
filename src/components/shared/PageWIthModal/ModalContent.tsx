import { useWindowWidth } from '@/hooks/useWindowWidth';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { cloneElement, useEffect, useRef, useState, type ReactElement } from 'react';
import { DropdownIndex, HeaderHeight, ModalIndex } from '@/constants/heights';

const defaultContentClass =
  'rounded-lg h-full max-h-[100%] bg-brand-400 flex-1 shadow-2xl shadow-black w-full';

export const ModalContent = ({ children }: { children: ReactElement<any> }) => {
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const width = useWindowWidth();
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const newPath = location.pathname.replace(/\/[^\/]+\/?$/, '');
  const placeholder = useRef<null | HTMLDivElement>(null);
  const isModal = width < 900 || modal;

  useEffect(() => {
    const updateCoords = () => {
      if (placeholder.current) {
        const rect = placeholder.current.getBoundingClientRect();
        setCoords({
          top: rect.top,
          left: rect.left,
          width: rect.width,
        });
      }
    };

    updateCoords();
    window.addEventListener('resize', updateCoords);

    return () => {
      window.removeEventListener('resize', updateCoords);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
            y: -10,
            left: isModal ? 20 : coords.left,
            width: isModal ? 'calc(100% - 40px)' : coords.width,
          }}
          animate={{
            opacity: 1,
            y: 0,
            left: isModal ? 20 : coords.left,
            width: isModal ? 'calc(100% - 40px)' : coords.width,
          }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{
            top: HeaderHeight + 20,
            height: `calc(100vh - ${HeaderHeight + 40}px)`,
            zIndex: isModal ? ModalIndex : DropdownIndex,
          }}
          className={`fixed rounded-lg `}>
          <div className={classNames(defaultContentClass, isModal ? 'absolute' : '')}>
            {cloneElement(children, {
              closeModal: () => navigate(newPath),
              fullModal: () => setModal((prev) => !prev),
              isModal,
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      {!isModal && <div ref={placeholder} className="flex-1 relative z-0" />}
      {isModal && (
        <motion.div
          onClick={() => setModal(false)}
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          style={{
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: isModal ? ModalIndex - 1 : DropdownIndex - 1,
          }}
          className={`w-full h-screen absolute inset-0`}
        />
      )}
    </>
  );
};
