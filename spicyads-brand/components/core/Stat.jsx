import React from 'react';

/**
 * Big punchy metric block — Anton numeral over a label.
 * The headline KPI element used across marketing & reports.
 */
export function Stat({ value, label, sublabel, trend, tone = 'default', align = 'left' }) {
  const valueColor = tone === 'spice' ? 'transparent' : 'var(--text-strong)';
  const trendColor = trend && trend.dir === 'down' ? 'var(--red-alert)' : 'var(--green-500)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start' }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
          fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</span>
      )}
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 400,
        fontSize: 'var(--text-3xl)', lineHeight: 0.95,
        letterSpacing: 'var(--tracking-tight)', textTransform: 'uppercase',
        color: valueColor,
        ...(tone === 'spice' ? {
          background: 'var(--gradient-spice)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
        } : {}),
      }}>{value}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {sublabel && (
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{sublabel}</span>
        )}
        {trend && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '3px',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
            fontWeight: 'var(--fw-bold)', color: trendColor,
          }}>
            {trend.dir === 'down' ? '▼' : '▲'} {trend.value}
          </span>
        )}
      </div>
    </div>
  );
}
