import React from 'react';
import {
  colorMap,
  fontMap,
  gradientMap,
  sizeMap,
  weightMap,
  type TypographyProps,
} from './constants';

export const Text: React.FC<TypographyProps> = ({
  children,
  as = 'p',
  color = 'text-primary',
  gradient = 'none',
  size = 'md',
  weight = 'normal',
  font = 'Nunito',
  className = '',
}) => {
  const Tag = as;
  const colorClass = gradient === 'none' ? colorMap[color] : '';
  const gradientClass = gradientMap[gradient];

  return (
    <Tag
      className={`${sizeMap[size]} ${weightMap[weight]} ${fontMap[font]} ${colorClass} ${gradientClass} ${className}`}>
      {children}
    </Tag>
  );
};
