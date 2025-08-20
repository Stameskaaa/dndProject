import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './Header/Header';
import { WavesFooter } from './footer/WavesFooter';
import { Section } from '../wrappers/sections/section/Section';

export const Layout = () => {
  return (
    <Section paddingX="empty" screen={true} className="bg-brand-500 flex flex-col items-center">
      <Header title="Time of heroes" titleAnimate={true} />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>

      <WavesFooter />
    </Section>
  );
};
