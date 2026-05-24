// Hero with interactive POS mockup

const MENU_ITEMS = {
  'Más vendidos': [
    { id: 'm1', name: 'Casado Pollo', price: 4500, emoji: '🍛' },
    { id: 'm2', name: 'Hamburguesa', price: 3800, emoji: '🍔' },
    { id: 'm3', name: 'Pizza Margarita', price: 5500, emoji: '🍕' },
    { id: 'm4', name: 'Tacos al pastor', price: 3200, emoji: '🌮' }
  ],
  'Bebidas': [
    { id: 'b1', name: 'Café Americano', price: 1200, emoji: '☕' },
    { id: 'b2', name: 'Smoothie Tropical', price: 2800, emoji: '🥤' },
    { id: 'b3', name: 'Agua mineral', price: 900, emoji: '💧' },
    { id: 'b4', name: 'Cerveza Imperial', price: 2200, emoji: '🍺' }
  ],
  'Postres': [
    { id: 'p1', name: 'Cheesecake', price: 2800, emoji: '🍰' },
    { id: 'p2', name: 'Helado Artesanal', price: 1800, emoji: '🍨' },
    { id: 'p3', name: 'Brownie', price: 2200, emoji: '🍫' },
    { id: 'p4', name: 'Flan casero', price: 2000, emoji: '🍮' }
  ]
};

function Hero() {
  const [activeCat, setActiveCat] = React.useState('Más vendidos');
  const [cart, setCart] = React.useState([]);
  const [toast, setToast] = React.useState('');
  const toastTimer = React.useRef(null);

  function addItem(item) {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setToast(`✓ ${item.name} agregado`);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 1500);
  }

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const iva = Math.round(subtotal * 0.13);
  const total = subtotal + iva;
  const fmt = (n) => '₡' + n.toLocaleString('es-CR');

  return (
    <section className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="hero-text fade-in visible">
          <h1>
            El sistema operativo<br/>
            de tu <span className="hero-highlight">restaurante.</span>
          </h1>
          <p className="hero-lead">
            Punto de venta, cocina, delivery y facturación electrónica. Todo en uno, hecho para Costa Rica.
          </p>
          <div className="hero-ctas">
            <a href="#productos" className="btn btn-primary">
              Empezar gratis
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#como-funciona" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              Ver cómo funciona
            </a>
          </div>
          <div className="hero-trust">
            <span><span className="check">✓</span> 7 días gratis</span>
            <span><span className="check">✓</span> Sin tarjeta</span>
            <span><span className="check">✓</span> Soporte en español</span>
          </div>
        </div>

        <div className="hero-mockup-wrap fade-in delay-2 visible">
          <div className="pos-frame">
            <div className="pos-screen">
              <div className="pos-menu">
                <div className="pos-menu-header">
                  <h5>Mesa 4 · Pedido #1284</h5>
                  <span>14:32</span>
                </div>
                <div className="pos-categories">
                  {Object.keys(MENU_ITEMS).map(cat => (
                    <div
                      key={cat}
                      className={`pos-cat ${activeCat === cat ? 'active' : ''}`}
                      onClick={() => setActiveCat(cat)}
                    >{cat}</div>
                  ))}
                </div>
                <div className="pos-items">
                  {MENU_ITEMS[activeCat].map(item => (
                    <div key={item.id} className="pos-item" onClick={() => addItem(item)}>
                      <div className="pos-item-img">{item.emoji}</div>
                      <div className="pos-item-name">{item.name}</div>
                      <div className="pos-item-price">{fmt(item.price)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pos-cart">
                <div className="pos-cart-header">
                  <h5>Cuenta actual</h5>
                  <span>{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
                </div>
                <div className="pos-cart-items">
                  {cart.length === 0 ? (
                    <div className="pos-cart-empty">
                      <div style={{ fontSize: 24 }}>🍽️</div>
                      <div>Toca un producto<br/>para agregarlo</div>
                    </div>
                  ) : cart.map(item => (
                    <div key={item.id} className="pos-cart-item">
                      <div className="pos-cart-qty">{item.qty}</div>
                      <div className="pos-cart-name">{item.name}</div>
                      <div className="pos-cart-price">{fmt(item.price * item.qty)}</div>
                    </div>
                  ))}
                </div>
                <div className="pos-cart-totals">
                  <div className="pos-cart-row"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
                  <div className="pos-cart-row"><span>IVA 13%</span><span>{fmt(iva)}</span></div>
                  <div className="pos-cart-row total"><span>Total</span><span>{fmt(total)}</span></div>
                </div>
                <div className={`pos-cart-pay ${cart.length === 0 ? 'disabled' : ''}`}>
                  {cart.length === 0 ? 'Selecciona productos' : 'Cobrar →'}
                </div>
              </div>
            </div>
          </div>
          <div className={`pos-toast ${toast ? 'show' : ''}`}>{toast}</div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
