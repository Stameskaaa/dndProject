import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigatePath = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function navigatePath(path: string) {
    if (path === location.pathname) return;
    navigate(path);
  }

  return { navigatePath };
};
