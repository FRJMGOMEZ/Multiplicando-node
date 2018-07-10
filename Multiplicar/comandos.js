
const opciones = {base:{demand:true,
                  alias:'b'},
                  limite:{default:10,
                  alias:'l'}}

const argv = require('yargs')
.command('listar','Imprime en consola en la tabla de multiplicar',opciones)
.command('crear','Crea archivos de texto con tablas de multiplicar',opciones)
.help()
.argv;


module.exports= argv;
