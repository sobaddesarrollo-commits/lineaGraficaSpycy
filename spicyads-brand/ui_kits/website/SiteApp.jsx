/* SpicyAds — marketing website UI kit.
   Composes design-system primitives from the bundle namespace.
   Loaded by index.html via Babel; exposes window.SiteApp. */
const DS = window.SpicyAdsDesignSystem_ec6a90;
const { Button, Badge, Eyebrow, Input, Card, Stat, Avatar, Switch } = DS;

const MAX = 1180;

/* ---- tiny inline icons (stroke, 1.75) ---- */
const Ic = {
  arrow: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  target: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8"/></svg>,
  spark: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  chart: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 19V5M4 19h16M8 15v-3M12 15V8M16 15v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  search: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8"/><path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  play: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M8 5.5v13l11-6.5-11-6.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
  check: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

const LOGO = '../../assets/logo-aji.svg';

function Logo({ dark }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <img src={LOGO} alt="" style={{ width: 32, height: 32 }} />
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1 }}>
        <span style={{ color: dark ? '#fff' : 'var(--text-strong)' }}>Spicy</span>
        <span className="text-spice">Ads</span>
      </span>
    </div>
  );
}

/* ============================ HEADER ============================ */
function Header({ onContact }) {
  const links = ['Servicios', 'Casos', 'Equipo', 'Precios'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(23,18,16,0.72)',
      backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.10)',
    }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo dark />
        <nav style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <a key={l} href="#" style={{ color: 'var(--warm-200)', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Button variant="ghost" size="sm" as="a" href="#" style={{ color: '#fff' }}>Entrar</Button>
          <Button variant="primary" size="sm" iconRight={<Ic.arrow />} onClick={onContact}>Pide propuesta</Button>
        </div>
      </div>
    </header>
  );
}

/* ============================ HERO ============================ */
function Hero({ onContact }) {
  return (
    <section className="on-dark" style={{ background: 'var(--warm-900)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -160, right: -120, width: 520, height: 520, background: 'var(--gradient-ember)', filter: 'blur(40px)', opacity: 0.5, borderRadius: '50%' }} />
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '86px 24px 96px', position: 'relative' }}>
        <div style={{ maxWidth: 760 }}>
          <Eyebrow>Agencia de performance · Madrid</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(48px, 8vw, 92px)', lineHeight: 0.92, letterSpacing: '-0.02em', margin: '18px 0 0' }}>
            Más leads,<br /><span className="text-spice">menos humo</span>
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--warm-200)', maxWidth: 560, margin: '22px 0 0' }}>
            Diseñamos campañas de paid media que se miden en euros, no en likes. Sin postureo: te decimos la verdad aunque escueza.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" iconRight={<Ic.arrow />} onClick={onContact}>Pide tu propuesta</Button>
            <Button variant="secondary" size="lg" iconLeft={<Ic.play />} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.28)' }}>Ver casos</Button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
          <Stat tone="spice" value="6.4x" label="ROAS medio" />
          <Stat value="+312%" label="Leads cualificados" tone="spice" />
          <Stat value="14 €" label="CPA medio" tone="spice" />
          <Stat value="120+" label="Clientes" tone="spice" />
        </div>
      </div>
    </section>
  );
}

/* ============================ CLIENTS ============================ */
function Clients() {
  const names = ['NORTEÑO', 'Volta', 'Caldera', 'Mistral', 'Brío', 'Habanero'];
  return (
    <section style={{ background: 'var(--warm-950)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '26px 24px', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--warm-500)' }}>Marcas que confían</span>
        {names.map(n => (
          <span key={n} style={{ fontFamily: 'var(--font-display)', fontSize: 22, textTransform: 'uppercase', color: 'var(--warm-400)', letterSpacing: '0.02em' }}>{n}</span>
        ))}
      </div>
    </section>
  );
}

