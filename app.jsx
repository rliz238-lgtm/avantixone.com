// Main app composition

function HowItWorks() {
  const steps = [
    {
      num: 'PASO 01',
      title: 'Creá tu cuenta',
      desc: 'En 2 minutos. Sin tarjeta de crédito. Sin instalaciones.',
      visual: (
        <div style={{ width: '100%', maxWidth: 280 }}>
          <div style={{ background: '#f5f5f7', borderRadius: 12, padding: 14, marginBottom: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 10, color: '#86868b', fontWeight: 600 }}>EMAIL</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#1d1d1f' }}>marco@torrestoresw.cr</div>
          </div>
          <div style={{ background: '#f5f5f7', borderRadius: 12, padding: 14, marginBottom: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 10, color: '#86868b', fontWeight: 600 }}>EMPRESA</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#1d1d1f' }}>Torres Tornería S.A.</div>
          </div>
          <div style={{ background: 'var(--accent)', color: '#fff', textAlign: 'center', padding: 12, borderRadius: 12, fontSize: 13, fontWeight: 600 }}>Crear cuenta →</div>
        </div>
      )
    },
    {
      num: 'PASO 02',
      title: 'Configurá tu negocio',
      desc: 'Importamos tus datos. Te guiamos por WhatsApp si lo necesitás.',
      visual: (
        <div style={{ width: '100%', maxWidth: 280 }}>
          {[
            { l: 'Datos fiscales', done: true },
            { l: 'Empleados / Productos', done: true },
            { l: 'Conectar Hacienda', done: true },
            { l: 'Probar primera factura', done: false }
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0' }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', background: s.done ? 'oklch(0.7 0.18 145)' : '#e8e8ed', color: s.done ? '#fff' : '#86868b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{s.done ? '✓' : i+1}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: s.done ? '#1d1d1f' : '#86868b' }}>{s.l}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      num: 'PASO 03',
      title: 'Operá y crecé',
      desc: 'Facturá, pagá planillas y cobrá pedidos. Todo automático.',
      visual: (
        <div style={{ width: '100%', maxWidth: 280, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { l: 'Facturas', v: '284', c: 'oklch(0.65 0.22 250)' },
            { l: 'Empleados', v: '12', c: 'oklch(0.7 0.18 145)' },
            { l: 'Ingresos', v: '₡8.4M', c: 'oklch(0.72 0.18 50)' },
            { l: 'Pedidos', v: '156', c: 'oklch(0.65 0.22 290)' }
          ].map((s, i) => (
            <div key={i} style={{ background: '#f5f5f7', borderRadius: 10, padding: 12 }}>
              <div style={{ fontSize: 10, color: '#86868b', fontWeight: 600, marginBottom: 4 }}>{s.l.toUpperCase()}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: s.c, letterSpacing: '-0.02em' }}>{s.v}</div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <section className="section" id="como-funciona">
      <div className="section-inner">
        <div className="section-header centered fade-in">
          <span className="eyebrow">Cómo funciona</span>
          <h2>Empezá en menos<br/>de una hora.</h2>
          <p className="lead">Sin instalaciones. Sin contratos. Sin contadores. Tres pasos para tener tu empresa corriendo en Avantix One.</p>
        </div>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div key={i} className={`how-step fade-in delay-${i+1}`}>
              <div className="how-step-visual">{s.visual}</div>
              <div className="how-step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  // Scroll fade-in observer
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 50);

    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Hero />

      <section className="section" id="productos" style={{ paddingBottom: 0 }}>
        <div className="section-inner">
          <div className="section-header centered fade-in">
            <span className="eyebrow">Productos</span>
            <h2>Una plataforma.<br/>Todo tu negocio.</h2>
            <p className="lead">Cuatro productos diseñados para trabajar juntos. Empezá con uno y agregá los demás cuando los necesités.</p>
          </div>
        </div>
      </section>

      <ProductSection
        tag="POS · En desarrollo"
        tagType="beta"
        title={<span>El POS más completo <br/><span style={{ color: 'var(--accent)' }}>para restaurantes ticos.</span></span>}
        description="Punto de venta, KDS para cocina, menú digital con QR, delivery con mapas y kiosko de autoservicio. Todo en un solo sistema."
        features={[
          'Terminal touchscreen y modo offline',
          'KDS para cocina con tiempos en tiempo real',
          'Menú digital con QR — pedidos sin app',
          'Delivery con seguimiento y mapas',
          'Chat IA para tomar pedidos por WhatsApp'
        ]}
        ctaPrimary={{ label: 'Reservar acceso', href: '#productos' }}
        ctaSecondary={{ label: 'Ver demo en vivo', href: '#' }}
        image="img/pos-avantix-one.png"
        reverse={false}
      />

      <ProductSection
        theme="dark"
        tag="Planillas · Más vendido"
        title={<span>Planillas que se calculan <br/><span style={{ color: 'oklch(0.85 0.15 240)' }}>solas.</span></span>}
        description="Calculá CCSS, renta y horas extra automáticamente. Enviá comprobantes por WhatsApp. Exportá a CCSS en un click."
        features={[
          'Cálculo automático de CCSS y renta',
          'Horas extra, días dobles y feriados',
          'Comprobantes por WhatsApp con un click',
          'Exportación lista para CCSS',
          'Registro de asistencia con GPS'
        ]}
        ctaPrimary={{ label: 'Probar gratis 7 días', href: '#productos' }}
        ctaSecondary={{ label: 'Ver pricing', href: '#productos' }}
        image="img/payroll-illustration.png"
        reverse={true}
      />

      <PayrollDemo />

      <ProductSection
        theme="dark"
        tag="Facturación electrónica"
        title={<span>Facturación electrónica <br/><span style={{ color: 'oklch(0.85 0.15 240)' }}>autorizada por Hacienda.</span></span>}
        description="Software completo de facturación con MH v4.4. Compras, inventario, contabilidad y declaraciones automáticas — todo desde una sola plataforma."
        features={[
          'Factura, tiquete y notas (MH v4.4)',
          'Compras, inventario y crédito',
          'Cuentas por cobrar y pagar',
          'Contabilidad automática',
          'Declaraciones D-104 y D-103 listas'
        ]}
        ctaPrimary={{ label: 'Empezar desde ₡5,000/mes', href: '#productos' }}
        ctaSecondary={{ label: 'Ver pricing', href: '#productos' }}
        imagePlaceholder={<InvoiceMockup/>}
        reverse={false}
      />

      <ProductSection
        tag="Hospedajes"
        tagType="new"
        title={<span>¿Alquilás en Airbnb?<br/><span style={{ color: 'var(--accent)' }}>Facturá sin complicaciones.</span></span>}
        description="Importá automáticamente tus reservas de Airbnb y generá facturas electrónicas válidas ante Hacienda. Múltiples propiedades en un solo lugar."
        features={[
          'Importación automática desde Airbnb',
          'Factura o tiquete electrónico (MH)',
          'IVA 13% y código CABYS automático',
          'Múltiples propiedades en un solo lugar',
          'Reportes mensuales para Hacienda'
        ]}
        ctaPrimary={{ label: 'Empezar desde ₡10,000/mes', href: '#productos' }}
        ctaSecondary={{ label: 'Ver pricing', href: '#productos' }}
        imagePlaceholder={<AirbnbMockup/>}
        reverse={true}
      />

      <HowItWorks />
      <Comparison />
      <FAQ />
      <CTAFinal />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
