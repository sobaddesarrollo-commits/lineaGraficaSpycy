import React from 'react';

/**
 * Toggle switch. Spice gradient when on.
 */
export function Switch({ checked = false, onChange, disabled = false, label, ...rest }) {
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)',
    }}>
      <span
        role="switch"
        aria-checked={checked}
        onClick={toggle}
        style={{
          position: 'relative', width: '44px', height: '26px', flex: 'none',
          borderRadius: '999px',
          background: checked ? 'var(--gradient-spice)' : 'var(--warm-300)',
          transition: 'background var(--dur-base) var(--ease-out)',
          boxShadow: checked ? 'var(--glow-spice-soft)' : 'inset 0 1px 2px rgba(0,0,0,0.12)',
        }}
        {...rest}
      >
        <span style={{
          position: 'absolute', top: '3px', left: checked ? '21px' : '3px',
          width: '20px', height: '20px', borderRadius: '999px', background: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
          transition: 'left var(--dur-base) var(--ease-pop)',
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
