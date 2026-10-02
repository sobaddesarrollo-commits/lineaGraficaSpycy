import * as React from 'react';

/** Text input with label, helper text, and error state. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  helper?: string;
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;
