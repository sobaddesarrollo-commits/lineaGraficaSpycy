import React from 'react';

/**
 * Surface container. Default is warm paper with a soft warm shadow.
 */
export function Card({
  children,
  variant = 'default',
  pad = 'md',
  hover = false,
  style = {},
  ...rest
}) {
  const pads = { none: '0', sm: '16px', md: '24px', lg: '32px' };

  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--text-body)',
    },
    flat: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      color: 'var(--text-body)',
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--border-strong)',
      color: 'var(--text-body)',
    },
    dark: {
      background: 'var(--warm-900)',
      border: '1px solid rgba(255,255,255,0.10)',
      color: 'var(--warm-200)',
    },
    spice: {
      background: 'var(--gradient-ember)',
      border: '1px solid transparent',
      color: 'var(--warm-0)',
      boxShadow: 'var(--glow-spice-soft)',
    },
  };

  const [isHover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => hover && setHover(true)}
      onMouseLeave={() => hover && setHover(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: pads[pad] ?? pads.md,
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: isHover ? 'translateY(-3px)' : 'none',
        boxShadow: isHover ? 'var(--shadow-lg)' : (variants[variant] || variants.default).boxShadow,
        ...(variants[variant] || variants.default),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
