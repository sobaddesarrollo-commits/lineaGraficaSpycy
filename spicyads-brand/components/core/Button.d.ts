import * as React from 'react';

/**
 * SpicyAds primary action button — loud, confident, spice-gradient by default.
 *
 * @startingPoint section="Core" subtitle="Button — every variant & size" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'solid' | 'secondary' | 'ghost' | 'dark';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Stretch to fill container width. @default false */
  full?: boolean;
  disabled?: boolean;
  /** Render as a different element, e.g. "a". @default "button" */
  as?: 'button' | 'a';
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
}

export function Button(props: ButtonProps): JSX.Element;
