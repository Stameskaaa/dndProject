import { useEffect } from 'react';
import { addBlocker, removeBlocker } from './scrollSlice';
import { useAppDispatch } from '@/hooks/reduxHooks';

export const useScrollLock = (id: string, enabled = true) => {
  const dispatch = useAppDispatch();

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
};
