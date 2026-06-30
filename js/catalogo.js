document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('#productosCatalogo');
  const destacados = document.querySelector('#productosDestacados');

  const render = (lista, destino) => {
    if (!destino) return;

    destino.innerHTML = lista.map(p => `
      <article class="col-12 col-md-6 col-lg-3">
        <div class="card producto-card h-100">
          <div class="producto-img-container">
            <img src="${p.imagenes[0]}" class="producto-img" alt="${p.nombre}">
          </div>
          <div class="card-body d-flex flex-column">
            <span class="badge badge-aurea mb-2">${p.categoria}</span>
            <h3 class="h5">${p.nombre}</h3>
            <p class="text-muted small mb-1">${p.piedra}</p>
            <p>${p.descripcion}</p>
            <strong class="precio mb-3">${formatoCLP(p.precio)}</strong>
            <div class="mt-auto d-grid gap-2">
              <a href="producto.html?id=${p.id}" class="btn btn-aurea-outline">Ver más</a>
              <button class="btn btn-aurea" onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  };

  const productosDestacados = PRODUCTOS.filter(producto => producto.destacado);

  render(PRODUCTOS, contenedor);
  render(productosDestacados.length ? productosDestacados : PRODUCTOS.slice(0, 4), destacados);
});
