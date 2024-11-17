const fs = require('fs');
const fileName = 'vehiculos.json';

function modify(){
fs.readFile(fileName, 'utf8', (err, content) =>{
    if(err){
        console.error("Error al leer el archivo JSON.");
        return;
    }
    try {
        const vehiculos = JSON.parse(content);
        
        const idEliminar = 2;
        
        const indice = vehiculos.findIndex((vehiculos) => vehiculos.id === idEliminar);

        
        vehiculos[indice].año = 2022;

        
        fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err) =>{
            if(err){
                console.error("Error al cambiar el año del vehiculo.");
            }else{
                console.log("Año del vehiculo cambiado exitosamente.");
            }
        })
    }catch {
        console.error("Error al parsear el archivo JSON.")
    }
})
}

module.exports = modify;