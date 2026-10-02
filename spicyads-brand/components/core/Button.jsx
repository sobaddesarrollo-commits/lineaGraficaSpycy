import React from 'react';

/**
 * SpicyAds primary action button. Loud by default.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  full = false,
  disabled = false,
  as = 'button',
  ...rest
}) {
  const Tag = as;

  const sizes = {
    sm: { padding: '8px 14px', fontSize: 'var(--text-sm)', gap: '6px', radius: 'var(--radius-sm)' },
    md: { padding: '12px 20px', fontSize: 'var(--text-base)', gap: '8px', radius: 'var(--radius-sm)' },
    lg: { padding: '16px 28px', fontSize: 'var(--text-md)', gap: '10px', radius: 'var(--radius-md)' },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 'var(--fw-bold)',
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: s.radius,
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  const variants = {
    primary: {
      background: 'var(--gradient-spice)',
      color: 'var(--brand-ink)',
      boxShadow: 'var(--glow-spice-soft)',
    },
    solid: {
      background: 'var(--spice-500)',
      color: 'var(--brand-ink)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
    },
    dark: {
      background: 'var(--warm-900)',
      color: 'var(--warm-50)',
    },
  };

  return (
    <Tag
      style={{ ...base, ...(variants[variant] || variants.primary) }}
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = 'translateY(-1px)';
        if (variant === 'primary') e.currentTarget.style.boxShadow = 'var(--glow-spice)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'primary') e.currentTarget.style.boxShadow = 'var(--glow-spice-soft)';
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.99)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)'; }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </Tag>
  );
}
