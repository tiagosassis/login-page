export function toggleDisabledLoginBtn() {
    const btn = document.getElementById('btn-login')
    const email = document.querySelector('input#email')
    const password = document.querySelector('input#password')

    if (email.value.length >= 15 && password.value.length >= 6) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
}

export function validateEmail() {
    console.log('function')
    const inputEmail = document.getElementById('email')
    const isValid = /^[^\s@]+@[^\s@]+\.com/.test(inputEmail.value);

    const alertMessage = document.querySelector('.login-alert-message')
    
    if (!isValid) {
        alertMessage.textContent = 'E-mail inválido.'
        return false
    }
    else {
        alertMessage.textContent = ''
        return true
    }
}

export function restrictPasswordInput(event) {
    const inputPassword = event.target
    const validCharacters = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]+$/; // Expressão regular para caracteres válidos

    const alertMessage = document.querySelector('.password-alert-message');

    if (!validCharacters.test(inputPassword.value)) {
        inputPassword.value = inputPassword.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]+/g, '');
    } else {
        alertMessage.textContent = ''
    }
}



export function restrictEmailInput(event) {
    const alertMessage = document.querySelector('.login-alert-message')
    alertMessage.textContent = ''
    const input = event.target
    const validCharacters = /^[a-zA-Z0-9@._-]+$/

    // Verifica cada caractere digitado
    if (!validCharacters.test(input.value)) {
        // Remove caracteres inválidos
        input.value = input.value.replace(/[^a-zA-Z0-9@._-]+/g, '')
    }
}

