import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header/Header';
import { WavesFooter } from './footer/WavesFooter';
import { Section } from '../wrappers/sections/section/Section';
import { PageLoader } from '../wrappers/loaders/pageLoader/PageLoader';

const animatedHeaderPaths = ['/'];

export const Layout = () => {
  const location = useLocation();
  const shouldAnimate = animatedHeaderPaths.includes(location.pathname);

  return (
    <Section paddingX="empty" screen={true} className="bg-brand-500 flex flex-col items-center">
      <Header titleAnimate={shouldAnimate} title="Time of heroes" />
      <AnimatePresence>
        <PageLoader key="loader" />
        <Outlet />
      </AnimatePresence>
      <WavesFooter />
    </Section>
  );
};
