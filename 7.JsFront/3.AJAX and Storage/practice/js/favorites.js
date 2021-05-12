window.addEventListener('load', function() {
    let favorites = localStorage.getItem('favorites');
    let ul = document.querySelector('ul');
    if( favorites ) {
        favorites = JSON.parse(favorites);
        for( giphyId of favorites ) {
            fetch(`https://api.giphy.com/v1/gifs/${giphyId}?api_key=vvpdhojRWej6YbNPklVY82y6zPQNTlUX`)
                .then( function( response ) {
                    return response.json();
                })
                .then( function( data ) {
                    let name = data.data.title;
                    let url = data.data.images.original.url;
                    ul.innerHTML += `
                    <li>
                        ${name}<br>
                        <img src="${url}" alt="img giphy"><br>
                    </li>
                    `;
                })
                .catch( function( err ) {
                    console.log(err);
                });
        }
    } else {
        let h1 = document.querySelector('h1');
        h1.innerText = 'Aun no tienes GIPHY´s guardados en favoritos'; 
    }
});