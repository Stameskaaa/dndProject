import type { CSSProperties } from 'react';

// Константы с ключами и значениями
export const sizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
} as const;

export const weightMap = {
  light: 'font-light',
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

export const fontMap = {
  UncialAntiqua: 'font-uncial',
  Cinzel: 'font-cinzel',
  Nunito: 'font-nunito',
} as const;

export const colorMap = {
  'brand-50': 'text-[var(--color-brand-50)]',
  'brand-100': 'text-[var(--color-brand-100)]',
  'brand-200': 'text-[var(--color-brand-200)]',
  'brand-300': 'text-[var(--color-brand-300)]',
  'brand-400': 'text-[var(--color-brand-400)]',
  'brand-500': 'text-[var(--color-brand-500)]',
  'accent-100': 'text-[var(--color-accent-100)]',
  'accent-200': 'text-[var(--color-accent-200)]',
  'accent-300': 'text-[var(--color-accent-300)]',
  'text-primary': 'text-[var(--color-text-primary)]',
  'text-secondary': 'text-[var(--color-text-secondary)]',
  'text-description': 'text-[var(--color-text-description)]',
  'text-muted': 'text-[var(--color-text-muted)]',
  'text-destructive': 'text-[var(--color-error)]',
} as const;

export const gradientMap = {
  none: '',
  'brand-gradient':
    'bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-200)] bg-clip-text text-transparent',
  'accent-gradient':
    'bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-accent-300)] bg-clip-text text-transparent',
  'blue-orange': 'bg-gradient-to-br from-blue-600 to-orange-400 bg-clip-text text-transparent',
} as const;

// Типы из ключей констант
export type Size = keyof typeof sizeMap;
export type Weight = keyof typeof weightMap;
export type Font = keyof typeof fontMap;
export type BaseColor = keyof typeof colorMap;
export type Gradient = keyof typeof gradientMap;

export type TypographyProps = {
  style?: CSSProperties;
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  color?: BaseColor;
  gradient?: Gradient;
  size?: Size;
  weight?: Weight;
  font?: Font;
  className?: string;
  maxCount?: number;
  htmlFor?: string;
};
