document.querySelectorAll('span.material-symbols-outlined').forEach((span) => {
    span.addEventListener('click', (event) => {

        event.target.closest('div').querySelectorAll('span.material-symbols-outlined').forEach((span) => {
            span.classList.toggle('display-none')
        })

        const input = span.closest('div').querySelector('input.password')

        if(input.type == 'password'){
            input.setAttribute('type', 'text')
        }
        else {
            input.setAttribute('type', 'password')
        }
    })
})
