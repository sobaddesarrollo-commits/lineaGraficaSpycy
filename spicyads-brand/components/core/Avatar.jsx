import React from 'react';

/**
 * User / client avatar. Initials on a spice tint, or an image.
 */
export function Avatar({ name = '', src, size = 40, ring = false }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: '999px', flex: 'none',
      background: src ? 'transparent' : 'var(--gradient-ember)',
      color: '#fff', overflow: 'hidden',
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.4, letterSpacing: '0.01em',
      boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--spice-400)' : 'none',
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
