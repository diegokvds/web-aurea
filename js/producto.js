document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(location.search).get('id') || 1;
  const p = obtenerProducto(id);
  const contenedor = document.querySelector('#detalleProducto');
  if (!p || !contenedor) { contenedor.innerHTML = '<p>Producto no encontrado.</p>'; return; }
  contenedor.innerHTML = `
    <div class="col-lg-6">
      <img id="imagenPrincipal" src="${p.imagenes[0]}" class="img-fluid producto-detalle-img" alt="${p.nombre}">
      <div class="d-flex gap-3 mt-3">${p.imagenes.map(img => `<img src="${img}" class="miniatura" onclick="document.querySelector('#imagenPrincipal').src='${img}'" alt="${p.nombre}">`).join('')}</div>
    </div>
    <div class="col-lg-6">
      <span class="badge badge-aurea">${p.disponibilidad}</span>
      <h1 class="display-5 mt-3">${p.nombre}</h1>
      <p class="lead text-muted">${p.descripcionCompleta}</p>
      <h2 class="h4 precio">${formatoCLP(p.precio)}</h2>
      <hr>
      <h3 class="h5">Materiales</h3><ul>${p.materiales.map(m => `<li>${m}</li>`).join('')}</ul>
      <h3 class="h5">Significado de la piedra</h3><p>${p.significado}</p>
      <div class="d-grid gap-2 d-md-flex mt-4">
        <button class="btn btn-aurea btn-lg" onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
        <button class="btn btn-aurea-outline btn-lg" onclick="abrirWhatsApp('Hola, quiero comprar ${p.nombre} por ${formatoCLP(p.precio)}')">Comprar por WhatsApp</button>
      </div>
    </div>`;
});
