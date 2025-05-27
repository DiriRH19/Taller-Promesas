const promesa1 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("Promesa 1")
    }
    setTimeout(resolver, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("Promesa 2")
    }
    setTimeout(resolver, 5000);
});


Promise.race([promesa1, promesa2]).then((solucionMasRapida) => {
    console.log(solucionMasRapida);
}).catch((error) => {
    console.log(error);
})
