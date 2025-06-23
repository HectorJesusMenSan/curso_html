// Cargar componente HTML reutilizable
function cargarComponente(idElemento, rutaArchivo) {
  fetch(rutaArchivo)
    .then(res => {
      if (!res.ok) throw new Error(`Error al cargar ${rutaArchivo}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(idElemento).innerHTML = html;
    })
    .catch(error => console.error(error));
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  cargarComponente("navbar", "components/nav_bar.html");
});