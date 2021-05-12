window.addEventListener('load', function() {
    let divForm = document.querySelector('.form');
    let form = document.querySelector('form');
    let divSearch = document.querySelector('.search');
    let buttonResearch = document.querySelector('.research');
    let h1 = document.querySelector('h1');
    let ul = document.querySelector('.search ul');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        divForm.style.display = 'none';
        divSearch.style.display = 'block';
        let nameGyphy = document.querySelector('.nameGyphy').value;
        let total = document.querySelector('.total').value;
        h1.innerText += ` ${nameGyphy}!`;
        buttonResearch.addEventListener('click', function() {
            divForm.style.display = 'block';
            divSearch.style.display = 'none';
        });
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=vvpdhojRWej6YbNPklVY82y6zPQNTlUX&q=${nameGyphy}&limit=${total}&offset=0&rating=g&lang=es`)
            .then( function( response ) {
                return response.json()
            })
            .then( function( json ) {
                console.log(json);
                for( giphy of json.data ) {
                    let title = giphy.title;
                    let url = giphy.images.original.url;
                    ul.innerHTML += `
                    <li>
                        ${title}<br>
                        <img src="${url}" alt="img giphy"><br><br>
                    </li>`;
                    console.log(ul);
                }
            })
            .catch( function( err ) {
                console.log(err);
            });
    })
});