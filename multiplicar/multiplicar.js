const fs = require('fs');
const colors = require('colors');

listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }

        console.log('=================='.green);
        console.log(` Tabla del ${base}`.green);
        console.log('=================='.green);

        for (let i = 1; i < limite + 1; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }

        resolve();
    });
};

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        let s = '';
        for (let i = 1; i < limite + 1; i++) {
            s += `${base} * ${i} = ${base * i}\n`;
        }

        const name = `tabla-${base}.txt`;
        fs.writeFile(name, s, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(name);
            }
        });
    });
};

module.exports = {crearArchivo, listar};