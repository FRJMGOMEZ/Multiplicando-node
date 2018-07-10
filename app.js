const argv = require('./Multiplicar/comandos');
const colors = require('colors');
const {crearArchivo} = require('./Multiplicar/operaciones');
const {listarTabla} = require('./Multiplicar/operaciones');

const comando = argv._[0];

switch (comando){

  case 'listar': listarTabla(argv.base,argv.limite);
  break;
  case 'crear': crearArchivo(argv.base,argv.limite)
    .then(mensaje => {console.log(`El archivo ${mensaje} se ha creado`.blue)})
    .catch(error=>{console.log(error)});
  break;
  default: console.log('Comando no reconocido')
}

//console.log(argv);
