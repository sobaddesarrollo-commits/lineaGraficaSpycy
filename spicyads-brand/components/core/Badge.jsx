import React from 'react';

/**
 * Small status / category pill.
 */
export function Badge({ children, tone = 'spice', variant = 'soft', icon, ...rest }) {
  const tones = {
    spice:  { soft: ['#fff2e9', 'var(--spice-700)'], solid: ['var(--spice-500)', '#fff'] },
    neutral:{ soft: ['var(--warm-100)', 'var(--warm-700)'], solid: ['var(--warm-800)', '#fff'] },
    success:{ soft: ['var(--green-100)', '#0f6b39'], solid: ['var(--green-500)', '#fff'] },
    warning:{ soft: ['var(--amber-100)', '#8a6206'], solid: ['var(--amber-500)', '#3a2a05'] },
    info:   { soft: ['var(--blue-100)', '#1c47a8'], solid: ['var(--blue-500)', '#fff'] },
  };
  const [bg, fg] = (tones[tone] || tones.spice)[variant];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 10px',
        background: bg,
        color: fg,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: '0.02em',
        lineHeight: 1.2,
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
      }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  );
}
