document.addEventListener('DOMContentLoaded', () => {
    const COOKIE_NAME = 'avantix_cookie_consent';

    // Check if user already gave consent
    if (!localStorage.getItem(COOKIE_NAME)) {
        injectCookiePopup();
    }

    function injectCookiePopup() {
        const popup = document.createElement('div');
        popup.className = 'cookie-popup active';
        popup.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-text">
                    <h4>🍪 Usamos cookies</h4>
                    <p>Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. Al continuar navegando, aceptas nuestra <a href="privacidad.html">Política de Privacidad</a>.</p>
                </div>
                <div class="cookie-actions">
                    <button class="cookie-btn decline" id="decline-cookies">Rechazar</button>
                    <button class="cookie-btn accept" id="accept-cookies">Aceptar todas</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);

        // Event Listeners
        document.getElementById('accept-cookies').addEventListener('click', () => {
            localStorage.setItem(COOKIE_NAME, 'accepted');
            closePopup(popup);
        });

        document.getElementById('decline-cookies').addEventListener('click', () => {
            localStorage.setItem(COOKIE_NAME, 'declined');
            closePopup(popup);
        });
    }

    function closePopup(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => el.remove(), 300);
    }
});
