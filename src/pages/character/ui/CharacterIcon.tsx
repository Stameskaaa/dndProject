import type { ReactNode } from 'react';

export const CharacterIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-brand-300 w-[40px] text-brand-100 h-[40px] shadow-md shadow-black rounded-xl p-2 grid place-items-center">
      {children}
    </div>
  );
};
