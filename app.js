const argv = require('./config/yargs').argv;
const colors = require('colors');

const multiplicar = require('./multiplicar/multiplicar');

let base = argv.base;
const limite = argv.limite;
const comando = argv._[0];
switch (comando) {
    case 'listar':
        multiplicar.listar(base, limite);
        break;
    case 'crear':
        multiplicar.crearArchivo(base, limite).then((nombre) => {
            console.log(`Archivo creado ${colors.green(nombre)}`);
        }).catch(err => console.error(err));
        break;
    default:
        console.log(`Comando ${comando} no disponible`);
        return;

}
