//DEFINICION DE UNA PROMESA
const miPromesa = new Promise((resolve, reject) => {
    function resolver() {
        resolve("Promesa cumplida")
    }
    setTimeout(resolver, 2000)
});

// Usando la promesa
miPromesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});


