document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(location.search).get('id') || 1;
  const p = obtenerProducto(id);
  const contenedor = document.querySelector('#detalleProducto');

  if (!contenedor) return;

  if (!p) {
    contenedor.innerHTML = `
      <div class="col-12 text-center py-5">
        <h1 class="h3">Producto no encontrado</h1>
        <p class="text-muted">Vuelve al catálogo para elegir otra pulsera.</p>
        <a href="catalogo.html" class="btn btn-aurea">Volver al catálogo</a>
      </div>
    `;
    return;
  }

  contenedor.innerHTML = `
    <div class="col-lg-6">
      <div class="producto-detalle-img-container">
        <img id="imagenPrincipal" src="${p.imagenes[0]}" class="producto-detalle-img" alt="${p.nombre}">
      </div>
      <div class="d-flex flex-wrap gap-3 mt-3">
        ${p.imagenes.map(img => `
          <button type="button" class="miniatura" onclick="document.querySelector('#imagenPrincipal').src='${img}'" aria-label="Ver imagen de ${p.nombre}">
            <img src="${img}" alt="${p.nombre}">
          </button>
        `).join('')}
      </div>
    </div>
    <div class="col-lg-6">
      <span class="badge badge-aurea">${p.disponibilidad}</span>
      <h1 class="display-5 mt-3">${p.nombre}</h1>
      <p class="lead text-muted">${p.descripcionCompleta}</p>
      <h2 class="h4 precio">${formatoCLP(p.precio)}</h2>
      <hr>
      <h3 class="h5">Significado de la piedra</h3>
      <p>${p.significado}</p>
      <div class="d-grid gap-2 d-md-flex mt-4">
        <button class="btn btn-aurea btn-lg" onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
        <button class="btn btn-aurea-outline btn-lg" onclick="abrirWhatsApp('Hola Áurea, quiero comprar ${p.nombre} por ${formatoCLP(p.precio)}')">Comprar por WhatsApp</button>
      </div>
    </div>
  `;
});
