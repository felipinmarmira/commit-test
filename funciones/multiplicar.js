const fs = require('fs');
const colors = require('colors');
let data = '';

let listartabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}

let listarArchivo = (base, limite) => {
    //console.log(base);
    return new Promise((resolve, reject) => {
        fs.readFile(`tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
            //console.log(data)
            if (err) {
                reject(err);
                return
            } else {
                resolve(data[0])
            }
        });
    });
}

/* let listarArchivo = async(base, limite) => {
    //console.log(base);
    fs.readFile(`tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
        console.log(data)
        if (err) {
            throw err
        } else {
            return data
        }
    })
} */


let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es numero ${base}`);
            return
        }

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })
    })

}

module.exports = {
    crearArchivo,
    listarArchivo,
    listartabla
}