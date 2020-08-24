let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        tareas.forEach( ( tarea, x ) => {
            console.log(x+1 + '. ' + tarea.titulo + ' - ' + tarea.estado);
        })
        /*for (let i = 0;  i < tareas.length; i++) {
            console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }*/
        break;

    case 'crear':
        if (process.argv[3] == undefined) {
            console.log('Debes escribir una tarea')
        } else {
            let tarea = {
                titulo: process.argv[3],
                estado: 'pendiente'
            };
            archivoTareas.guardarTarea(tarea);
        }
        break;

    case 'filtrar':
        let estado = process.argv[3];
        if ( estado == 'terminada' || estado == 'en progreso' || estado == 'pendiente') {
            console.log('Estas son las tareas filtradas:')
            let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
            tareasFiltradas.forEach( ( tarea, x ) => {
                console.log(x+1 + '. ' + tarea.titulo + ' - ' + tarea.estado);        
            });
        } else if ( estado == undefined ){
            console.log('Debes escribir un estado para filtrar')
        } else {
            console.log('No es un estado válido, prueba otro')
        }
        break;

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear y filtrar');
        break;
}
