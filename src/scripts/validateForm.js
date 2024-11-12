export function myFunction() {
    const btn = document.getElementById('btn-login')
    const email = document.querySelector('input#email')
    const password = document.querySelector('input#password')

    if (email.value.length >= 15 && password.value.length >= 6) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
}