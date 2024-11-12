import { myFunction } from "./validateForm.js";

document.addEventListener('DOMContentLoaded', () =>{
    const spans = document.querySelectorAll('span.material-symbols-outlined.password-visibility')

    spans.forEach((span) => {
        span.addEventListener('click', () => {
            togglePasswordVisibility(span)
        })
    })
})

document.querySelector('form').addEventListener('input', myFunction)

function togglePasswordVisibility(span) {
    span.closest('div').querySelectorAll('span.material-symbols-outlined.password-visibility').forEach((icon) => {
        icon.classList.toggle('display-none')
    })

    const input = span.closest('div').querySelector('input.password')

    if (input) {
        if(input.type == 'password'){
            input.setAttribute('type', 'text')
        }
        else {
            input.setAttribute('type', 'password')
        }
    }
    else {
        console.warn('Erro na função togglePasswordVisibility')
    }
}