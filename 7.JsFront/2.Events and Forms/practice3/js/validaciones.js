window.addEventListener('load', function () {
    let form = document.querySelector('.contact-form');
    let nameInput = document.querySelector('#fullName');
    let emailInput = document.querySelector('#email');
    let phoneInput = document.querySelector('#phone');
    let passwordInput = document.querySelector('#password');
    let rePasswordInput = document.querySelector('#rePassword');
    let countrySelect = document.querySelector('#country');
    let errors = false;
    function emailValidate( email ) {
        if ( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email) ) {
            return true;
        } else {
            return false;
        }
    };
    form.addEventListener('submit', function(e) {
        let invalidFeedback = document.querySelector('.fullName');
        if( nameInput.value.length == 0 ) {
            e.preventDefault();
            nameInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            nameInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        invalidFeedback = document.querySelector('.email');
        if( emailInput.value.length == 0 ) {
            e.preventDefault();
            emailInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            emailInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        invalidFeedback = document.querySelector('.phone');
        if( phoneInput.value.length == 0 ) {
            e.preventDefault();
            phoneInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            phoneInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        invalidFeedback = document.querySelector('.password');
        if( passwordInput.value.length == 0 ) {
            e.preventDefault();
            passwordInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            passwordInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        invalidFeedback = document.querySelector('.rePassword');
        if( rePasswordInput.value.length == 0 ) {
            e.preventDefault();
            rePasswordInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            rePasswordInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        invalidFeedback = document.querySelector('.country');
        if( countrySelect.value.length == 0 ) {
            e.preventDefault();
            countrySelect.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            countrySelect.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        if( errors ) {
            e.preventDefault();
        } else {
            e.preventDefault();
            let message = document.querySelector('.succes');
            this.style.display = 'none';
            message.innerHTML = `
                <ul>
                    <li>Nombre: ${nameInput.value}</li>
                    <li>Correo: ${emailInput.value}</li>
                    <li>Teléfono: ${phoneInput.value}</li>
                    <li>País: ${countrySelect.value}</li>
                </ul>
                Gracias por registrarte
            `;
        }
        
    });
    nameInput.addEventListener('blur', function() {
        let invalidFeedback = document.querySelector('.fullName');
        if( this.value.length == 0 ) {
            nameInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            nameInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
    });
    emailInput.addEventListener('blur', function() {
        let invalidFeedback = document.querySelector('.email');
        if( this.value.length == 0 ) {
            emailInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            emailInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        if( !emailValidate( this.value ) ) {
            emailInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Ingresa un email válido';
            errors = true;
        } else {
            emailInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
    });
    phoneInput.addEventListener('blur', function() {
        let invalidFeedback = document.querySelector('.phone');
        if( this.value.length == 0 ) {
            phoneInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            phoneInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        let phoneNumber = Number(this.value);
        if( !phoneNumber ) {
            phoneInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Ingresa un número de teléfono';
            errors = true;
        } else {
            phoneInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
    });
    passwordInput.addEventListener('blur', function() {
        let invalidFeedback = document.querySelector('.password');
        if( this.value.length == 0 ) {
            passwordInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            passwordInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        if( this.value.length < 4 ) {
            passwordInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'La contraseña debe tener un ,mínimo de 4 caracteres';
            errors = true;
        } else {
            passwordInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
    });
    rePasswordInput.addEventListener('blur', function() {
        let invalidFeedback = document.querySelector('.rePassword');
        if( this.value.length == 0 ) {
            rePasswordInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            rePasswordInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
        if( this.value != passwordInput.value ) {
            rePasswordInput.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'La contraseña no coinciden';
            errors = true;
        } else {
            rePasswordInput.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
    });
    countrySelect.addEventListener('blur', function() {
        let invalidFeedback = document.querySelector('.country');
        if( this.value.length == 0 ) {
            countrySelect.classList.add('is-invalid');
            invalidFeedback.style.display = 'block';
            invalidFeedback.innerText = 'Este campo es obligatorio';
            errors = true;
        } else {
            countrySelect.classList.remove('is-invalid');
            invalidFeedback.style.display = 'none';
            invalidFeedback.innerText = '';
            errors = false;
        }
    });
});