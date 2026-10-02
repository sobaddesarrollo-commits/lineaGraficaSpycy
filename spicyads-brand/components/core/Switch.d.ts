import * as React from 'react';

/** Toggle switch — spice gradient when on. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: string;
}
export function Switch(props: SwitchProps): JSX.Element;
