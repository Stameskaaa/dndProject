import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
} from 'react';
import { useScrollLock } from '@/features/scroll/useScrollLock';
import { HeaderHeight } from '@/constants/heights';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { Blanket } from '../../background/blanket/Blanket';
import { DropdownIndex, ModalIndex } from '@/constants/zIndex';

const PARENT_SPACING = 24;

const defaultContentClass =
  'rounded-lg h-full max-h-[100%] bg-brand-400 flex-1 shadow-2xl shadow-black';

export const SectionModalContent = ({ children }: { children: ReactElement<any> }) => {
  const parentRef = useOutletContext<React.RefObject<HTMLDivElement>>();
  const placeholder = useRef<null | HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const [modal, setModal] = useState(false);
  const width = useWindowWidth();
  const navigate = useNavigate();
  const location = useLocation();
  const id = useId();

  const newPath = location.pathname.replace(/\/[^\/]+\/?$/, '');
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
          {Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child as ReactElement<any>, {
                  closeModal: () => navigate(newPath),
                  fullModal: () => setModal((prev) => !prev),
                  isModalLocked,
                  isModal,
                })
              : child,
          )}
        </motion.div>
      </AnimatePresence>

      {!isModal && <div ref={placeholder} className="flex-1 z-0" />}

      {isModal && <Blanket style={{ zIndex: ModalIndex - 1 }} onClick={() => setModal(false)} />}
    </>
  );
};
