const { crearArchivo, listarArchivo, listartabla } = require('./funciones/multiplicar');
const argv = require('./config/yargs').argv
    // let base = 5;
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then((archivo) => {
                console.log(archivo)
            }).catch((err) => {
                console.log(err)
            });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}




/* let parametros = process.argv[2];
let base = parametros.split('=')[1];
*/
/* crearArchivo(base)
    .then((archivo) => {
        console.log(archivo)
    }).catch((err) => {
        console.log(err)
    }); */