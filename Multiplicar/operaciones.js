const fs = require('fs');
const colors = require('colors');

let data = [];

let crearArchivo = (base,limite) =>{

  return new Promise((resolve,reject)=>{

    for (let i = 0 ; i<=limite ; i++){

    data.push(`${i}*${base} = ${i*base}`)}

    fs.writeFile(`tabla${base}.txt`, data , (error) => {

    if (error) {reject('No se pudo grabar el resultado')}

    else{resolve(`./Tablas/tabla${base}.txt`)}
    })
  })
}


let listarTabla = (base,limite) => {

  console.log(`==========Tabla ${base}============`.green)

  for (let i = 0 ; i<=limite ; i++){

  console.log(`=========   ${i}*${base} = ${i*base}  ===========`.red)}
}



module.exports = {crearArchivo,listarTabla};
