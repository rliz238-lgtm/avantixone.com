// Full-bleed product sections (alternating bg)

function ProductSection({ tag, tagType, title, description, features, ctaPrimary, ctaSecondary, image, imagePlaceholder, reverse, theme }) {
  const sectionClass = `product-section ${theme || ''}`;
  return (
    <section className={sectionClass}>
      <div className={`product-grid ${reverse ? 'reverse' : ''}`}>
        <div className="product-text fade-in">
          {tag && <span className={`product-tag ${tagType || ''}`}>{tag}</span>}
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="product-features">
            {features.map((f, i) => (
              <li key={i} className="product-feature">
                <span className="product-feature-check">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="product-cta-row">
            <a href={ctaPrimary.href} className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}>
              {ctaPrimary.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            {ctaSecondary && (
              <a href={ctaSecondary.href} className="btn-link">
                {ctaSecondary.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            )}
          </div>
        </div>
        <div className="product-image fade-in delay-2">
          {image ? <img src={image} alt={title}/> : imagePlaceholder}
        </div>
      </div>
    </section>
  );
}

// Visual placeholder for facturación electrónica (browser invoice mockup)
function InvoiceMockup() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 24,
      padding: 24,
      boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
      transform: 'rotate(-1.5deg)',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #e8e8ed' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }}></span>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }}></span>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c940' }}></span>
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 12, color: '#86868b', fontWeight: 500 }}>facturaelectronica.avantixone.com</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#86868b', letterSpacing: '0.04em', marginBottom: 4 }}>FACTURA ELECTRÓNICA</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em' }}>FE-00001284</div>
          <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 4 }}>Aceptada por Hacienda · 28 abr 2026</div>
        </div>
        <div style={{ background: 'oklch(0.7 0.18 145 / 0.15)', color: 'oklch(0.45 0.18 145)', padding: '6px 12px', borderRadius: 980, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>●</span> ACEPTADA
        </div>
      </div>
      <div style={{ background: '#f5f5f7', borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: '#86868b', marginBottom: 4, fontWeight: 600 }}>CLIENTE</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#1d1d1f' }}>Tom Tom Wok S.A.</div>
        <div style={{ fontSize: 12, color: '#6e6e73' }}>Cédula jurídica: 3-101-789456</div>
      </div>
      {[
        { name: 'Plan Profesional · mensual', code: '8141501500', price: 25000 },
        { name: 'Setup inicial', code: '8011500100', price: 0 }
      ].map((row, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e8e8ed', fontSize: 13 }}>
          <div>
            <div style={{ fontWeight: 500, color: '#1d1d1f' }}>{row.name}</div>
            <div style={{ fontSize: 11, color: '#86868b' }}>CABYS: {row.code}</div>
          </div>
          <div style={{ fontWeight: 600, color: '#1d1d1f' }}>₡{row.price.toLocaleString('es-CR')}</div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, fontSize: 13, color: '#6e6e73' }}>
        <span>Subtotal</span><span>₡25,000</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6e6e73', marginTop: 4 }}>
        <span>IVA 13%</span><span>₡3,250</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#1d1d1f', fontWeight: 700, marginTop: 8, paddingTop: 12, borderTop: '1px solid #e8e8ed' }}>
        <span>Total</span><span>₡28,250</span>
      </div>
    </div>
  );
}

// Airbnb visual mockup
function AirbnbMockup() {
  const reservations = [
    { guest: 'María Rodríguez', dates: '15-18 mar', amount: 145000, status: 'Facturada' },
    { guest: 'John Anderson', dates: '20-25 mar', amount: 280000, status: 'Pendiente' },
    { guest: 'Sofía Méndez', dates: '28-31 mar', amount: 95000, status: 'Facturada' }
  ];
  return (
    <div style={{
      background: '#fff',
      borderRadius: 24,
      padding: 28,
      boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
      border: '1px solid #e8e8ed'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#6e6e73', letterSpacing: '0.04em' }}>RESERVAS IMPORTADAS</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4, color: '#1d1d1f', letterSpacing: '-0.02em' }}>Casa Manuel Antonio</div>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #FF385C, #E61E4D)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700 }}>A</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {reservations.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, background: '#f5f5f7', borderRadius: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: ['#3B82F6','#10B981','#F59E0B'][i], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>{r.guest[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f' }}>{r.guest}</div>
              <div style={{ fontSize: 12, color: '#86868b' }}>{r.dates} · ₡{r.amount.toLocaleString('es-CR')}</div>
            </div>
            <div style={{
              fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 980,
              background: r.status === 'Facturada' ? 'oklch(0.7 0.18 145 / 0.15)' : 'oklch(0.72 0.18 50 / 0.15)',
              color: r.status === 'Facturada' ? 'oklch(0.45 0.18 145)' : 'oklch(0.5 0.18 50)'
            }}>{r.status}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: 14, background: 'oklch(0.65 0.22 250 / 0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 18 }}>⚡</span>
        <div style={{ fontSize: 13, fontWeight: 500, color: '#1d1d1f' }}>3 reservas listas para facturar a Hacienda</div>
      </div>
    </div>
  );
}

window.ProductSection = ProductSection;
window.InvoiceMockup = InvoiceMockup;
window.AirbnbMockup = AirbnbMockup;
