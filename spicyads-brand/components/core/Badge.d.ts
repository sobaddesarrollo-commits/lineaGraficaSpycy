import * as React from 'react';

/** Small status / category pill. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "spice" */
  tone?: 'spice' | 'neutral' | 'success' | 'warning' | 'info';
  /** @default "soft" */
  variant?: 'soft' | 'solid';
  icon?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
