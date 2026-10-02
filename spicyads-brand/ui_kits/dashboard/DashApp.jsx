/* SpicyAds — client reporting dashboard UI kit.
   Composes design-system primitives. Loaded by index.html; exposes window.DashApp. */
const DS = window.SpicyAdsDesignSystem_ec6a90;
const { Button, Badge, Eyebrow, Card, Stat, Avatar, Switch, Input } = DS;

const I = {
  grid: (p)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/></svg>,
  chart: (p)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 19V5M4 19h16M8 15v-3M12 15V8M16 15v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  megaphone: (p)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 10v4a1 1 0 001 1h2l4 4V5L7 9H5a1 1 0 00-1 1zM15 9a4 4 0 010 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  doc: (p)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 3h8l4 4v14H6V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 3v4h4M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  gear: (p)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  bell: (p)=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6zM10 19a2 2 0 004 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  arrow: (p)=><svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};
const LOGO = '../../assets/logo-aji.svg';

/* ---- sidebar ---- */
function Sidebar({ active, setActive }) {
  const items = [
    ['Resumen', I.grid], ['Campañas', I.megaphone], ['Analítica', I.chart], ['Informes', I.doc], ['Ajustes', I.gear],
  ];
  return (
    <aside style={{ width: 232, flex: 'none', background: 'var(--warm-950)', borderRight: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', padding: '20px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '6px 8px 22px' }}>
        <img src={LOGO} alt="" style={{ width: 28, height: 28 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff' }}>Spicy<span className="text-spice">Ads</span></span>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map(([label, Icn]) => {
          const on = active === label;
          return (
            <button key={label} onClick={() => setActive(label)} style={{
              display: 'flex', alignItems: 'center', gap: 11, padding: '10px 12px', borderRadius: 'var(--radius-sm)',
              border: 'none', cursor: 'pointer', textAlign: 'left',
              background: on ? 'rgba(229,49,48,0.16)' : 'transparent',
              color: on ? '#fff' : 'var(--warm-400)', fontFamily: 'var(--font-sans)', fontWeight: on ? 700 : 500, fontSize: 14.5,
            }}>
              <span style={{ color: on ? 'var(--spice-400)' : 'var(--warm-500)', display: 'inline-flex' }}><Icn /></span>{label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto' }}>
        <Card variant="dark" pad="md" style={{ background: 'var(--warm-900)', border: '1px solid rgba(255,255,255,0.10)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--warm-500)', marginBottom: 6 }}>Plan Habanero</div>
          <div style={{ color: 'var(--warm-200)', fontSize: 13, lineHeight: 1.45, marginBottom: 12 }}>Optimización semanal activa.</div>
          <Button full variant="primary" size="sm">Mejorar plan</Button>
        </Card>
      </div>
    </aside>
  );
}

/* ---- topbar ---- */
function Topbar({ live, setLive }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 28px', borderBottom: '1px solid var(--border)', background: 'var(--surface-card)' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Cliente · Caldera</div>
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '2px 0 0' }}>Resumen de rendimiento</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Switch checked={live} onChange={setLive} label="En vivo" />
        <button style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--surface-card)', color: 'var(--text-body)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><I.bell /></button>
        <Avatar name="Caldera SL" ring />
      </div>
    </div>
  );
}

/* ---- bar chart (svg, brand-colored) ---- */
function BarChart() {
  const data = [42, 58, 47, 70, 64, 88, 96, 82, 110, 124, 118, 140];
  const months = ['E','F','M','A','M','J','J','A','S','O','N','D'];
  const max = 150, W = 560, H = 200, gap = 14;
  const bw = (W - gap * (data.length - 1)) / data.length;
  return (
    <svg viewBox={`0 0 ${W} ${H + 24}`} style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="barg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f07422" /><stop offset="1" stopColor="#a5244a" />
        </linearGradient>
      </defs>
      {[0.25,0.5,0.75,1].map(f => (
        <line key={f} x1="0" x2={W} y1={H - H*f} y2={H - H*f} stroke="var(--border)" strokeWidth="1" />
      ))}
      {data.map((d, i) => {
        const h = (d / max) * H;
        return <rect key={i} x={i*(bw+gap)} y={H-h} width={bw} height={h} rx="4" fill="url(#barg)" />;
      })}
      {months.map((m, i) => (
        <text key={i} x={i*(bw+gap)+bw/2} y={H+18} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-muted)">{m}</text>
      ))}
    </svg>
  );
}

