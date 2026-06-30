function renderCarrito() {
  const contenedor = document.querySelector('#carritoContenido');
  const carrito = obtenerCarrito();
  if (!contenedor) return;
  if (!carrito.length) {
    contenedor.innerHTML = '<div class="text-center py-5"><h2>Tu carrito está vacío</h2><a class="btn btn-aurea mt-3" href="catalogo.html">Ver catálogo</a></div>';
    return;
  }
  let total = 0;
  contenedor.innerHTML = carrito.map(item => {
    const p = obtenerProducto(item.id); const subtotal = p.precio * item.cantidad; total += subtotal;
    return `<div class="carrito-item">
      <img src="${p.imagenes[0]}" alt="${p.nombre}">
      <div class="flex-grow-1"><h3 class="h5">${p.nombre}</h3><p class="mb-1">${p.piedra}</p><strong>${formatoCLP(subtotal)}</strong></div>
      <div class="cantidad"><button onclick="cambiarCantidad(${p.id},-1)">-</button><span>${item.cantidad}</span><button onclick="cambiarCantidad(${p.id},1)">+</button></div>
      <button class="btn btn-sm btn-outline-danger" onclick="eliminarItem(${p.id})">Eliminar</button>
    </div>`;
  }).join('') + `<div class="carrito-total"><h2>Total: ${formatoCLP(total)}</h2><button class="btn btn-aurea btn-lg" onclick="comprarCarrito()">Comprar por WhatsApp</button></div>`;
}
function cambiarCantidad(id, cambio) {
  let carrito = obtenerCarrito().map(i => i.id === id ? {...i, cantidad: i.cantidad + cambio} : i).filter(i => i.cantidad > 0);
  guardarCarrito(carrito); renderCarrito();
}
function eliminarItem(id) { guardarCarrito(obtenerCarrito().filter(i => i.id !== id)); renderCarrito(); }
function comprarCarrito() {
  const carrito = obtenerCarrito(); let total = 0;
  const lineas = carrito.map(i => { const p = obtenerProducto(i.id); const sub = p.precio * i.cantidad; total += sub; return `- ${p.nombre} x${i.cantidad}: ${formatoCLP(sub)}`; });
  abrirWhatsApp(`Hola, quiero comprar:\n\n${lineas.join('\n')}\n\nTotal: ${formatoCLP(total)}`);
}
document.addEventListener('DOMContentLoaded', renderCarrito);
