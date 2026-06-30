const WHATSAPP_NUMBER = '56930639470';

function abrirWhatsApp(mensaje) {
  const texto = encodeURIComponent(mensaje || 'Hola Áurea, quiero consultar por las pulseras.');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
}

function crearBotonWhatsApp() {
  const btn = document.createElement('button');
  btn.className = 'whatsapp-float';
  btn.innerHTML = '<i class="bi bi-whatsapp"></i>';
  btn.setAttribute('aria-label', 'Contactar por WhatsApp');
  btn.addEventListener('click', () => abrirWhatsApp());
  document.body.appendChild(btn);
}

function activarEnlacesWhatsApp() {
  document.querySelectorAll('[data-whatsapp-action]').forEach(enlace => {
    enlace.addEventListener('click', event => {
      event.preventDefault();
      abrirWhatsApp(enlace.dataset.whatsappMessage);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  crearBotonWhatsApp();
  activarEnlacesWhatsApp();
});
