import { useEffect } from 'react';
import { addBlocker, removeBlocker } from './scrollSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';

export const useScrollLock = (id: string, enabled = true) => {
  const dispatch = useAppDispatch();
  const blockers = useAppSelector((state) => state.scrollLock.blockers);

  useEffect(() => {
    if (enabled) {
      dispatch(addBlocker(id));
    } else {
      dispatch(removeBlocker(id));
    }

    return () => {
      dispatch(removeBlocker(id));
    };
  }, [dispatch, id, enabled]);

  useEffect(() => {
    if (blockers.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [blockers]);
};
