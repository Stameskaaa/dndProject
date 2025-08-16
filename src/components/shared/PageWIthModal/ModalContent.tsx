import { cloneElement, useEffect, useId, useRef, useState, type ReactElement } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
import { useScrollLock } from '@/features/scroll/useScrollLock';
import { DropdownIndex, HeaderHeight, ModalIndex } from '@/constants/heights';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const PARENT_SPACING = 24;

const defaultContentClass =
  'rounded-lg h-full max-h-[100%] bg-brand-400 flex-1 shadow-2xl shadow-black';

export const ModalContent = ({ children }: { children: ReactElement<any> }) => {
  const id = useId();
  const parentRef = useOutletContext<React.RefObject<HTMLDivElement>>();
  const width = useWindowWidth();
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const newPath = location.pathname.replace(/\/[^\/]+\/?$/, '');
  const placeholder = useRef<null | HTMLDivElement>(null);
  const isModalLocked = width < 900;
  const isModal = isModalLocked || modal;
  useScrollLock(id, isModal);

  const updatePosition = () => {
    if (!parentRef?.current) return;
    const rect = parentRef.current.getBoundingClientRect();
    const width = isModal ? rect.width : rect.width / 2 - PARENT_SPACING / 2;
    const left = isModal ? rect.left : rect.left + rect.width / 2 + PARENT_SPACING / 2;
    const top = HeaderHeight + PARENT_SPACING;
    setCoords({ width, left, top });
  };

  // TODO
  // ui — чистые компоненты.
  // wrappers — обёртки и адаптированные версии UI.
  // layout — крупные составные компоненты (контейнеры, каркасы страниц).
  // pages — рутовые страницы.
  // hooks — кастомные хуки.
  // store — RTK слайсы + store.
  // features — API и фичи.
  // constants / utils — вспомогательные вещи.

  useEffect(() => {
    updatePosition();

    if (!parentRef?.current) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(parentRef.current);

    window.addEventListener('resize', updatePosition);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePosition);
    };
  }, [isModal, parentRef]);

  if (!parentRef?.current || coords.width === 0) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          key={location.pathname}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{
            top: HeaderHeight + PARENT_SPACING,
            left: coords.left,
            width: coords.width,
            height: `calc(100vh - ${HeaderHeight + PARENT_SPACING * 2}px)`,
            zIndex: isModal ? ModalIndex : DropdownIndex,
            position: 'fixed',
            transition: 'left 0.3s ease, width 0.3s ease',
          }}
          className={classNames(defaultContentClass)}>
          {cloneElement(children, {
            closeModal: () => navigate(newPath),
            fullModal: () => setModal((prev) => !prev),
            isModalLocked,
            isModal,
          })}
        </motion.div>
      </AnimatePresence>

      {!isModal && <div ref={placeholder} className="flex-1 z-0" />}

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
            zIndex: ModalIndex - 1,
          }}
          className="w-full h-screen fixed inset-0 duration-300"
        />
      )}
    </>
  );
};
