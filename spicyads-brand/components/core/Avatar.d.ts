import * as React from 'react';

/** User / client avatar — initials on a spice tint, or an image. */
export interface AvatarProps {
  name?: string;
  src?: string;
  /** px. @default 40 */
  size?: number;
  /** Spice ring outline. @default false */
  ring?: boolean;
}
export function Avatar(props: AvatarProps): JSX.Element;
