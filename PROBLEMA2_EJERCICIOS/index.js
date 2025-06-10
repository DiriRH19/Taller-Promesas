//DEFINICION DE UNA PROMESA
const miPromesa = new Promise((resolve, reject) => {
    const valor = Math.random();
    if (valor > 0.5){
        resolve("Promesa cumplida")
    }else{
        reject("Promesa rechazada");
    }
});

// Usando la promesa
miPromesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});

