function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const exito = true;
      if (exito) {
        resolve("Datos obtenidos exitosamente");
      } else {
        reject("Error al obtener los datos");
      }}, 3000); 
  });
}

async function mostrarDatos() {
    console.log("Esperando...")
  try {
    const resultado = await obtenerDatos();
    console.log("✅ Resultado:", resultado);
  } catch (error) {
    console.error("❌ Ocurrió un error:", error);
  }
}

mostrarDatos();
