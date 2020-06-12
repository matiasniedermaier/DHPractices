const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function (tareas) {

        let tareasJSON = JSON.stringify(tareas);
        fs.writeFileSync( 'tareas.json', tareasJSON );

    },

    guardarTarea: function (tarea) {

        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);

    },

    leerPorEstado: function (estado) {

        let tareas = this.leerJSON();
        let tareasfiltradas = tareas.filter( function ( tarea ) {

            return tarea.estado == estado;

        });
        return tareasfiltradas;

    }

}

module.exports = archivoTareas;