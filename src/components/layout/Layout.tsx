import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './Header/Header';
import { WavesFooter } from './footer/WavesFooter';
import { Section } from '../wrappers/sections/Section';

export const Layout = () => {
  return (
    <Section className="bg-brand-500 min-h-[100vh] flex flex-col items-center">
      <Header title="Time of heroes" titleAnimate={false} />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>

      <WavesFooter />
    </Section>
  );
};