/* ============================ SERVICES ============================ */
function Services() {
  const items = [
    { ic: Ic.target, t: 'Paid Media', d: 'Google, Meta, TikTok y programática. Pujamos por lo que convierte, pausamos lo que quema.' },
    { ic: Ic.search, t: 'SEO & Contenidos', d: 'Posicionamiento técnico y contenido que responde a la intención de compra.' },
    { ic: Ic.spark, t: 'Creatividad', d: 'Conceptos, copy y piezas que paran el scroll. Probamos rápido, escalamos lo que gana.' },
    { ic: Ic.chart, t: 'Analítica & CRO', d: 'Tracking limpio, dashboards en tiempo real y experimentos para subir la conversión.' },
  ];
  return (
    <section style={{ background: 'var(--bg-page)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 44 }}>
          <div>
            <Eyebrow>Servicios</Eyebrow>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 1.04 }}>Todo lo que mueve la aguja</h2>
          </div>
          <p style={{ maxWidth: 360, color: 'var(--text-body)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>Un solo equipo, full-funnel. Sin traspasar tu cuenta entre cinco proveedores.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 18 }}>
          {items.map((it, i) => {
            const Icn = it.ic;
            return (
              <Card key={i} variant="default" pad="lg" hover>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--gradient-spice-soft)', color: 'var(--spice-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icn />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 8px' }}>{it.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>{it.d}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ CASE STUDY ============================ */
function CaseStudy() {
  return (
    <section style={{ background: 'var(--warm-100)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '88px 24px' }}>
        <Eyebrow>Caso de éxito</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 44, alignItems: 'center', marginTop: 24 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)', lineHeight: 1.06, margin: 0 }}>
              Cómo Caldera pasó de quemar presupuesto a un ROAS de 7,2x en 90 días
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text-body)', margin: '20px 0 26px' }}>
              Reestructuramos las campañas, limpiamos el tracking y reescribimos toda la creatividad. El resultado habla solo.
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar name="Lucía Pérez" ring />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 15 }}>Lucía Pérez</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>CMO, Caldera</div>
              </div>
            </div>
            <p style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--text-strong)', lineHeight: 1.5, margin: '22px 0 0', maxWidth: 440 }}>
              "Por fin una agencia que nos dice lo que no funciona. Brutalmente honestos y brutalmente efectivos."
            </p>
          </div>
          <Card variant="dark" pad="lg">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              <Stat tone="spice" value="7.2x" label="ROAS" />
              <Stat tone="spice" value="-46%" label="CPA" />
              <Stat tone="spice" value="+318%" label="Ventas" />
              <Stat tone="spice" value="90 d" label="Plazo" />
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '24px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <Badge tone="spice" variant="solid">Meta Ads</Badge>
              <Badge tone="neutral" variant="solid">Google Ads</Badge>
              <Badge tone="neutral" variant="solid">CRO</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ============================ PRICING ============================ */
function Pricing({ onContact }) {
  const [annual, setAnnual] = React.useState(true);
  const plans = [
    { name: 'Picante', price: annual ? 1200 : 1400, tag: 'Para empezar', feats: ['1 canal de paid', 'Informe mensual', 'Optimización quincenal'], featured: false },
    { name: 'Habanero', price: annual ? 2600 : 2950, tag: 'El más pedido', feats: ['3 canales full-funnel', 'Dashboard en vivo', 'Optimización semanal', 'Creatividad incluida'], featured: true },
    { name: 'Carolina', price: annual ? 4800 : 5400, tag: 'Escala sin techo', feats: ['Canales ilimitados', 'Equipo dedicado', 'CRO + analítica', 'Slack directo'], featured: false },
  ];
  return (
    <section style={{ background: 'var(--bg-page)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <Eyebrow dot>Precios</Eyebrow>
          <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '12px 0 0' }}>Sin permanencias ni letra pequeña</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginBottom: 40 }}>
          <span style={{ color: annual ? 'var(--text-muted)' : 'var(--text-strong)', fontWeight: 600, fontSize: 14 }}>Mensual</span>
          <Switch checked={annual} onChange={setAnnual} />
          <span style={{ color: annual ? 'var(--text-strong)' : 'var(--text-muted)', fontWeight: 600, fontSize: 14 }}>Anual</span>
          <Badge tone="success" variant="soft">−15%</Badge>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 18, alignItems: 'start' }}>
          {plans.map((p, i) => (
            <Card key={i} variant={p.featured ? 'spice' : 'default'} pad="lg" style={p.featured ? { transform: 'scale(1.02)' } : {}}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, textTransform: 'uppercase', color: p.featured ? '#fff' : 'var(--text-strong)' }}>{p.name}</span>
                {p.featured && <Badge tone="neutral" variant="solid" style={{ background: 'rgba(0,0,0,0.25)', color: '#fff' }}>{p.tag}</Badge>}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: p.featured ? '#fff' : 'var(--text-strong)' }}>{p.price.toLocaleString('es-ES')}€</span>
                <span style={{ color: p.featured ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', fontSize: 14 }}>/mes</span>
              </div>
              {!p.featured && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 18 }}>{p.tag}</div>}
              {p.featured && <div style={{ height: 18 }} />}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {p.feats.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: p.featured ? 'rgba(255,255,255,0.95)' : 'var(--text-body)' }}>
                    <span style={{ color: p.featured ? '#fff' : 'var(--spice-500)', display: 'inline-flex' }}><Ic.check /></span>{f}
                  </div>
                ))}
              </div>
              <Button full variant={p.featured ? 'dark' : 'primary'} onClick={onContact}>Empezar</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ CTA ============================ */
