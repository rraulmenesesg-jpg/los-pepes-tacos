# Documentación Técnica
## Taquería Los Pepes — Menú Digital

**Versión:** 1.0  
**Repositorio:** https://github.com/rraulmenesesg-jpg/los-pepes-tacos.git  
**Sitio publicado:** https://los-pepes-tacos.netlify.app/  

---

### 1. Descripción general

El proyecto consiste en una aplicación web estática para visualizar el menú digital de Taquería Los Pepes.

La solución utiliza HTML, CSS y JavaScript para presentar la información del menú, gestionar las interacciones de copiado y proporcionar acceso directo a WhatsApp.

Los datos de los productos se almacenan en un archivo JSON independiente del documento HTML.

### 2. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página. |
| CSS3 | Estilos y diseño responsive. |
| JavaScript | Interacciones y renderizado dinámico del menú. |
| JSON | Almacenamiento de categorías, productos y precios. |
| Bootstrap 5.3.2 | Componentes y utilidades de interfaz. |
| Bootstrap Icons 1.11.1 | Iconografía. |
| Google Tag Manager | Gestión de etiquetas y medición configurada. |
| Netlify | Publicación del sitio web. |
| GitHub | Control de versiones del proyecto. |

### 3. Estructura del proyecto

```text
los-pepes-tacos/
│
├── README.md
├── index.html
│
└── asesets/
    ├── css/
    │   └── styles.css
    │
    ├── img/
    │   └── logo.ico
    │
    └── js/
        ├── debug_menu.js
        └── menu.json
```

**Nota:** se conserva el nombre real del directorio `asesets` utilizado en el repositorio.

### 4. Descripción de componentes

#### 4.1 `index.html`

Archivo principal de la aplicación.

Responsabilidades:
- Definir la estructura del menú digital.
- Cargar las hojas de estilo.
- Incorporar Bootstrap y Bootstrap Icons.
- Configurar Google Tag Manager.
- Mostrar la información de pago.
- Proporcionar el botón de copiado.
- Proporcionar el enlace de WhatsApp.
- Definir los contenedores donde se renderiza el menú.

También contiene la función `copiarTarjeta()`, responsable de copiar la referencia bancaria.

#### 4.2 `asesets/css/styles.css`

Contiene los estilos visuales de la aplicación.

Responsabilidades:
- Definir la apariencia general.
- Configurar colores, fondos y tipografía.
- Estilizar las tarjetas de información y contacto.
- Dar formato a categorías y productos.
- Adaptar la interfaz a diferentes tamaños de pantalla.

#### 4.3 `asesets/js/debug_menu.js`

Controla la carga y representación dinámica del menú.

Proceso:
1. Espera a que el documento termine de cargarse.
2. Solicita el archivo JSON mediante `fetch()`.
3. Comprueba que la respuesta HTTP sea correcta.
4. Convierte la respuesta a formato JSON.
5. Construye los elementos del menú.
6. Inserta los elementos en los contenedores correspondientes.
7. Muestra un mensaje cuando ocurre un error de carga.

El renderizado utiliza `textContent` y creación de nodos DOM para presentar la información.

#### 4.4 `asesets/js/menu.json`

Contiene la información comercial del menú.

Categorías identificadas:

**Tacos**

**Burritos**

**Bebidas**


### 5. Funcionalidades técnicas

#### 5.1 Carga dinámica del menú

El archivo JavaScript consulta:

```text
asesets/js/menu.json
```

La información se obtiene mediante `fetch()` y se representa dentro del documento principal.

**Consideración operativa:** al modificar productos o precios, se debe conservar la estructura JSON esperada por `debug_menu.js`.

#### 5.2 Copiado de referencia bancaria

La función `copiarTarjeta()` permite copiar el texto de referencia bancaria.

Implementación identificada:
- Utiliza Clipboard API cuando está disponible.
- Incluye un mecanismo alternativo mediante `document.execCommand('copy')`.
- Contempla la medición del evento `copy_card`.

La operación debe probarse en el navegador y bajo el contexto de seguridad requerido por Clipboard API.

#### 5.3 Acceso a WhatsApp

El sitio utiliza un enlace de WhatsApp con mensaje predefinido.

El enlace identificado utiliza el formato:

```text
https://wa.me/5217792283423
```

El comportamiento depende de WhatsApp y de la disponibilidad del servicio en el dispositivo del cliente.

El evento de analítica asociado se identifica como:

```text
whatsapp_click
```

#### 5.4 Analítica

El documento HTML incluye la configuración de Google Tag Manager.

Contenedor identificado:

```text
GTM-NPWM6S36
```

Eventos identificados en el código:

| Evento | Acción medida |
|---|---|
| `copy_card` | Interacción con el botón de copiado. |
| `whatsapp_click` | Interacción con el enlace de WhatsApp. |

La recepción efectiva de los eventos debe verificarse en las herramientas de depuración y en la propiedad de analítica correspondiente.

### 6. Publicación

El sitio se encuentra publicado en Netlify:

https://los-pepes-tacos.netlify.app/

El código fuente se encuentra en GitHub:

https://github.com/rraulmenesesg-jpg/los-pepes-tacos.git

La configuración exacta de integración continua, rama de producción y despliegue automático no se considera verificada en este documento.

### 7. Mantenimiento

**Actualizar productos o precios**
1. Abrir `asesets/js/menu.json`.
2. Localizar la categoría correspondiente.
3. Modificar el producto o precio.
4. Conservar la estructura del JSON.
5. Validar que el archivo tenga sintaxis correcta.
6. Probar el menú en el navegador.

**Actualizar estilos**
1. Abrir `asesets/css/styles.css`.
2. Localizar el selector correspondiente.
3. Realizar el ajuste.
4. Validar la presentación en móvil y escritorio.

**Actualizar información de contacto o pago**
1. Revisar el contenido de `index.html`.
2. Modificar únicamente el dato correspondiente.
3. Verificar el botón o enlace relacionado.
4. Probar la funcionalidad antes de publicar.

### 8. Manejo de errores conocidos

| Escenario | Comportamiento esperado |
|---|---|
| No carga `menu.json` | Mostrar el mensaje de error definido en JavaScript. |
| JSON inválido | La carga del menú falla y debe revisarse la estructura del archivo. |
| Falla el copiado | Informar al usuario que no se pudo completar la operación. |
| WhatsApp no está disponible | El usuario debe poder continuar desde un navegador o dispositivo compatible. |
| Error visual en móvil | Revisar estilos responsive y compatibilidad del navegador. |

### 9. Consideraciones de mantenimiento

- No cambiar los nombres de las rutas sin actualizar sus referencias.
- Mantener la estructura de datos del menú.
- Validar precios antes de publicar.
- Probar las funciones de copiado y WhatsApp después de cualquier modificación.
- Verificar la carga del menú en dispositivos móviles.
- Comprobar los eventos de analítica cuando se modifique el código relacionado.

### 10. Estado del sistema

El producto corresponde a un menú digital estático con carga dinámica de información desde JSON.

No cuenta actualmente con:
- Base de datos.
- Backend propio.
- API de pedidos.
- Autenticación.
- Panel administrativo.
- Carrito de compras.
- Procesamiento de pagos.
- Gestión automatizada de pedidos.

---

**Fin de la documentación técnica.**