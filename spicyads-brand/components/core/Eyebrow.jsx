import React from 'react';

/**
 * Mono uppercase kicker label that sits above headings.
 * The signature SpicyAds section opener.
 */
export function Eyebrow({ children, tone = 'brand', dot = true, ...rest }) {
  const color = tone === 'brand' ? 'var(--text-brand)'
    : tone === 'muted' ? 'var(--text-muted)'
    : 'currentColor';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color,
      }}
      {...rest}
    >
      {dot && (
        <span style={{
          width: '7px', height: '7px', borderRadius: '999px',
          background: 'var(--gradient-spice)', flex: 'none',
        }} />
      )}
      {children}
    </span>
  );
}
