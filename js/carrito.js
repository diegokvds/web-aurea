function renderCarrito() {
  const contenedor = document.querySelector('#carritoContenido');
  const carrito = obtenerCarrito();

  if (!contenedor) return;

  if (!carrito.length) {
    contenedor.innerHTML = `
      <div class="text-center py-5">
        <h2>Tu carrito está vacío</h2>
        <p class="text-muted">Agrega una o más pulseras antes de enviar tu pedido.</p>
        <div class="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
          <a class="btn btn-aurea" href="catalogo.html">Ver catálogo</a>
          <a class="btn btn-aurea-outline" href="#" data-whatsapp-action>Consultar por WhatsApp</a>
        </div>
      </div>
    `;
    activarEnlacesWhatsApp();
    return;
  }

  let total = 0;

  contenedor.innerHTML = carrito.map(item => {
    const p = obtenerProducto(item.id);
    if (!p) return '';

    const subtotal = p.precio * item.cantidad;
    total += subtotal;

    return `
      <div class="carrito-item">
        <div class="carrito-img-container">
          <img src="${p.imagenes[0]}" class="carrito-img" alt="${p.nombre}">
        </div>
        <div class="flex-grow-1">
          <h3 class="h5">${p.nombre}</h3>
          <p class="mb-1">${p.piedra}</p>
          <strong>${formatoCLP(subtotal)}</strong>
        </div>
        <div class="cantidad" aria-label="Cantidad">
          <button onclick="cambiarCantidad(${p.id}, -1)" aria-label="Disminuir cantidad">-</button>
          <span>${item.cantidad}</span>
          <button onclick="cambiarCantidad(${p.id}, 1)" aria-label="Aumentar cantidad">+</button>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="eliminarItem(${p.id})">Eliminar</button>
      </div>
    `;
  }).join('') + `
    <div class="carrito-total">
      <h2>Total: ${formatoCLP(total)}</h2>
      <button class="btn btn-aurea btn-lg" onclick="comprarCarrito()">Enviar pedido por WhatsApp</button>
    </div>
  `;
}

function cambiarCantidad(id, cambio) {
  const carrito = obtenerCarrito()
    .map(i => i.id === id ? { ...i, cantidad: i.cantidad + cambio } : i)
    .filter(i => i.cantidad > 0);

  guardarCarrito(carrito);
  renderCarrito();
}

function eliminarItem(id) {
  guardarCarrito(obtenerCarrito().filter(i => i.id !== id));
  renderCarrito();
}

function comprarCarrito() {
  const carrito = obtenerCarrito();
  let total = 0;

  const lineas = carrito.map(i => {
    const p = obtenerProducto(i.id);
    if (!p) return '';

    const sub = p.precio * i.cantidad;
    total += sub;
    return `• ${p.nombre} x${i.cantidad}: ${formatoCLP(sub)}`;
  }).filter(Boolean);

  abrirWhatsApp(`Hola Áurea 👋\n\nQuiero hacer el siguiente pedido:\n\n${lineas.join('\n')}\n\nTotal: ${formatoCLP(total)}\n\nMi nombre es:`);
}

document.addEventListener('DOMContentLoaded', renderCarrito);
