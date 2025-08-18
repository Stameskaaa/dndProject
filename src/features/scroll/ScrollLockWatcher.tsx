import { useAppSelector } from '@/hooks/reduxHooks';
import { useEffect } from 'react';

export function ScrollLockWatcher() {
  const blockers = useAppSelector((state) => state.scrollLock.blockers);

  useEffect(() => {
    document.body.style.overflow = blockers.length > 0 ? 'hidden' : '';
  }, [blockers]);

  return null;
}
