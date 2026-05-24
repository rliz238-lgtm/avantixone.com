// Live payroll calculation demo

function PayrollDemo() {
  const [salary, setSalary] = React.useState(500000);
  const [name, setName] = React.useState('Carlos Jiménez');
  const [extras, setExtras] = React.useState(0);

  // Costa Rica payroll math (simplified)
  const ccss = Math.round(salary * 0.1067); // employee CCSS contribution ~10.67%
  const renta = salary > 941000 ? Math.round((salary - 941000) * 0.10) : 0;
  const extrasAmount = extras * Math.round((salary / 240) * 1.5); // hora extra approx
  const gross = salary + extrasAmount;
  const net = gross - ccss - renta;
  const fmt = (n) => '₡' + n.toLocaleString('es-CR');

  return (
    <section className="section gray" id="planillas-demo">
      <div className="section-inner">
        <div className="section-header centered fade-in">
          <span className="eyebrow">Planillas en vivo</span>
          <h2>Calculá una planilla<br/>en 10 segundos.</h2>
          <p className="lead">Probá el cálculo automático. CCSS, renta y horas extra — todo se ajusta en tiempo real según las leyes de Costa Rica.</p>
        </div>

        <div className="payroll-demo">
          <div className="payroll-demo-left fade-in">
            <div className="payroll-demo-input-wrap">
              <h4 style={{ marginBottom: 24 }}>Datos del empleado</h4>
              <div className="payroll-input-row">
                <label>Nombre</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="payroll-input-row">
                <label>Salario bruto mensual (₡)</label>
                <input type="number" value={salary} onChange={(e) => setSalary(Math.max(0, +e.target.value))} step="50000"/>
              </div>
              <div className="payroll-input-row">
                <label>Horas extra del mes</label>
                <input type="number" value={extras} onChange={(e) => setExtras(Math.max(0, +e.target.value))} step="1"/>
              </div>
              <div style={{ marginTop: 16, fontSize: 13, color: '#86868b', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'oklch(0.7 0.18 145)' }}></span>
                Cálculos basados en legislación CR vigente
              </div>
            </div>
          </div>

          <div className="payroll-result fade-in delay-2">
            <div className="payroll-result-header">
              <div>
                <div className="payroll-result-label">EMPLEADO</div>
                <div className="payroll-result-name">{name || 'Sin nombre'}</div>
              </div>
              <span className="payroll-result-badge">● LISTO</span>
            </div>
            <div className="payroll-result-net">{fmt(net)}</div>
            <div className="payroll-result-net-label">Salario neto a recibir</div>
            <div className="payroll-result-rows">
              <div className="payroll-result-row"><span>Salario base</span><span>{fmt(salary)}</span></div>
              {extras > 0 && (
                <div className="payroll-result-row"><span>Horas extra ({extras})</span><span>+{fmt(extrasAmount)}</span></div>
              )}
              <div className="payroll-result-row"><span>Salario bruto</span><span>{fmt(gross)}</span></div>
              <div className="payroll-result-row deduction"><span>CCSS (10.67%)</span><span>−{fmt(ccss)}</span></div>
              <div className="payroll-result-row deduction"><span>Renta</span><span>−{fmt(renta)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PayrollDemo = PayrollDemo;
