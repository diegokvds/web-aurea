const WHATSAPP_NUMBER = '56930639470';
function abrirWhatsApp(mensaje) {
  const texto = encodeURIComponent(mensaje || 'Hola, quiero consultar por las pulseras Áurea.');
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
document.addEventListener('DOMContentLoaded', crearBotonWhatsApp);
