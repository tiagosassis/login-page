import { toggleDisabledLoginBtn, validateEmail, restrictEmailInput, restrictPasswordInput } from "./validateForm.js";
import { togglePasswordVisibility } from "./utils.js";

document.addEventListener('DOMContentLoaded', () =>{
    const spans = document.querySelectorAll('span.material-symbols-outlined.password-visibility')
    spans.forEach((span) => {
        span.addEventListener('click', () => {
            togglePasswordVisibility(span)
        })
    })

    document.querySelector('form').addEventListener('submit', (event) => {
        const isEmailValid = validateEmail()

        if (!isEmailValid) {
            event.preventDefault() // Impede o envio do formulário se o e-mail for inválido
        }
    })

    document.getElementById('email').addEventListener('input', restrictEmailInput);
    document.querySelector('form').addEventListener('input', toggleDisabledLoginBtn)
    document.getElementById('password').addEventListener('input', restrictPasswordInput)
    
})