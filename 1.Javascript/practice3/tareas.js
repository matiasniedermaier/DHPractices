const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync( this.archivo ));
    },
    escribirJSON: function (x) {
        return fs.writeFileSync( this.archivo, JSON.stringify(x));
    },
    guardarTarea: function (x) {
        let tareas = this.leerJSON();
        tareas.push(x);
        return this.escribirJSON(tareas);
    },
    filtrarPorEstado: function (x) {
        let tareas = this.leerJSON();
        return tareas.filter( tarea => {
            return x == tarea.estado;
        })
    }
}

module.exports = archivoTareas;