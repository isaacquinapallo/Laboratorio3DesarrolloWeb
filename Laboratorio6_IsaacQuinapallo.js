// Función para guardar la selección del producto en LocalStorage
function guardarProductoEnLocalStorage(producto) {
    localStorage.setItem("productoSeleccionado", producto); // Guarda el producto
    console.log(`Producto ${producto} guardado en LocalStorage.`); // Confirma en consola
}
  
// Función para obtener el producto almacenado en LocalStorage
function obtenerProductoDeLocalStorage() {
    const producto = localStorage.getItem("productoSeleccionado"); // Recupera el producto
    if (producto) {
        console.log(`Producto almacenado en LocalStorage: ${producto}`); // Muestra en consola
        document.getElementById('producto-seleccionado').innerText = `Producto seleccionado: ${producto}`; // Muestra en el DOM
    } else {
        console.log("No hay productos guardados en LocalStorage."); // Mensaje si no hay producto
    }
}
  
// Función para eliminar el producto de LocalStorage
function eliminarProductoDeLocalStorage() {
    localStorage.removeItem("productoSeleccionado"); // Elimina el producto
    console.log("Producto eliminado de LocalStorage."); // Confirma en consola
}
