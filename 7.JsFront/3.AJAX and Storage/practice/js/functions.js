window.addEventListener('load', function() {
    let part3 = document.querySelector('.PART3');
    let part4 = document.querySelector('.PART4');
    //Part 3
    part3.addEventListener('click', function() {
        document.querySelector('.part3').style.display = 'block';
        document.querySelector('.part4').style.display = 'none';
        let h1 = document.querySelector('h1');
        let img = document.querySelector('img');
        let button = document.querySelector('.changeGiphy');
        fetch('https://api.giphy.com/v1/gifs/random?api_key=vvpdhojRWej6YbNPklVY82y6zPQNTlUX&tag=&rating=g')
            .then( function( response ) {
                return response.json();
            })
            .then( function( json ) {
                let name = json.data.title;
                let url = json.data.images.original.url;
                h1.innerText = name;
                img.src = url;
            })
            .catch( function(err) {
                console.log(err);
            })
        button.addEventListener('click', function() {
            fetch('https://api.giphy.com/v1/gifs/random?api_key=vvpdhojRWej6YbNPklVY82y6zPQNTlUX&tag=&rating=g')
                .then( function( response ) {
                    return response.json();
                })
                .then( function( json ) {
                    let name = json.data.title;
                    let url = json.data.images.original.url;
                    h1.innerText = name;
                    img.src = url;
                })
                .catch( function(err) {
                    console.log(err);
                });
        });
    });
    // Part 4
    part4.addEventListener('click', function() {
        document.querySelector('.part4').style.display = 'block';
        document.querySelector('.part3').style.display = 'none';
        let numberGiphy = prompt('Cuantos Giphy te gustaría ver?');
        let boxGiphy = document.querySelector('ol');
        let h2 = document.querySelector('h2');
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=vvpdhojRWej6YbNPklVY82y6zPQNTlUX&limit=${numberGiphy}&rating=g`)
            .then( function( response ) {
                return response.json();
            })
            .then( function( json ) {
                h2.innerText = `${numberGiphy} ${h2.innerText}`;
                for( giphy of json.data ) {
                    let name = giphy.title;
                    let url = giphy.images.original.url;
                    let id = giphy.id;
                    let starIcon = `<i data-giphyId="${id}" class="fas fa-star"></i><br>`;
                    boxGiphy.innerHTML += `
                    <li>
                        ${name}<br>
                        <img src="${url}" alt="img giphy"><br>
                        Add to favorite ${starIcon}<br>
                    </li>`;
                }
                let addFavorite = document.querySelectorAll('i');
                for( addFavorite of addFavorite ) {
                    addFavorite.addEventListener('click', function() {
                        let userName = sessionStorage.getItem('usuario');
                        if( userName ) {
                            let favorites = localStorage.getItem('favorites');
                            let id = this.getAttribute('data-giphyId');
                            if( favorites ) {
                                data = JSON.parse(favorites);
                                for( giphy of json.data ) {
                                    if( giphy.id == id ) {
                                        data.push(id);
                                        data = JSON.stringify(data);
                                        localStorage.setItem('favorites', data);
                                        alert('Agregado Correctamente');
                                    }
                                }
                            } else {
                                for( giphy of json.data ) {
                                    if( giphy.id == id ) {
                                        let data = [];
                                        data.push(id)
                                        data = JSON.stringify(data);
                                        localStorage.setItem('favorites', data);
                                        let buttonFavorites = document.querySelector('.favorites');
                                        buttonFavorites.style.display = 'block';
                                        alert('Agregado Correctamente');
                                    }
                                }
                            }
                        } else {
                            alert('Debes ingresar tu usuario');
                            location.replace('file:///C:/Users/IML/Documents/Digital%20House/Programaci%C3%B3n/0.Practicas/7.JS%20Front/3.AJAX%20y%20Storage/practica/login.html');
                        }
                    });
                }
            })
            .catch( function( err ) {
                console.log(err);
            });
    });
    // Favorites
    let favorites = localStorage.getItem('favorites');
    if( !favorites ) {
        let buttonFavorites = document.querySelector('.favorites');
        buttonFavorites.style.display = 'none';
    }
});