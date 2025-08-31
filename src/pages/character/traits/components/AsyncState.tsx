import React, { type ReactNode } from 'react';
import { Text } from '@/components/wrappers/typography/Text';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';

interface AsyncStateProps {
  isLoading: boolean;
  isError: boolean;
  data: any;
  children: ReactNode;
}

export const AsyncState: React.FC<AsyncStateProps> = ({ isLoading, isError, data, children }) => {
  if (isLoading) {
    return <CubeLoader />;
  }

  if (isError) {
    return <Text>Произошла ошиюка</Text>;
  }

  if (!data) {
    return <Text>Данные не найдены</Text>;
  }

  return <>{children}</>;
};
