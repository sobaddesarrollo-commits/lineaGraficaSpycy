import React from 'react';

/**
 * Text input with label + optional helper / error.
 */
export function Input({
  label,
  helper,
  error,
  prefix,
  suffix,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--red-alert)' : focus ? 'var(--spice-500)' : 'var(--border-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
          fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-sm)',
        padding: '0 14px',
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {prefix && <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>{prefix}</span>}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
            color: 'var(--text-strong)', padding: '12px 0', minWidth: 0, ...style,
          }}
          {...rest}
        />
        {suffix && <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>{suffix}</span>}
      </div>
      {(helper || error) && (
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
          color: error ? 'var(--red-alert)' : 'var(--text-muted)',
        }}>{error || helper}</span>
      )}
    </div>
  );
}
