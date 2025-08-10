import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Section } from '../shared/Sections/Section';
import { WavesFooter } from '../shared/WavesFooter/WavesFooter';
import { AnimatePresence } from 'framer-motion';

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
