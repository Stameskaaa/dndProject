import { type ReactNode } from 'react';
import { Text } from '../typography/Text';

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-max px-2 bg-brand-300 rounded-2xl">
      <Text color="text-secondary" size="sm" className="leading-5">
        {children}
      </Text>
    </div>
  );
};
