import * as React from 'react';

/** Mono uppercase kicker label above headings — the signature section opener. */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** @default "brand" */
  tone?: 'brand' | 'muted' | 'inherit';
  /** Show the spice dot. @default true */
  dot?: boolean;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
