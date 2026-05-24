// Footer + final CTA

function CTAFinal() {
  return (
    <section className="section cta-final">
      <div className="cta-final-bg"></div>
      <div className="cta-final-inner fade-in">
        <h2>Empezá hoy.<br/>Probalo gratis 7 días.</h2>
        <p>Sin tarjeta de crédito. Sin compromisos. Cancelá cuando quieras.</p>
        <div className="cta-final-btns">
          <a href="#productos" className="btn btn-light">
            Crear cuenta gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="https://wa.me/50663602181" className="btn btn-ghost" style={{ color: '#fff' }}>Hablar con ventas</a>
        </div>
        <div className="cta-final-trust">
          <span>Datos encriptados</span>
          <span>·</span>
          <span>Soporte en español</span>
          <span>·</span>
          <span>Hecho en Costa Rica</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="img/avatix_one_circle.png" alt="Avantix One" className="logo-img" />
            </div>
            <p>Software empresarial hecho en Costa Rica. Planillas, facturación electrónica y POS para restaurantes.</p>
          </div>
          <div className="footer-col">
            <h5>Productos</h5>
            <ul>
              <li><a href="#productos">Planillas</a></li>
              <li><a href="#productos">Facturación</a></li>
              <li><a href="#productos">POS Restaurantes</a></li>
              <li><a href="#productos">Hospedajes</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">Carreras</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Recursos</h5>
            <ul>
              <li><a href="soporte.html">Soporte</a></li>
              <li><a href="https://wa.me/50663602181">WhatsApp</a></li>
              <li><a href="mailto:info@avantixone.com">Email</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="terminos.html">Términos</a></li>
              <li><a href="privacidad.html">Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Avantix One. Todos los derechos reservados.</span>
          <span>info@avantixone.com · +506 6360-2181</span>
        </div>
      </div>
    </footer>
  );
}

window.CTAFinal = CTAFinal;
window.Footer = Footer;
