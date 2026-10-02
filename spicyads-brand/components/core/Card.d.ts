import * as React from 'react';

/** Surface container. Warm paper with soft warm shadow by default. */
export interface CardProps {
  children?: React.ReactNode;
  /** @default "default" */
  variant?: 'default' | 'flat' | 'outline' | 'dark' | 'spice';
  /** Inner padding. @default "md" */
  pad?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift on hover. @default false */
  hover?: boolean;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
