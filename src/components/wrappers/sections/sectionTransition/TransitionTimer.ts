import { useEffect } from 'react';
import { setSection } from '@/features/pageTransition/pageTransitionSlice';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { MIN_SHOW_TIMER } from '@/features/pageTransition/constants';

export const TransitionTimer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSection({ type: 'timer', value: false }));
    }, MIN_SHOW_TIMER);

    return () => clearTimeout(timer);
  }, []);

  return null;
};
