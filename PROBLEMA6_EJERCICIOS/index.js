function moto(){
    return new Promise((resolve, reject) => {
        resolve("Hola Mundo")
    });
}

moto()
.then((resultado) => {
    console.log(resultado);
})

.catch((error) => {
    console.log(error);
})