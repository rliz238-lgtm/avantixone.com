// Interactive pricing comparator

const PRICING_DATA = {
  facturacion: {
    label: 'Facturación electrónica',
    plans: [
      { name: 'Esencial', price: 5000, desc: 'Para emprendedores y profesionales independientes.', features: ['Hasta 50 facturas/mes', 'Factura y tiquete electrónico', 'Notas de crédito y débito', '1 usuario', 'Soporte por correo'], cta: 'Empezar gratis' },
      { name: 'Profesional', price: 15000, desc: 'Para PYMEs con operación activa.', features: ['Facturas ilimitadas', 'Compras e inventario', 'Cuentas por cobrar y pagar', 'Hasta 5 usuarios', 'Soporte por WhatsApp', 'Multi-sucursal'], cta: 'Probar 7 días gratis', featured: true },
      { name: 'Empresarial', price: 35000, desc: 'Contabilidad completa y declaraciones.', features: ['Todo de Profesional', 'Contabilidad y libros', 'Declaraciones automáticas (D-104, D-103)', 'Usuarios ilimitados', 'Soporte prioritario 24/7', 'API y integraciones'], cta: 'Hablar con ventas' }
    ]
  },
  planillas: {
    label: 'Planillas',
    plans: [
      { name: 'Starter', price: 8000, desc: 'Para empresas pequeñas hasta 10 empleados.', features: ['Hasta 10 empleados', 'Cálculo CCSS automático', 'Comprobantes por WhatsApp', 'Exportación CCSS', 'Soporte por correo'], cta: 'Empezar gratis' },
      { name: 'Business', price: 18000, desc: 'Para empresas con equipo en crecimiento.', features: ['Hasta 50 empleados', 'Horas extra y días dobles', 'Registro asistencia con GPS', 'Reportes y analítica', 'Soporte WhatsApp', 'Multi-sucursal'], cta: 'Probar 7 días gratis', featured: true },
      { name: 'Enterprise', price: 38000, desc: 'Empresas grandes con planillas complejas.', features: ['Empleados ilimitados', 'Múltiples regímenes', 'Integraciones API', 'Onboarding dedicado', 'Soporte prioritario 24/7', 'SLA garantizado'], cta: 'Hablar con ventas' }
    ]
  },
  pos: {
    label: 'POS Restaurantes',
    plans: [
      { name: 'Café', price: 12000, desc: 'Cafeterías y soda pequeñas.', features: ['1 terminal POS', 'Menú digital con QR', 'Hasta 50 productos', 'Reportes diarios', 'Soporte por correo'], cta: 'Reservar acceso' },
      { name: 'Restaurante', price: 28000, desc: 'Restaurantes con cocina activa.', features: ['Hasta 3 terminales', 'KDS para cocina', 'Pedidos online y delivery', 'Inventario y costos', 'Soporte WhatsApp', 'Multi-mesa'], cta: 'Reservar acceso', featured: true },
      { name: 'Cadena', price: 65000, desc: 'Cadenas y franquicias.', features: ['Terminales ilimitadas', 'Multi-sucursal', 'Chat IA para pedidos', 'Kiosko autoservicio', 'Soporte 24/7', 'API completa'], cta: 'Hablar con ventas' }
    ]
  }
};

function Pricing() {
  const [tab, setTab] = React.useState('facturacion');
  const data = PRICING_DATA[tab];
  const fmt = (n) => '₡' + n.toLocaleString('es-CR');

  return (
    <section className="section" id="precios">
      <div className="section-inner">
        <div className="section-header centered fade-in">
          <span className="eyebrow">Precios</span>
          <h2>Precios simples.<br/>Sin sorpresas.</h2>
          <p className="lead">Empezá gratis 7 días. Sin tarjeta de crédito. Cancelá cuando quieras.</p>
        </div>

        <div style={{ textAlign: 'center' }} className="fade-in">
          <div className="pricing-tabs">
            {Object.keys(PRICING_DATA).map(key => (
              <div
                key={key}
                className={`pricing-tab ${tab === key ? 'active' : ''}`}
                onClick={() => setTab(key)}
              >{PRICING_DATA[key].label}</div>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {data.plans.map((plan, i) => (
            <div key={plan.name} className={`pricing-card fade-in delay-${i+1} ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <span className="pricing-badge">Más popular</span>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price-row">
                <span className="pricing-price">{fmt(plan.price)}</span>
                <span className="pricing-period">/mes</span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="pricing-btn">{plan.cta}</button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: '#86868b' }}>
          ¿Necesitás algo a medida? <a href="#" style={{ color: 'var(--accent)', fontWeight: 600 }}>Hablá con nuestro equipo →</a>
        </p>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
