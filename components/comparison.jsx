// Comparison table

const COMPARISON_ROWS = [
  { feature: 'Hecho para Costa Rica', avantix: true, intl: false, excel: false },
  { feature: 'Facturación electrónica MH v4.4', avantix: true, intl: 'parcial', excel: false },
  { feature: 'Cálculo automático CCSS', avantix: true, intl: false, excel: false },
  { feature: 'Soporte en español por WhatsApp', avantix: true, intl: false, excel: false },
  { feature: 'Precio en colones (sin USD)', avantix: true, intl: false, excel: true },
  { feature: 'Setup en menos de 1 hora', avantix: true, intl: false, excel: 'manual' },
  { feature: 'Comprobantes automáticos por WhatsApp', avantix: true, intl: false, excel: false },
  { feature: 'Sin contador adicional', avantix: true, intl: 'parcial', excel: false }
];

function CompCell({ value }) {
  if (value === true) return <span className="comparison-yes">✓</span>;
  if (value === false) return <span className="comparison-no">−</span>;
  return <span style={{ fontSize: 13, fontWeight: 500, color: '#86868b' }}>{value === 'parcial' ? 'Parcial' : value}</span>;
}

function Comparison() {
  return (
    <section className="section gray" id="comparativa">
      <div className="section-inner">
        <div className="section-header centered fade-in">
          <span className="eyebrow">Comparativa</span>
          <h2>Por qué empresas eligen<br/>Avantix One.</h2>
          <p className="lead">Software internacional no entiende Costa Rica. Excel no escala. Avantix One es la única opción hecha 100% para el mercado tico.</p>
        </div>

        <div className="comparison-wrap fade-in">
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Característica</th>
                <th className="featured" style={{ textAlign: 'center' }}>Avantix One</th>
                <th style={{ textAlign: 'center' }}>Software internacional</th>
                <th style={{ textAlign: 'center' }}>Excel + Contador</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td className="featured" style={{ textAlign: 'center' }}><CompCell value={row.avantix}/></td>
                  <td style={{ textAlign: 'center' }}><CompCell value={row.intl}/></td>
                  <td style={{ textAlign: 'center' }}><CompCell value={row.excel}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

window.Comparison = Comparison;
