function randomColors() {
    let colors = ['red', 'blue', 'green', 'orange', 'yellow'];
    let number = Math.floor(Math.random() * (4 - 0));
    return colors[number];
};

window.addEventListener('load', function() {
    let buttonAbracadabra = document.querySelector('#abracadabra');
    buttonAbracadabra.addEventListener('click', function( e ) {
        e.preventDefault();
        let name = prompt('Ingresa tu nombre :)');
        let title = document.querySelector('#titular strong');
        title.innerText = name;
    });
    
    let buttonWithMe = document.querySelector('footer .buttondbclick');
    buttonWithMe.addEventListener('dblclick', function( e ) {
        e.preventDefault();
        let text = document.querySelector('.parrafo-color');
        text.style.color = randomColors();
    });
    
    let section1 = document.querySelector('.section1');
    let section2 = document.querySelector('.section2');
    let section3 = document.querySelector('.section3');
    section1.addEventListener('click', function( e ) {
        e.preventDefault();
        let title = this.querySelector('h3').innerText;
        alert(`Clickeaste sobre ${title}`);
    });
    section3.addEventListener('click', function( e ) {
        e.preventDefault();
        let title = this.querySelector('h3').innerText;
        alert(`Clickeaste sobre ${title}`);
    });
    section2.addEventListener('click', function( e ) {
        e.preventDefault();
        let title = this.querySelector('h3').innerText;
        alert(`Clickeaste sobre ${title}`);
    });
    
    let buttonPortfolio = document.querySelector('.buttonPortfolio');
    buttonPortfolio.addEventListener('mouseover', function() {
        let text = document.querySelector('.textPortfolio');
        text.style.color = randomColors();    
    });
    buttonPortfolio.addEventListener('mouseout', function() {
        let text = document.querySelector('.textPortfolio');
        text.style.color = '#888';
    });
    
    let imgAvatar = document.querySelector('#lechuza');
    imgAvatar.addEventListener('click', function() {
        alert('Preparate para el futuro...');
        let delay = 5000;
        setTimeout(alertFunction, delay);
        function alertFunction() {
            alert('Y el futuro ya llegó!');
        }
    });
    
    let inputEmail = document.querySelector('#email');
    inputEmail.addEventListener('keydown', function( e ) {
        if( e.code == 'Space' ) {
            e.preventDefault();
            alert('Ey, tocaste el teclado!');
        }
    });
    
    /*document.addEventListener('keypress', function( e ) {
        let state;
        if( e.key == 'S' ) {
            state = 1;
        }
        if( e.key == 'E' ) {
            if( state == 1 ) {
                state = 2;
            } else {
                state = 0;
            }
        }
        if( e.key == 'C' ) {
            if( state == 2 ) {
                state = 3;
            } else {
                state = 0;
            }
        }
        if( e.key == 'R' ) {
            if( state == 3 ) {
                state = 4;
            } else {
                state = 0;
            }
        }
        if( e.key == 'E' ) {
            if( state == 4 ) {
                state = 5;
            } else {
                state = 0;
            }
        }
        if( e.key == 'T' ) {
            if( state == 5 ) {
                state = 6;
            } else {
                state = 0;
            }
        }
        if( e.key == 'O' ) {
            if( state == 6 ) {
                alert('SECRETO MAGICO')
            } else {
                state = 0;
            }
        }
        console.log(state, e.key);
    });*/

    let number = Math.floor(Math.random() * (6 - 0));
    let block1 = document.querySelector('.block1');
    let block2 = document.querySelector('.block2');
    let block3 = document.querySelector('.block3');
    let block4 = document.querySelector('.block4');
    let block5 = document.querySelector('.block5');
    let block6 = document.querySelector('.block6');
    let box = [block1, block2, block3, block4, block5, block6];
    block1.addEventListener('click', function() {
        if( box[number] == block1 ) {
            alert('Este era el blocke ganador!');
        }
    })
    block2.addEventListener('click', function() {
        if( box[number] == block2 ) {
            alert('Este era el blocke ganador!');
        }
    })
    block3.addEventListener('click', function() {
        if( box[number] == block3 ) {
            alert('Este era el blocke ganador!');
        }
    })
    block4.addEventListener('click', function() {
        if( box[number] == block4 ) {
            alert('Este era el blocke ganador!');
        }
    })
    block5.addEventListener('click', function() {
        if( box[number] == block5 ) {
            alert('Este era el blocke ganador!');
        }
    })
    block6.addEventListener('click', function() {
        if( box[number] == block6 ) {
            alert('Este era el blocke ganador!');
        }
    })
});