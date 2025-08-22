import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { setSection } from './pageTransitionSlice';
import { useNavigate } from 'react-router-dom';
import { MIN_SHOW_TIMER } from './constants';

export function usePageTransitionLoading(isLoading: boolean) {
  const data = useAppSelector((state) => state.pageTransition);
  const dispatch = useAppDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(setSection({ type: 'loading', value: isLoading }));
  }, [isLoading, dispatch]);
  return null;
}

export function useDelayedNavigatePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function delayedNavigate(path: string) {
    dispatch(setSection({ type: 'timer', value: true }));
    setTimeout(() => {
      navigate(path);
      dispatch(setSection({ type: 'timer', value: false }));
    }, MIN_SHOW_TIMER);
  }

  return {
    delayedNavigate,
  };
}
