# Áurea Frontend

Catálogo estático para pulseras artesanales con carrito funcional y compra por WhatsApp.

Esta versión no tiene página de contacto ni formulario. El flujo principal es:

**Inicio → Catálogo → Detalle del producto → Carrito → WhatsApp**

## Cómo ejecutar

1. Abre Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Abre la carpeta `AureaFrontendSinContacto`.
4. Haz clic derecho sobre `index.html`.
5. Selecciona **Open with Live Server**.

También puedes abrir `index.html` directamente en el navegador.

## Cambiar número de WhatsApp

Edita `js/whatsapp.js`:

```js
const WHATSAPP_NUMBER = '56930639470';
```

Usa formato internacional sin `+`.

## Agregar productos

Edita `js/productos.js` y agrega un nuevo objeto al arreglo `PRODUCTOS`.

El `id` debe ser único:

```js
{
  id: 5,
  nombre: 'Pulsera Labradorita',
  precio: 24990,
  piedra: 'Labradorita',
  descripcion: 'Protección e intuición.',
  descripcionCompleta: 'Pulsera artesanal de labradorita natural.',
  imagenes: ['img/productos/pulsera-labradorita.jpg'],
  disponibilidad: 'Disponible',
  categoria: 'Protección',
  significado: 'La labradorita se asocia con protección, intuición y transformación.',
  destacado: false
}
```

## Productos destacados

Los productos destacados del inicio se controlan con la propiedad:

```js
destacado: true
```

Si un producto no debe aparecer en inicio, usa:

```js
destacado: false
```

## Imágenes de productos

Las imágenes ya no requieren clases especiales por producto. Todas se ajustan automáticamente dentro de contenedores reutilizables:

- `.producto-img-container` y `.producto-img` para cards.
- `.producto-detalle-img-container` y `.producto-detalle-img` para detalle.
- `.carrito-img-container` y `.carrito-img` para carrito.

Para agregar una imagen nueva, solo copia el archivo en `img/productos/` y referencia su ruta en `js/productos.js`.

Recomendación para que el catálogo se vea más profesional:

- Usa imágenes cuadradas o similares, idealmente 1200 x 1200 px.
- Mantén el producto centrado.
- Usa fondo claro o transparente.
- Evita imágenes con mucho espacio vacío alrededor.

## Cambiar logo

Reemplaza el archivo:

`img/logo/aurea-logo.jpeg`

manteniendo el mismo nombre.

## Cambiar colores

Edita las variables dentro de `css/style.css` en la sección `:root`.
