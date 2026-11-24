# PRD — Sistema de Menú Digital
## Taquería Los Pepes

**Versión:** 1.0   
**Tipo de proyecto:** MVP / Express  
**Producto:** Menú digital web  (con QR's)
**Sitio publicado:** https://los-pepes-tacos.netlify.app/  
**Repositorio:** https://github.com/rraulmenesesg-jpg/los-pepes-tacos.git

---

### 1. Propuesta de valor

Taquería Los Pepes requiere una solución digital sencilla que permita a sus clientes consultar el menú y los precios desde sus teléfonos móviles, acceder a la información de pago mediante transferencia y contactar directamente al establecimiento por WhatsApp.

El menú digital busca facilitar el acceso a la información, reducir fricciones durante la atención y validar la adopción de herramientas digitales sin sustituir el menú físico ni modificar radicalmente la operación actual del negocio.

### 2. Objetivo del producto

Implementar un menú digital accesible mediante código QR que permita:

- Consultar categorías, productos y precios.
- Consultar la información necesaria para realizar una transferencia.
- Copiar la referencia bancaria mediante un botón.
- Abrir una conversación de WhatsApp con un mensaje predefinido.
- Consultar el menú desde dispositivos móviles y escritorio.

### 3. Usuarios objetivo

**Cliente de la taquería**
- Escanea el código QR.
- Consulta los productos y precios.
- Copia la referencia de pago cuando necesita realizar una transferencia.
- Contacta al establecimiento mediante WhatsApp.

**Responsable del negocio**
- Proporciona la información de productos y precios.
- Comparte el acceso al menú mediante el código QR.
- Mantiene actualizada la información comercial.

### 4. Frontera de alcance

#### In-Scope — Incluido en el MVP

| ID | Funcionalidad | Descripción |
|---|---|---|
| RF-01 | Menú digital | Mostrar categorías, productos y precios. |
| RF-02 | Carga de menú | Obtener los datos desde un archivo JSON. |
| RF-03 | Copiar referencia | Permitir copiar la referencia bancaria mediante un botón. |
| RF-04 | Contacto WhatsApp | Abrir WhatsApp con un mensaje predefinido. |
| RF-05 | Diseño responsive | Adaptar la interfaz a dispositivos móviles y escritorio. |
| RF-06 | Acceso por QR | Permitir acceder al sitio mediante el código QR del establecimiento. |
| RF-07 | Analítica | Registrar eventos de interacción configurados en el sitio. |

#### Out-of-Scope — Fuera del MVP

- Carrito de compras.
- Registro o autenticación de clientes.
- Procesamiento automático de pedidos.
- Administración de pedidos desde un panel.
- Sistema de delivery.
- Cálculo automático de costos de envío.
- Validación automática de transferencias.
- Integración con pasarelas de pago.
- Panel de administración de productos.
- Sistema de comandas para cocina.
- Kitchen Display System (KDS).
- Gestión de inventario.

Estas funcionalidades podrán evaluarse en futuras fases.

### 5. Requerimientos funcionales mínimos

**RF-01 — Visualización del menú**

El sistema debe mostrar las categorías y productos disponibles, incluyendo sus precios y notas cuando existan.

**RF-02 — Carga de información**

El menú debe obtenerse desde el archivo `asesets/js/menu.json`, evitando mantener los productos directamente dentro del HTML.

**RF-03 — Copiado de referencia bancaria**

El usuario debe poder copiar la referencia bancaria mediante un botón. La interfaz debe informar si la operación se realizó correctamente o si ocurrió un error.

**RF-04 — Contacto por WhatsApp**

El sistema debe proporcionar un enlace que permita abrir WhatsApp con un mensaje predefinido dirigido al número configurado.

**RF-05 — Compatibilidad responsive**

La interfaz debe permitir consultar el menú desde pantallas