
const MENU_URL = "asesets/js/menu.json";

async function renderMenu() {
    const container = document.getElementById("menu-content");
    const title = document.getElementById("menu-title");

    if (!container || !title) return;

    try {
        const response = await fetch(MENU_URL);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const menu = await response.json();

        title.textContent = menu.titulo || "Menú";
        container.replaceChildren();

        menu.categorias.forEach(categoria => {
            const column = document.createElement("div");
            column.className = "col-md-4";

            const heading = document.createElement("h3");
            heading.className =
                "h5 border-bottom border-warning pb-2 text-warning";
            heading.textContent = categoria.nombre;

            const list = document.createElement("ul");
            list.className = "list-unstyled menu-list";

            categoria.productos.forEach(producto => {
                const item = document.createElement("li");
                const name = document.createTextNode(producto.nombre);

                const price = document.createElement("span");
                price.textContent =
                    `$${Number(producto.precio).toFixed(2)}.-`;

                item.append(name, price);
                list.appendChild(item);
            });

            column.append(heading, list);

            if (categoria.nota) {
                const note = document.createElement("p");
                note.className = "fst-italic text-warning mt-2";
                note.textContent = categoria.nota;
                column.appendChild(note);
            }

            container.appendChild(column);
        });

    } catch (error) {
        console.error("Error al cargar el menú:", error);

        container.textContent =
            "No fue posible cargar el menú. Intenta nuevamente.";
    }
}

document.addEventListener("DOMContentLoaded", renderMenu);
