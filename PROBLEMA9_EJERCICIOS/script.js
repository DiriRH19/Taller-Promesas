function numero(){
    return new Promise((resolve,reject)=>{
        const retraso =Math.floor(Math.random()*3000)+1000;
        setTimeout(()=>{
            resolve ( `resultado despues de ${retraso} ms`)
        },retraso)
    })
}

const promesas=[
    numero(),
    numero(),
    numero()
]

Promise.all(promesas)
.then((resultados)=>{
    console.log("Resultados obtenidos")
    resultados.forEach((resultados, index) => {
        console.log(`${index +1}:${resultados}`)
    });
})
.catch((error)=>{
    cpnsple.log.error(error);
})