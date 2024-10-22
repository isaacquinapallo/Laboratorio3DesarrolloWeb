Este ejercicio está diseñado para demostrar el uso de la API de Web Storage del W3C aplicada en el sitio web de Apple. La Web Storage permite almacenar datos de manera local en el navegador del usuario para recordar preferencias o información importante, incluso después de cerrar y reabrir la página. En el caso de Apple, utiliza local storage y session storage para mejorar la experiencia de usuario, como la caché de la tienda en línea, el almacenamiento de productos en el carrito de compras, y otros aspectos.

![image](https://github.com/user-attachments/assets/68f3a73e-0d17-451f-b0a1-5c24a7308b2d)

Al cambiar ciertos valores en la página de Apple, como seleccionar productos o cambiar la ubicación de la tienda, los eventos de Web Storage se reflejan en el almacenamiento del navegador, garantizando que los cambios se recuerden durante la sesión o al visitar la página nuevamente.

![image](https://github.com/user-attachments/assets/949c6ca7-dd5a-4afe-92dc-4918bc0fd7bc)

En este ejemplo, cuando accedemos a la tienda de Apple y realizamos acciones como agregar productos al carrito o personalizar la experiencia de navegación, esta información se guarda en el almacenamiento local mediante objetos JSON que contienen parámetros como "ttl" (tiempo de vida), "items" (productos), y detalles de APIs internas para la actualización de la bolsa de compra en tiempo real. Estas configuraciones se mantienen persistentes hasta que el navegador borra el almacenamiento o hasta que su tiempo de vida expire.

![image](https://github.com/user-attachments/assets/9bf76d6c-1497-437a-bd03-bbfa67ce06cd)


//Busque la pagina en la que usted saco los modulos por lo que creo que tengo que hacer el codigo con localstorage...
![image](https://github.com/user-attachments/assets/02559f3e-3b01-4e3e-8e4f-3443a90e9585)


//Laboratorio 06

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

