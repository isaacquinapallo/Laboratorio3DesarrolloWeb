// Laboratorio5_IsaacQuinapallo
// MARCA APPLE

// Ejemplo de la API del iPhone 16
// Función asincrónica que obtiene detalles de un producto desde la API ficticia de Apple
async function detallesProducto() {
    try {
      //Se realiza una solicitud a la API del iPhone 16 Pro
      const response = await fetch('https://api.apple.com/products/iphone16pro');
      
      //Se transforma la respuesta en un objeto JSON para obtener los datos del producto
      const data = await response.json();
      
      //Se actualiza el contenido en el DOM del producto como: chip, pantalla, cámara
      document.getElementById('product-details').innerText = 
        `El iPhone 16 Pro tiene un chip ${data.chip}, una pantalla de ${data.screenSize} pulgadas, y una cámara de ${data.cameraQuality}.`;
    } catch (error) {
      //Si ocurre algún error en la solicitud, se muestra en la consola
      console.error("Error al obtener los detalles del producto:", error);
    }
}
// Se añade un evento click para que cuando el botón sea presionado
document.getElementById('change-details').addEventListener('click', detallesProducto);

// Ejemplo de Promesas
// Función que simula la conexión a la API de Apple, devolviendo una promesa después de 1 segundo
function checkConnection() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Conexión a Apple API establecida");
        resolve();
      }, 1000); // Simulación de retraso
    });
}

// Función que simula la obtención de los detalles del producto, devolviendo una promesa que se resuelve después de 1 segundo
function fetchProductDetails() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Detalles del iPhone 16 Pro obtenidos");
        resolve();
      }, 1000); // Simulación de retraso
    });
}

// Primero se establece la conexión y luego se obtienen los detalles del producto
checkConnection()
  .then(fetchProductDetails) // Cuando se establece la conexión, se obtiene el producto
  .catch(error => console.log(error)); // Si ocurre algún error, se imprime

// Ejemplo de Integración con APIs Privadas de Apple
// URL de la API ficticia de Apple que requiere un token
const urlAPI = "https://api.apple.com/v1/products/iphone16";
const apiToken = "APITOKEN123456"; // Token de API

// Función asincrónica que realiza una solicitud a la API usando el token de autenticación
const getAppleProductData = async (url, token) => {
  try {
    // Se hace la solicitud con el token como parámetro en la URL para la autenticación
    const request = await fetch(`${url}?api_key=${token}`);
    
    // Se transforma la respuesta en un objeto JSON
    const response = await request.json();
    
    // Se muestra la respuesta obtenida en la consola
    console.log(response);
  } catch (error) {
    // Si ocurre algún error durante la solicitud, se muestra
    console.log("Error al obtener los datos del producto:", error);
  }
};

// Se llama a la función para obtener los datos del producto, con la URL y el token de autenticación
getAppleProductData(urlAPI, apiToken);
