import { Header } from './Header/Header';
import { Section } from '../shared/Sections/Section';
import { Outlet } from 'react-router-dom';
import { WavesFooter } from '../shared/WavesFooter/WavesFooter';

export const Layout = () => {
  return (
    <Section className="bg-brand-500 min-h-[100vh] flex flex-col items-center">
      <Header title="Time of heroes" titleAnimate={false} />
      <Outlet />
      <WavesFooter />
    </Section>
  );
};
