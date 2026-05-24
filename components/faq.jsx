// FAQ accordion

const FAQS = [
  { q: '¿Cuánto tiempo tarda la implementación?', a: 'La mayoría de nuestros clientes están operando en menos de una hora. Te guiamos en el setup inicial por WhatsApp y migramos tus datos sin costo adicional.' },
  { q: '¿Necesito un contador?', a: 'No es necesario. Avantix One automatiza facturación electrónica, planillas y declaraciones D-104 y D-103. Aún así, podés invitar a tu contador con permisos de solo lectura cuando quieras.' },
  { q: '¿Funciona sin internet?', a: 'El POS para restaurantes tiene modo offline (PWA). Si se cae la conexión, podés seguir tomando órdenes y se sincronizan cuando vuelve. Facturación electrónica requiere internet por requerimiento del Ministerio de Hacienda.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí. No hay contratos a largo plazo. Cancelás desde el panel y mantenés acceso hasta el final del período pagado. Te ayudamos a exportar tus datos sin costo.' },
  { q: '¿Está autorizado por Hacienda?', a: 'Sí. Avantix One está certificado por el Ministerio de Hacienda de Costa Rica para emitir factura electrónica v4.4, tiquete electrónico, notas de crédito y débito.' },
  { q: '¿Qué pasa con mis datos si cambio de proveedor?', a: 'Tus datos son tuyos. Podés exportar todo en formato Excel/CSV en cualquier momento desde el panel. Sin pagos extra, sin condiciones.' },
  { q: '¿Hay descuentos para pago anual?', a: 'Sí, ofrecemos 2 meses gratis si pagás anual (equivale a un 16% de descuento). También tenemos planes especiales para ONGs y emprendedores.' }
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <div className="section-header centered fade-in">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2>Las dudas más comunes.</h2>
          <p className="lead">¿No encontrás tu respuesta? Escribinos por WhatsApp al 6360-2181 y te ayudamos.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item fade-in ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-q">
                <span>{faq.q}</span>
                <span className="faq-toggle"></span>
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
