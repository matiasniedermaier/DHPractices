window.addEventListener('load', function() {
    let form = document.querySelector('form');
    form.addEventListener('submit', function( e ) {
        e.preventDefault();
        let userName = document.querySelector('#name').value;
        if( userName.length == 0 && userName.length > 3 ) {
            alert('Debes Ingresar un nombre mayor a tres letras');
        } else {
            sessionStorage.setItem('usuario', userName);
            location.replace('file:///C:/Users/IML/Documents/Digital%20House/Programaci%C3%B3n/0.Practicas/7.JS%20Front/3.AJAX%20y%20Storage/practica/index.html');
        }
    });
});