import * as React from 'react';

/**
 * Big punchy KPI block — Anton numeral over a mono label. The headline metric element.
 *
 * @startingPoint section="Core" subtitle="KPI / metric block" viewport="700x180"
 */
export interface StatProps {
  /** The big number, e.g. "+312%" or "1.8M". */
  value: React.ReactNode;
  /** Mono uppercase label above. */
  label?: string;
  /** Small caption below. */
  sublabel?: string;
  /** Optional trend chip. */
  trend?: { dir: 'up' | 'down'; value: string };
  /** @default "default" */
  tone?: 'default' | 'spice';
  /** @default "left" */
  align?: 'left' | 'center';
}
export function Stat(props: StatProps): JSX.Element;
