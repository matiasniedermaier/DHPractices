let archivoTareas = require('./tareas');

// Accion es lo que voy a pasar por consola lo que quiero que haga despues del node app.js. 
// Los case del switch van a ser las diferentes acciones que se pueden hacer.
let accion = process.argv[2];

switch(accion) {
    // Listo todas las tareas por hacer
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        tareas.forEach( ( tarea, x ) => {
            console.log(x+1 + '. ' + tarea.titulo + ' - ' + tarea.estado);
        })
        break;
    // Crear una tarea escribiendo crear despues de node app.js y la tarea que le quiero agregar.
    // EJ: node app.js crear Terminar la vista del home
    case 'crear':
        if (process.argv[3] == undefined) {
            console.log('Debes escribir una tarea');
        } else {
            let tarea = {
                titulo: process.argv[3],
                estado: 'pendiente'
            };
            archivoTareas.guardarTarea(tarea);
        }
        break;
    // Filtro la tarea que quiero buscar
    case 'filtrar':
        let estado = process.argv[3];
        // Si escribe un estado valido
        if ( estado == 'terminada' || estado == 'en progreso' || estado == 'pendiente') {
            console.log('Estas son las tareas filtradas:')
            let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
            tareasFiltradas.forEach( ( tarea, x ) => {
                console.log(x+1 + '. ' + tarea.titulo + ' - ' + tarea.estado);        
            });
        // Si no escribe ningun estado
        } else if ( estado == undefined ){
            console.log('Debes escribir un estado para filtrar');
        // Si escribe un estado no valido
        } else {
            console.log('No es un estado válido, prueba otro');
        }
        break;
    // En caso de que no escriba una acción
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    // En caso de que no encuentre la acción
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear y filtrar');
        break;
}
