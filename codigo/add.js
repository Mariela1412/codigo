const fs = require('fs');
const fileName = 'vehiculos.json';
function AddVehicle(){
fs.readFile(fileName, 'utf8', (err, contenido) => {
    if(err){
        console.error("Error al leer el archivo JSON.");
        return;
    }
    const vehiculos = JSON.parse(contenido)
    const nuevoVehiculo = { id: 4, marca: 'Williams', modelo: 'FW14B', año: 1992 };
    vehiculos.push(nuevoVehiculo);

    try{
        fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err) =>{
            if(err){
                console.error("Error al escribir en el archivo JSON.");
                return;
            }
            console.log("Vehiculo agregado con exito!");
        })
    }catch(err){
        console.error("Error al parsear el archivo JSON.");
    }
})
}

module.exports = AddVehicle;
