window.addEventListener('load', function() {
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let buttonStart = document.querySelector('.start');
    let buttonPause = document.querySelector('.pause');
    let buttonReset = document.querySelector('.reset');
    let delay = 1000;
    let secondsNumber = 0;
    let minutesNumber = 0;
    buttonStart.addEventListener('click', function() {
        this.disabled = true;
        buttonPause.disabled = false;
        buttonReset.disabled = true;
        let interval = setInterval(timing, delay);
        function timing() {
            if( secondsNumber > 59 ) {
                if( minutesNumber < 10 ) {
                    minutesNumber++;
                    minutes.innerText = '0' + minutesNumber;
                } else {
                    minutesNumber++;
                    minutes.innerText = minutesNumber;
                }
                secondsNumber = 0;
                seconds.innerText = '0' + secondsNumber;    
            } else {
                if( secondsNumber < 10 ) {
                    secondsNumber++;
                    seconds.innerText = '0' + secondsNumber;
                } else {
                    secondsNumber++;
                    seconds.innerText = secondsNumber;
                }
            }
        }
        buttonPause.addEventListener('click', function() {
            this.disabled = true;
            buttonStart.disabled = false;
            buttonReset.disabled = false;
            clearInterval(interval);
            buttonReset.addEventListener('click', function() {
                this.disabled = true;
                buttonPause.disabled = true;
                buttonStart.disabled = false;
                secondsNumber = 0;
                seconds.innerText = '00';
                minutesNumber = 0;
                minutes.innerText = '00';
            });
        });
    });
});