function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const nombres=["Dirison","Daniel","Alejandro"];

async function procesarNombres(lista){
    for(const nombre of lista){
        console.log(`Procesando: ${nombre}`);
        await delay(1000);
    }
    console.log("✅ Todos los nombres han sido procesados")
}

procesarNombres(nombres);