/* ---- campaign table ---- */
function CampaignTable() {
  const rows = [
    ['Search · Marca', 'Activa', '4.812 €', '8.1x', '+12%', 'up'],
    ['Performance Max', 'Activa', '6.240 €', '6.7x', '+4%', 'up'],
    ['Meta · Retargeting', 'Activa', '3.110 €', '5.2x', '-3%', 'down'],
    ['TikTok · Prospecting', 'Pausada', '1.940 €', '2.1x', '-18%', 'down'],
    ['Demand Gen', 'Activa', '2.530 €', '4.4x', '+9%', 'up'],
  ];
  return (
    <Card variant="default" pad="none" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', borderBottom: '1px solid var(--border)' }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-strong)', margin: 0 }}>Campañas activas</h3>
        <Button variant="ghost" size="sm" iconRight={<I.arrow />}>Ver todas</Button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'var(--surface-sunken)' }}>
            {['Campaña','Estado','Gasto','ROAS','Δ 7d'].map((h,i) => (
              <th key={h} style={{ textAlign: i>1?'right':'left', padding: '10px 22px', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
              <td style={{ padding: '14px 22px', fontWeight: 600, color: 'var(--text-strong)', fontSize: 14 }}>{r[0]}</td>
              <td style={{ padding: '14px 22px' }}><Badge tone={r[1]==='Activa'?'success':'neutral'} variant="soft">{r[1]}</Badge></td>
              <td style={{ padding: '14px 22px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--text-body)' }}>{r[2]}</td>
              <td style={{ padding: '14px 22px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 700, color: 'var(--text-strong)' }}>{r[3]}</td>
              <td style={{ padding: '14px 22px', textAlign: 'right', fontWeight: 700, fontSize: 13.5, color: r[5]==='up'?'var(--green-500)':'var(--red-alert)' }}>{r[5]==='up'?'▲':'▼'} {r[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function DashApp() {
  const [active, setActive] = React.useState('Resumen');
  const [live, setLive] = React.useState(true);
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-page)', fontFamily: 'var(--font-sans)' }}>
      <Sidebar active={active} setActive={setActive} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'auto' }}>
        <Topbar live={live} setLive={setLive} />
        <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <Card variant="default" pad="lg"><Stat label="Inversión" value="18.6k€" sublabel="este mes" /></Card>
            <Card variant="default" pad="lg"><Stat label="ROAS medio" value="6.4x" trend={{dir:'up',value:'+18%'}} /></Card>
            <Card variant="default" pad="lg"><Stat label="Conversiones" value="1.284" trend={{dir:'up',value:'+22%'}} /></Card>
            <Card variant="dark" pad="lg"><Stat tone="spice" label="Ingresos" value="119k€" /></Card>
          </div>
          {/* chart + side */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.7fr) minmax(0,1fr)', gap: 16 }}>
            <Card variant="default" pad="lg">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-strong)', margin: 0 }}>Ingresos por mes</h3>
                <Badge tone="spice" variant="soft">2026</Badge>
              </div>
              <BarChart />
            </Card>
            <Card variant="spice" pad="lg" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Eyebrow tone="inherit" dot={false} style={{ color: 'rgba(255,255,255,0.85)' }}>Recomendación</Eyebrow>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, textTransform: 'uppercase', color: '#fff', lineHeight: 0.95, margin: '14px 0 8px' }}>Sube +20% el budget de Search</div>
                <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 14, lineHeight: 1.5, margin: 0 }}>El ROAS lleva 3 semanas por encima de 8x. Hay margen para escalar sin perder eficiencia.</p>
              </div>
              <Button variant="dark" size="sm" iconRight={<I.arrow />} style={{ marginTop: 18, alignSelf: 'flex-start' }}>Aplicar</Button>
            </Card>
          </div>
          <CampaignTable />
        </div>
      </div>
    </div>
  );
}

window.DashApp = DashApp;
