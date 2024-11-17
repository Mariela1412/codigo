//Importamos el modulo fs para manipular archivos en Node.js
const fs = require('fs');
//Nombramos el archivo
const fileName = 'vehiculos.json';
//Contenido del archivo
const vehiculos = [
    { id: 1, marca: 'Ferrari', modelo: 'F2004', año: 2004 },
    { id: 2, marca: 'Red Bull Racing', modelo: 'RB19', año: 2023 },
    { id: 3, marca: 'Mercedes', modelo: 'W11', año: 2020 }
];


function create(){
fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err) =>{
    if(err){
        console.error("Error al crear el archivo JSON.");
    }else{
        console.log("Archivo JSON creado con exito.");
    }
})
}

module.exports = create;