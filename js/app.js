const formatoCLP = valor => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(valor);
const obtenerProducto = id => PRODUCTOS.find(p => p.id === Number(id));
function obtenerCarrito() { return JSON.parse(localStorage.getItem('aureaCarrito')) || []; }
function guardarCarrito(carrito) { localStorage.setItem('aureaCarrito', JSON.stringify(carrito)); actualizarContadorCarrito(); }
function agregarAlCarrito(id, cantidad = 1) {
  const carrito = obtenerCarrito();
  const item = carrito.find(i => i.id === Number(id));
  item ? item.cantidad += cantidad : carrito.push({ id: Number(id), cantidad });
  guardarCarrito(carrito);
  mostrarToast('Producto agregado al carrito');
}
function actualizarContadorCarrito() {
  const total = obtenerCarrito().reduce((acc, item) => acc + item.cantidad, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = total);
}
function mostrarToast(texto) {
  const toast = document.createElement('div');
  toast.className = 'toast-aurea';
  toast.textContent = texto;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);
