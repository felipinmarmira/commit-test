const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multiplicar', opts)
    .command('crear', 'Crear archivo de lista', opts)
    .help()
    .argv;

module.exports = {
    argv
}