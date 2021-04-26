let h1 = document.querySelector('h1');
let hobbiesContent = document.querySelector('.hobbies ol');
let avatarImg = document.querySelector('.avatar');
let url = [];
let lengthHobbie = true;
function hobbieLength( hobbie ) {
    if( hobbie.length > 5 && hobbie.length < 10 ) {
        return true;
    } else {
        return false;
    }
}

let favoriteColor = prompt('Cuál es tu color favorito?');
console.log(favoriteColor);
let userName = prompt('Cuál es tu nombre?');
h1.innerHTML = `Bienvenido <span>${userName}</span>`;

let h1Span = document.querySelector('h1 span');
h1Span.classList.add('color-preferido');

let hobbiesList = prompt('Cuáles son tus hobbies? Separarlos por ,');
hobbiesList = hobbiesList.split(',');
hobbiesList = hobbiesList.map( x => { return x.trim() });

if( hobbiesList[0] ) lengthHobbie = hobbieLength(hobbiesList[0]);
if( hobbiesList[0] && lengthHobbie ) {
    url[0] = prompt(`Cual es la URL donde buscar tu hobbie ${ hobbiesList[0] }?`);
    if( url[0] ) {
        hobbiesContent.innerHTML = `<li><a>${ hobbiesList[0] }</a></li>`;
    } else {
        hobbiesContent.innerHTML = `<li>${ hobbiesList[0] } - No ingresaste un link</li>`;
    }
}
if( hobbiesList[1] ) lengthHobbie = hobbieLength(hobbiesList[1]);
if( hobbiesList[1] && lengthHobbie ) {
    url[1] = prompt(`Cual es la URL donde buscar tu hobbie ${ hobbiesList[1] }?`);
    if( url[1] ) {
        hobbiesContent.innerHTML += `<li><a>${ hobbiesList[1] }</a></li>`;
    } else {
        hobbiesContent.innerHTML += `<li>${ hobbiesList[1] } - No ingresaste un link</li>`;
    }
}
if( hobbiesList[2] ) lengthHobbie = hobbieLength(hobbiesList[2]);
if( hobbiesList[2] && lengthHobbie ) {
    url[2] = prompt(`Cual es la URL donde buscar tu hobbie ${ hobbiesList[2] }?`);
    if( url[2] ) {
        hobbiesContent.innerHTML += `<li><a>${ hobbiesList[2] }</a></li>`;
    } else {
        hobbiesContent.innerHTML += `<li>${ hobbiesList[2] } - No ingresaste un link</li>`;
    }
}

let hobbiesLinks = document.querySelectorAll('.hobbies a');
let j = 0;
for( let i = 0; i < 3; i++ ) {
    if( url[i] ) {
        hobbiesLinks[j].href = url[i];
        hobbiesLinks[j].style.textDecoration = 'none';
        hobbiesLinks[j].style.color = 'black';
        j++;
    };
}

hobbiesContent.style.textAlign = 'center';

let img = prompt('Ingresa el link de tu imagen de perfil');
if( img ) {
    avatarImg.src = img;
}