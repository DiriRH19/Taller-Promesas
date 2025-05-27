const promesa1 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("Promesa 1")
    }
    setTimeout(resolver, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("Promesa 2")
    }
    setTimeout(resolver, 2000);
});

const promesa3 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("Promesa 3")
    }
    setTimeout(resolver, 3000);
});


Promise.all([promesa1, promesa2, promesa3]).then((arregloSoluciones) => {
    console.log(arregloSoluciones);
}).catch((error) => {
    console.log(error);
})
