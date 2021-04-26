let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let adultContent = document.querySelector('.container-general');
let blockContent = document.querySelector('#accesoDenegado');
let hobbiesContent = document.querySelector('.hobbies ol');
let backgroundImg = document.querySelector('.background-img');

alert('Bienvenidos a mi sitio!');

let confirmUser = confirm('Estas seguro que quieres avanzar?');

if( confirmUser ) {
    // Name and Year
    h2.innerText = 'Que alegría que quieras con tu visita por este maravilloso sitio';
    let nameUser = prompt('Cual es tu nombre?');
    if( nameUser ) {
        h1.innerText = `Bienvenido ${nameUser}`;
    }
    let yearsUser = prompt('Qué edad tienes?');
    if( yearsUser < 18 ) {
        adultContent.style.display = 'none';
        blockContent.style.display = 'block';
    } else {
        // Hobbies
        let hobbiesList = prompt('Cuales son tus hobbies? Separalos con ,');
        hobbiesList = hobbiesList.split(',');
        hobbiesList = hobbiesList.map( x => { return x.trim() });
        let likeProgramation = false;
        hobbiesList.forEach( x => { if( x == 'programacion' || x == 'Programacion' || x == 'programación' || x == 'Programación' || x == 'programar' || x == 'Programar' ) {
            likeProgramation = true
        }});
        if( likeProgramation ) {
            alert('Qué bueno que te guste la programación');
            backgroundImg.style.backgroundImage = 'url("img/programmer.jpg")';
        } else {
            alert('Qué lástima que no te guste la programación');
            backgroundImg.style.backgroundImage = 'url("img/gatito.jpg")';
        }
        // 3 Hobbies
        if( hobbiesList[0] ) { hobbiesContent.innerHTML = `<li>${hobbiesList[0]}</li>`; }
        if( hobbiesList[1] ) { hobbiesContent.innerHTML += `<li>${hobbiesList[1]}</li>`; }
        if( hobbiesList[2] ) { hobbiesContent.innerHTML += `<li>${hobbiesList[2]}</li>`; }
    }
} else {
    h2.innerText = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio';
}