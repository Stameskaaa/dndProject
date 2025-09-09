import React from 'react';
import { type Control } from 'react-hook-form';
import { characteristic } from '@/mock/mock';
import { Text } from '@/components/wrappers/typography/Text';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import classNames from 'classnames';

interface CharacteristicFormProps {
  title: string;
  control: Control<any>;
  name: string;
  className?: string;
}

export const CharacteristicForm: React.FC<CharacteristicFormProps> = ({
  control,
  name,
  title,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-2 flex-1 border border-brand-200 p-3 rounded-md shrink-1',
        className,
      )}>
      <Text color="brand-100" size="lg">
        {title}
      </Text>
      {characteristic.map(({ id, name: characteristicName }) => {
        return (
          <div key={id} className="flex flex-col flex-1 gap-1 shrink-1">
            <Text>{characteristicName}</Text>
            <Selector
              className="!min-w-0 shrink-1"
              required
              placeholder="40"
              label="Характеристики"
              control={control}
              name={`${name}.${id}`}
              options={Array.from({ length: 50 }).map((_, i) => ({
                id: `${i + 1}`,
                value: `${i + 1}`,
              }))}
            />
          </div>
        );
      })}
    </div>
  );
};
