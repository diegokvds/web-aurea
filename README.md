# Áurea Frontend

Catálogo estático para pulseras artesanales con carrito funcional y compra por WhatsApp.

## Cómo ejecutar

1. Abre Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Abre la carpeta `AureaFrontend`.
4. Haz clic derecho sobre `index.html`.
5. Selecciona **Open with Live Server**.

También puedes abrir `index.html` directamente en el navegador.

## Cambiar número de WhatsApp

Edita `js/whatsapp.js`:

```js
const WHATSAPP_NUMBER = '56912345678';
```

Usa formato internacional sin `+`.

## Agregar productos

Edita `js/productos.js` y agrega un nuevo objeto al arreglo `PRODUCTOS`.

## Cambiar logo

Reemplaza el archivo:

`img/logo/aurea-logo.jpeg`

manteniendo el mismo nombre.

## Cambiar colores

Edita las variables dentro de `css/style.css` en la sección `:root`.