function CTA({ onContact }) {
  return (
    <section style={{ background: 'var(--warm-900)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '24px' }}>
        <div style={{ background: 'var(--gradient-spice)', borderRadius: 'var(--radius-xl)', padding: 'clamp(36px,6vw,72px)', textAlign: 'center', boxShadow: 'var(--glow-spice)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(34px,6vw,64px)', color: '#fff', lineHeight: 0.95, letterSpacing: '-0.02em', margin: 0 }}>
            ¿Hablamos sin rodeos?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 19, margin: '18px auto 30px', maxWidth: 520 }}>
            Auditamos tu cuenta gratis y te decimos qué cambiaríamos. Sin compromiso.
          </p>
          <Button variant="dark" size="lg" iconRight={<Ic.arrow />} onClick={onContact}>Pide tu auditoría gratis</Button>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  const cols = [
    { h: 'Servicios', l: ['Paid Media', 'SEO', 'Creatividad', 'Analítica'] },
    { h: 'Agencia', l: ['Casos', 'Equipo', 'Cultura', 'Empleo'] },
    { h: 'Recursos', l: ['Blog', 'Guías', 'Newsletter', 'Contacto'] },
  ];
  return (
    <footer style={{ background: 'var(--warm-950)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '56px 24px 36px', display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 32 }}>
        <div>
          <Logo dark />
          <p style={{ color: 'var(--warm-400)', fontSize: 14, lineHeight: 1.6, margin: '16px 0 0', maxWidth: 260 }}>
            Agencia de performance marketing. Madrid · Ciudad de México · remoto.
          </p>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--warm-500)', marginBottom: 14 }}>{c.h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.l.map(x => <a key={x} href="#" style={{ color: 'var(--warm-300)', fontSize: 14, textDecoration: 'none' }}>{x}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '18px 24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ color: 'var(--warm-500)', fontSize: 13 }}>© 2026 SpicyAds. Hecho con picante.</span>
        <span style={{ color: 'var(--warm-500)', fontSize: 13 }}>Privacidad · Cookies · Aviso legal</span>
      </div>
    </footer>
  );
}

/* ============================ CONTACT MODAL ============================ */
function ContactModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(14,10,9,0.6)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ width: 'min(460px, 100%)' }}>
        <Card variant="default" pad="lg">
          {!sent ? (
            <div>
              <Eyebrow>Auditoría gratis</Eyebrow>
              <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '12px 0 4px' }}>Cuéntanos tu reto</h3>
              <p style={{ color: 'var(--text-body)', fontSize: 15, margin: '0 0 20px' }}>Te respondemos en menos de 24 horas. Sin spam.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Input label="Nombre" placeholder="Tu nombre" />
                <Input label="Email" placeholder="hola@tuempresa.com" />
                <Input label="Web" prefix="https://" placeholder="tuempresa.com" />
                <Button full variant="primary" iconRight={<Ic.arrow />} onClick={() => setSent(true)}>Enviar</Button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--gradient-spice)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', boxShadow: 'var(--glow-spice)' }}><Ic.check /></div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-strong)', margin: '0 0 8px' }}>¡Recibido!</h3>
              <p style={{ color: 'var(--text-body)', margin: '0 0 22px' }}>Te escribimos en menos de 24h. Prepárate para hablar claro.</p>
              <Button variant="secondary" onClick={onClose}>Cerrar</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

function SiteApp() {
  const [modal, setModal] = React.useState(false);
  const open = () => setModal(true);
  return (
    <div>
      <Header onContact={open} />
      <Hero onContact={open} />
      <Clients />
      <Services />
      <CaseStudy />
      <Pricing onContact={open} />
      <CTA onContact={open} />
      <Footer />
      <ContactModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}

window.SiteApp = SiteApp;
